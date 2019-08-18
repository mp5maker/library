from django.db import models

from django.utils.text import slugify

from django.utils.timezone import now

from django.conf import settings


class Post(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    slug = models.SlugField(null=True, blank=True)
    posted_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name= "posts"
    )
    created = models.DateTimeField(null=True, blank=True)
    updated = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title[:50]

    def save(self, *args, **kwargs):
        if not self.id:
            created = now()
            slug = slugify(self.title[:50])
        updated = now()
        super(Post, self).save(*args, **kwargs)

    class Meta:
        ordering = ['-created']


class Comment(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    commented_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="comments"
    )
    for_post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        related_name="comments"
    )
    created = models.DateTimeField(null=True, blank=True)
    updated = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.title[:50]

    def save(self, *args, **kwargs):
        if not self.id:
            created = now()
        updated = now()
        super(Comment, self).save(*args, **kwargs)


class Like(models.Model):
    liked_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="posts_liked"
    )

    for_post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        related_name="liked_by"
    )

    created = models.DateTimeField(null=True, blank=True)
    updated = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.id

    def save(self, *args, **kwargs):
        if not self.id:
            created = now()
        updated = now()
        super(Comment, self).save(*args, **kwargs)

    class Meta:
        ordering = ['-created']