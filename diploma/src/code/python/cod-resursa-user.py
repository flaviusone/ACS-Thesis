class Meta:
    excludes = [
        'password', 'is_active', 'is_staff', 'is_superuser']
    filtering = {
        'username': ALL,
    }
