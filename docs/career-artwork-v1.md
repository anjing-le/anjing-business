# 职业服务插画 V1

生成方式：内置 imagegen，三个独立素材；未使用 CLI 或 Runway。参考用户提供的产品站蜡笔插画卡片；后两张使用前一张插画作为风格参考。图片仅承担中部示意，中文标题、流程标签和交付说明均为网页文字。

## 文件

- `assets/career/source/understand-v1.png` → `assets/career/understand-v1.webp`
- `assets/career/source/tailor-v1.png` → `assets/career/tailor-v1.webp`
- `assets/career/source/accompany-v1.png` → `assets/career/accompany-v1.webp`

保留生成原图。网页采用 900×600 WebP、质量 82；构建仅发布实际引用的 WebP，不发布 source 中的原图。各图在知识付费手牌展开时请求，沿用带哈希文件名的长期缓存。

## 生成提示词

### 了解你

Generate one production website illustration asset, landscape 3:2 aspect ratio. This is the middle illustration for a warm paper career-service card, in the same style as the reference images in conversation: delicate colored-pencil and wax-crayon texture, warm ivory paper, hand-drawn charcoal outlines, soft muted sage green, pastel blue, ochre accents. Do NOT draw a card mockup, no perspective, no shadows outside a card, no screenshot background, no water, no border, no lettering or text of any language. Show a clear left-to-right small infographic: on left a personal profile sheet with round portrait icon and a few lines representing education/work/project background, and a small flag representing personal goals; in center a hand-drawn magnifying glass examining strengths and gaps; on right a neatly folded personal route map with three connected milestones and a small destination flag. 3 clearly separated groups connected with subtle thin hand-drawn arrows. Large simple objects, legible at 350px wide, plenty of calm whitespace. Absolutely no words, numbers or logos. Flat straight-on illustration, off-white ivory background matching watercolor paper; no people outside the small portrait.

### 为你设计

Create a NEW companion website illustration in exactly the colored-pencil / wax crayon hand-drawn style of the most recent illustration. Use most recent image ONLY as a style reference, not as edit target. Landscape 3:2 aspect ratio. Soft warm ivory paper, charcoal pencil outlines, muted pastel blue, sage green, ochre and peach. Flat straight-on drawing no perspective no card mockup no frame no water background no external shadows. No words, no letters, no numbers, no logos. Three clearly separated groups in left-to-right composition connected by thin green pencil arrows: left a small profile card with friendly portrait and a little destination flag showing a person's starting point and goal; middle a small open wooden tray of teaching resources represented by an open book, a laptop showing simple building blocks, and a pencil with check sheet; right a personalized course folder with three colored tabs and a single large paper sheet with a simple step-by-step route and 3 checkboxes. The three groups mean personal situation + matched teaching resources -> tailored learning and project practice. Large simple shapes, ample whitespace, clear at 350px wide. No decorative objects unrelated to teaching. Keep the drawing centered vertically and horizontally with generous clean ivory margins.

### 陪你推进

Create a NEW companion illustration using the most recent image ONLY as style reference. Colored pencil and wax crayon hand-drawn infographic, landscape 3:2, warm ivory textured paper, thin charcoal pencil lines, soft pastel blue, sage green, ochre, peach. No letters words numbers or logos. Flat straight-on drawing, not a card mockup, no frame, no water, no external shadows. Show three large clear groups from left to right, connected by thin green hand-drawn arrows: first a small milestone/task board with a few completed and pending tasks representing ongoing execution; middle a laptop showing a friendly advisor and a learner side-by-side in a remote conversation, with a small project sheet and pencil nearby representing project review and mock interviews; right two overlapping feedback reports with green checkmarks and a small circular returning arrow pointing towards a next milestone flag, representing concrete feedback and iterative adjustment. Must show feedback as visible reviewed documents, not promises of employment. Keep composition restrained, three large groups with no unrelated decorations, generous ivory margins. Illustration will be used on a career-coaching service webpage at small size so shapes must be simple and readable.
