# Hugo Static Website

This is a static website built with [Hugo](https://gohugo.io/) using the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme. It is the demo site for the Hugo blog posts on hobbyworker.me.

## Demo

You can see a live demo of this website at https://hobbyworker.github.io/hugo-demo/

## Versions

| Tag | Hugo | PaperMod | Posts |
|---|---|---|---|
| `v2026` | 0.167.0 | d376885 (2026-08-02) | Hugo Blog 2026 series |
| `v2023` | 0.111.3 | d67462d (2023-03-04) | 2023 posts |

The `main` branch is the 2026 version. The code used in the 2023 posts is at the [`v2023`](https://github.com/hobbyworker/hugo-demo/tree/v2023) tag.

## Blog posts

### Hugo Blog 2026

- [Hugo Blog 2026 (1): Deploying to GitHub Pages with GitHub Actions](https://hobbyworker.me/en/dev/2026-10-03-hugo-blog-2026-1-deploy-to-github-pages-with-github-actions/)
- [Hugo Blog 2026 (2): Adding Ad Blocker Detection to PaperMod](https://hobbyworker.me/en/dev/2026-10-05-hugo-blog-2026-2-adblocker-detection-for-papermod/) (published on 2026-10-05)

### 2023 (code at `v2023`)

- [Adding AdBlocker Detection to Your Hugo Blog with PaperMod Theme](https://hobbyworker.me/en/dev/2023-03-24-adding-adblocker-detection-to-your-hugo-blog-with-papermod-theme/)
- [Deploying a Hugo Static Site to GitHub Pages with GitHub Actions](https://hobbyworker.me/en/dev/2023-03-25-deploying-a-hugo-static-site-to-github-pages-with-github-actions/)

## Run locally

```bash
git clone --recurse-submodules https://github.com/hobbyworker/hugo-demo.git
cd hugo-demo
hugo server
```

## License

This project is licensed under the MIT License
