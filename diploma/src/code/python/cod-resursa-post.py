class PostResource(ModelResource):

    author = fields.ForeignKey(UserResource, 'author')

    class Meta:
        queryset = Post.objects.all()
        resource_name = 'post'
        authorization = Authorization()
        always_return_data = True

    def build_schema(self):
        base_schema = super(ModelResource, self).build_schema()
        base_schema['fields']['author'][
            'resource'] = this.author.get_resource_uri()
        return base_schema
