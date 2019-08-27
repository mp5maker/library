from uuid import uuid4

def movie_directory_path_with_uuid(instance, filename):
    return '{}/{}'.format(instance.movie_id, uuid4())