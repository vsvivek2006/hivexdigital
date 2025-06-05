# HiveXDIGITAL

This project is a digital marketing agency site built with React and Vite.

## Local development

```bash
npm install
npm run dev
```

## Running tests

```bash
npm test
```

## Admin blog editor

A simple WYSIWYG editor page is available at `/admin/blog-editor`. It renders the `BlogAdminEditor` component for quick content editing.

## Dynamic sections

The homepage hero content is now stored in MongoDB and can be edited at `/admin/hero`.
The API exposes generic endpoints:

```
GET /api/sections/:name
PUT /api/sections/:name
```

Additional sections can reuse this mechanism to make the site fully dynamic.
