Tracking Log Graph
===

A visualiser of user tracking data from Google Analytics

## Dependency
- node:10.16.0
- mongo:4.0.12

## Usage
    git clone https://github.com/shu000/tracking-log-graph.git
    cd etc
    docker-compose up -d
Access to http://127.0.0.1

## Debug
    docker-compose -f docker-compose-debug.yml up
Webpack-dev-server will be running on http://127.0.0.1:8080

Note: Server on :8080 looks the same dist/ and mongodb that Server on :80 looks
