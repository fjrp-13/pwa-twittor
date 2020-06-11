// Guardará en el cache dinámico
// @Params:
// dynamicCache: Cache dinámico
// req: Request a almacenar
// res: Respuesta obtenida por la request
function updateDynamicCache(dynamicCache, req, res) {
    if (res.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone())
            return res.clone();
        });
    } else {
        return res;
    }
}