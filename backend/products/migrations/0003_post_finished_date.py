# Generated by Django 3.2.6 on 2023-09-27 07:49

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20230927_0946'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='finished_date',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='読み終わった日'),
            preserve_default=False,
        ),
    ]
