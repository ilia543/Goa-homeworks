def get_domain_name(url):

    if "://" in url:
        url = url.split("://")[1]

    if url.startswith("www."):
        url = url[4:]

    domain = url.split(".")[0]
    return domain