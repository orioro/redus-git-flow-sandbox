#
# PostgREST official image is built from nix
# We'll use an Alpine-based image for easier debuggability.
#
# See:
# https://github.com/PostgREST/postgrest/tree/main/nix/tools/docker
#

FROM alpine:3.21.3

# Install necessary dependencies
RUN apk add --no-cache curl xz

# Download and extract PostgREST static binary
RUN curl -L -o postgrest.tar.xz https://github.com/PostgREST/postgrest/releases/download/v12.2.8/postgrest-v12.2.8-linux-static-x86-64.tar.xz \
    # Correção
    && tar -xJf postgrest.tar.xz -C /bin \
    && rm postgrest.tar.xz \
    && chmod +x /bin/postgrest

# Modificação 2

WORKDIR /app

COPY ./postgrest.conf ./postgrest.conf

# Modificação 3

# Modificação 4

# Modificação 5

# Run PostgREST mapping env variables (needed for Heroku)
CMD ["sh", "-c", "PGRST_DB_URI=$PGRST_PUBLIC_ANONYMOUS_URL PGRST_SERVER_PORT=$PORT postgrest /app/postgrest.conf"]
