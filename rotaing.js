
/*
 
 * @description: 模型旋转 针对"Entity", "Tileset", "Primitive"的情况
 */

class RotaingModel {
    constructor() {
    }
    /**
      
     * @description: 旋转"Entity", "Tileset", "Primitive"
     * @param {Entity/Tileset/Primitive} object
     * @param {Cartesian3} options
     * @return {Object}
     */
    updata(object, options) {
        //获得位置矩阵
        let transform = this.getRotateMat4(object);
        //获取旋转之后的矩阵
        transform = this.rotatingByMatrix4(transform, options);
        //设置对象旋转之后的方向
        this.setRotateMat4(object, transform);
        return {
            object, transform
        }
    }
    /**
      
     * @description: 获得位置矩阵，针对"Entity", "Tileset", "Primitive"的情况
     * @param {Entity/Tileset/Primitive} object
     * @return {*}
     */
    getRotateMat4(object) {
        let transform;
        if (object._root) {
            transform = object._root.transform;
        } else if (object.modelMatrix) {
            transform = object.modelMatrix;
        }

        if (object.position) {
            transform = this.getEntityRotateMat4(object);
        }
        return transform;
    }
    /**
      
     * @description: 设置位置矩阵，针对"Entity", "Tileset", "Primitive"的情况
     * @param {Entity/Tileset/Primitive} object
     * @param {*} transform
     * @return {*}
     */
    setRotateMat4(object, transform) {
        if (object._root) {
            object._root.transform = transform;

        } else if (object.modelMatrix) {
            object.modelMatrix = transform;
        }

        if (object.position) {
            let orientation = new Cesium.Quaternion();
            let m3 = Cesium.Matrix4.getRotation(transform, new Cesium.Matrix3())
            Cesium.Quaternion.fromRotationMatrix(m3, orientation);
            object.orientation.setValue(orientation)
        }
    }
    /**
      
     * @description: 从entity获取位置矩阵
     * @param {Entity/Tileset/Primitive} object
     * @return {*}
     */
    getEntityRotateMat4(object) {
        let orientation, position = object.position.getValue(Cesium.JulianDate.now());
        if (!object.orientation) {
            let heading = Cesium.Math.toRadians(0);
            let pitch = Cesium.Math.toRadians(0);
            let roll = Cesium.Math.toRadians(0);
            let hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
            orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
            object.orientation = orientation
        }
        orientation = object.orientation.getValue(Cesium.JulianDate.now())
        return Cesium.Matrix4.fromTranslationQuaternionRotationScale(position, orientation, new Cesium.Cartesian3(1, 1, 1), new Cesium.Matrix4())
    }
    /**
      
     * @description: 给定x,y,z三个方向的旋转角度和位置矩阵，求旋转之后的矩阵
     * @param {Matrix4} mat
     * @param {Cartesian3} options
     * @return {Matrix4} 旋转之后的矩阵
     */
    rotatingByMatrix4(mat, options) {
        let _rotateX = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(options.x));
        let _rotateY = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(options.y));
        let _rotateZ = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(options.z));
        mat = Cesium.Matrix4.multiplyByMatrix3(mat, _rotateX, mat);
        mat = Cesium.Matrix4.multiplyByMatrix3(mat, _rotateY, mat);
        mat = Cesium.Matrix4.multiplyByMatrix3(mat, _rotateZ, mat);
        return mat;
    }
}
export default new RotaingModel();