from django.db import models

from django.utils.timezone import now
from django.contrib.auth.models import User


class PollModel(models.Model):
    question = models.CharField(max_length=200)
    created_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    pub_date = models.DateTimeField(null=True, blank=True)
    updated_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.question[:50]

    def save(self, *args, **kwargs):
        if not self.id:
            pub_date = now()
        updated_date = now()
        super(PollModel, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Poll'
        verbose_name_plural = 'Polls'
        ordering = ('-id', )


class ChoiceModel(models.Model):
    poll = models.ForeignKey(
        PollModel,
        related_name='choices',
        on_delete=models.CASCADE
    )
    choice_text = models.CharField(max_length=100)

    def __str__(self):
        return self.choice_text[:50]

    class Meta:
        verbose_name = 'Choice'
        verbose_name_plural = 'Choices'
        ordering = ('-id', )

class VoteModel(models.Model):
    choice = models.ForeignKey(
        ChoiceModel,
        related_name='votes',
        on_delete=models.CASCADE
    )
    poll = models.ForeignKey(
        PollModel,
        on_delete=models.CASCADE
    )
    voted_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    class Meta:
        unique_together: ('poll', 'voted_by', )
