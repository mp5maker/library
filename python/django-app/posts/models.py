from django.db import models

from django.utils.text import slugify

from django.utils.timezone import now

from django.conf import settings

class Common(models.Model):
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated = models.DateTimeField(auto_now=True, null=True, blank=True)
    description  = models.TextField(max_length=500, null=True, blank=True)

    class Meta:
        abstract = True


class Post(Common):
    title = models.CharField(max_length=200)
    slug = models.SlugField(null=True, blank=True)
    posted_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name= "posts"
    )

    def __str__(self):
        return self.title[:50]

    def save(self, *args, **kwargs):
        if not self.id:
            slug = slugify(self.title[:50])
        super(Post, self).save(*args, **kwargs)

    class Meta:
        ordering = ['-created']


class Comment(Common):
    title = models.CharField(max_length=200)
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

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.title[:50]

class Like(Common):
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

    def __str__(self):
        return self.id

    class Meta:
        ordering = ['-created']