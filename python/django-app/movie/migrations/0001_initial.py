# Generated by Django 2.2.4 on 2019-08-26 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('status', models.IntegerField(choices=[(1, 'On Hold'), (2, 'In Review'), (3, 'Published'), (4, 'Draft')], default=3)),
                ('year', models.PositiveIntegerField()),
                ('rating', models.IntegerField(choices=[(1, 'NR - Not Rated'), (2, 'G - General Audience'), (3, 'PG - Parental Guidance'), (3, 'PG Parental Guidance'), (4, 'R - Restricted')], default=1)),
                ('runtime', models.PositiveIntegerField()),
                ('website', models.URLField(blank=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
