# Turing School of Software and Design

## Site for the Module 0 Curriculum

Mod0 curriculum lives at [http://mod0.turing.io/](http://mod0.turing.io/)

This site is built with Jekyll. Find the docs [here](https://jekyllrb.com/docs/usage/)

### Contributing

* Clone the repo `git clone git@github.com:turingschool/mod-0-curriculum.git`
* run `bundle install`
* You can now begin to edit the website.
* To start the server run `jekyll serve`.
* Navigate to `localhost:4000` to see the site

* make changes on the `gh-pages` branch.
* you can push changes to production by pushing the `gh-pages` branch to github. `git push origin gh-pages`.
* The changes may take a minute or two to be recognized on production. Please make sure you review your changes on production.

## Structure of the site and where to find the most important things:

You will find a session specific directory. eg `session1`. All files within this site can be written as either markdown or html.

The `navigation.html` file is where you will find the sidebar for the site.

## Some handy tips for editing/creating content

### Headers in your markdown files

Put something like this at the top of all your markdown files:

```yaml
---
title: Name of Session
subheading: topics
layout: page
---
```

- `subheading` is optional
- `layout` will always going to be `page`

### Links and Paths

When linking to a markdown file, drop the `.md` in your link. Instead of linking to `name_of_file.md`, just use `name_of_file`. Other files, like PDFs and PNGs, keep the original extension.

#### Absolute vs Relative paths

Use *relative* links instead of *absolute* links. 

### Conventions

- Put a space after your `#`'s in headers
- Put a blank line between your headers and any content below
- Replace any `|` with `\|` unless you're really trying to do a table
