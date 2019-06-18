from django.db import models

from django.utils.timezone import now

from django.utils.text import slugify

class BlogModel(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(blank=True)
    description = models.TextField(blank=True)
    created = models.DateTimeField(blank=True)
    updated = models.DateTimeField(blank=True)

    def save(self, *args, **kwargs):
        if not self.id:
            self.slug = slugify(self.title[:50])
            self.created = now()
        self.updated = now()
        super(BlogModel, self).save(*args, **kwargs)

    def __str__(self):
        return self.title[:20]

    class Meta:
        verbose_name = "Blog"
        verbose_name_plural = "Blogs"
        ordering = ('created', )
