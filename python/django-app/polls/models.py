from django.db import models

from django.utils.timezone import now

from core.models import User


class Poll(models.Model):
    question = models.CharField(max_length=200)
    created_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    pub_date = models.DateTimeField(blank=True, null=True)
    updated_date = models.DateTimeField(blank=True, null=True)

    def save(self, *args, **kwars):
        if not self.id:
            self.pub_date = now()
        self.updated_date = now()
        super(Poll, self).save(*args, **kwargs)

    def __str__(self):
        return self.question[:20]

    class Meta:
        ordering = ('-id', )


class Choice(models.Model):
    poll = models.ForeignKey(
        Poll,
        related_name="choices",
        on_delete=models.CASCADE
    )
    choice_text = models.CharField(max_length=100)

    def __str__(self):
        return self.choice_text

    class Meta:
        ordering: ('-id', )


class Vote(models.Model):
    choice = models.ForeignKey(
        Choice,
        related_name="votes",
        on_delete=models.CASCADE
    )
    poll = models.ForeignKey(
        Poll,
        on_delete=models.CASCADE
    )
    voted_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    class Meta:
        unique_together = ("poll", "voted_by", )