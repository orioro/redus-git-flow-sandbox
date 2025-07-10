FROM ghcr.io/maplibre/martin

WORKDIR /app

# Copy the local config.yaml file to the container
COPY /app/config.yaml /app/config.yaml

# Expose the default Martin port
EXPOSE $PORT

VOLUME /app/data

# Run Martin with the custom configuration
# ENTRYPOINT ["martin", "--config", "/app/config.yaml"]
CMD ["--config", "/app/config.yaml"]
