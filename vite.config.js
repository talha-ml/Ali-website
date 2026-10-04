import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const { SITE_URL } = loadEnv(mode, process.cwd(), 'SITE_');
  let canonical;
  if (SITE_URL) {
    const url = new URL(SITE_URL);
    if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) {
      throw new Error('SITE_URL must be the public HTTPS site URL, without credentials, query, or fragment.');
    }
    canonical = url.href;
  }
  return {
    plugins: [react(), {
      name: 'portfolio-social-metadata',
      transformIndexHtml() {
        if (!canonical) return [];
        const image = new URL('/ahmad_ali_portrait.jpg', canonical).href;
        return [
          { tag: 'link', attrs: { rel: 'canonical', href: canonical }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: canonical }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image', content: image }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Ahmad Ali, physician and researcher' }, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'twitter:image', content: image }, injectTo: 'head' },
        ];
      },
    }],
  };
});
