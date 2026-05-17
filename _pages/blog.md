---
layout: page
title: Notes
permalink: /blog/
description: Research notes on market structure, factor behavior, and live-system observations.
---

{% if site.posts.size > 0 %}
  <div class="lab-notes-list">
    {% for post in site.posts %}
      <a href="{{ post.url | relative_url }}">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
        <strong>{{ post.title }}</strong>
        {% if post.description %}
          <p>{{ post.description }}</p>
        {% endif %}
      </a>
    {% endfor %}
  </div>
{% else %}
  <div class="lab-notes-empty">
    <strong>No notes published yet.</strong>
    <p>
      This section will collect research notes on factor behavior, regime shifts,
      and lessons from running the live system.
    </p>
  </div>
{% endif %}
