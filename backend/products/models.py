from django.db import models


class Post(models.Model):
    title = models.CharField('本のタイトル', max_length=50)
    author = models.CharField('作者', max_length=50)
    image = models.ImageField(upload_to='images', verbose_name='イメージ画像')
    content = models.TextField('本文')
    finished_date = models.DateField('読み終わった日', auto_now_add=True)
    created_at = models.DateTimeField('作成日', auto_now_add=True)
    updated_at = models.DateField('更新日', auto_now=True)

    def __str__(self):
        return self.title
