# Generated by Django 4.2.6 on 2023-10-31 08:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0002_alter_bus_bus_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bus',
            name='bus_number',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]