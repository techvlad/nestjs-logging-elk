# Example of configuration ELK + Filebeat for docker logs (json format)

### How to run
```bash
docker-compose build --parallel
docker-compose up -d
```

### Ports
 * 5601 - Kibana
 * 9200 - Elasticsearch
 * 3000 - NestJS api
 * 5044 - Logstash (for Filebeat)
