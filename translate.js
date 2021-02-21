
/*
 * @description:  模型平移 针对"Entity", "Tileset", "Primitive"的情况
 */
class Translate {
    constructor() {
    }
    updata(object, options) {
        
        let transform;
        let m = Cesium.Matrix4.fromArray([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            options.x,
            options.y,
            options.z,
            1.0,
        ]);
        if (object._root) {
            transform = object._root.transform;
            object.root.transform = Cesium.Matrix4.multiply(transform, m, transform);
        } else if (object.modelMatrix) {
            transform = object.modelMatrix;
            object.modelMatrix = Cesium.Matrix4.multiply(transform, m, transform);
        }
        if (object.position) {
            let position = object.position.getValue(Cesium.JulianDate.now());
            transform = Cesium.Transforms.eastNorthUpToFixedFrame(position);
            let modelMatrix = Cesium.Matrix4.multiply(transform, m, transform);
            Cesium.Matrix4.getTranslation(modelMatrix, position)
            object.position.setValue(position)
        }
        return {
            object, transform
        }

    }
}
export default new Translate()