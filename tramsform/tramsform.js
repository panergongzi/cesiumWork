/*
 * @Description: 坐标转换工具，下面的坐标转换默认都是基于WGS84 椭球体
 */
class Degrees {
    constructor(longitude, latitude, height = 0) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.height = height;
    }
}
Cesium.Degrees = Degrees;//不建议这样直接修改Cesium原始对象
class Tramsform {
    /** 
     * @description: 弧度转度
     * @param {Number} value 
     * @return {Number} 
     */
    toDegrees(value) {
        return Cesium.Math.toDegrees(value)
    }
    /**
     * @description: 度转弧度
     */
    toRadians(value) {
        return Cesium.Math.toRadians(value)
    }
    /**
     * @description: 经纬度（度）转世界坐标
     * @param {Degrees} degrees.longitude 经度 degrees.latitude 纬度 degrees.height高度
     * @return {Cartesian3} 世界坐标
     */
    degreesToCartesian(degrees) {
        return Cesium.Cartesian3.fromDegrees(degrees.longitude, degrees.latitude, degrees.height)
    }
    /*
    * @description: 世界坐标转 经纬度（度）
    * @param {Cartesian3} cartesian 世界坐标
    * @return {Cartographic}  返回转换之后的经纬度
    */
    degreesFromCartesian(cartesian) {
        let cartographic = this.cartographicFromCartesian(cartesian);
        return this.degreesFromCartographic(cartographic);
    }
    /*
   * @description: 经纬度（度）转经纬度（弧度）
   * @param {*} degrees
   * @return {*}
   */
    degreesToCartographic(degrees) {
        degrees.longitude = this.toRadians(degrees.longitude);
        degrees.latitude = this.toRadians(degrees.latitude);
        return degrees;
    }
    /**
     * @description: 经纬度（弧度）转经纬度（度）
     * @param {Cartographic} cartographic
     * @return {*} 返回经纬度（度）
     */
    degreesFromCartographic(cartographic) {
        cartographic.longitude = this.toDegrees(cartographic.longitude);
        cartographic.latitude = this.toDegrees(cartographic.latitude);
        return cartographic;
    }
    /** 
     * @description: 经纬度（度）坐标转web墨卡托坐标
     * @param {Cartographic} degrees
     * @return {Cartesian3} web墨卡托坐标
     */
    degreesToWebMercatorProjection(degrees) {
        var webMercatorProjection = new Cesium.WebMercatorProjection();
        return webMercatorProjection.project(this.degreesToCartesian(degrees))
    }
    /** 
     * @description: web墨卡托转经纬度（度）
     * @param {Cartesian3} cartesian
     * @return {Cartographic} 经纬度（度）坐标
     */
    degreesFromWebMercatorProjection(cartesian) {
        var webMercatorProjection = new Cesium.WebMercatorProjection();
        return this.degreesFromCartographic(webMercatorProjection.unproject(cartesian))
    }
    /**
     * @description: 弧度坐标转世界坐标
     * @param {Cartographic}   cartographic.longitude 经度
     * @param {Cartographic}   cartographic.latitude 纬度
     * @param {Cartographic}   cartographic.height 高度
     * @return {Cartesian3} 世界坐标
     */
    cartographicToCartesian(cartographic) {
        return Cesium.Cartographic.toCartesian(cartographic)
    }
    /**
     * @description: 世界坐标转经纬度弧度
     * @param {Cartesian3} cartesian 世界坐标
     * @return {Cartographic}  返回转换之后的经纬度弧度坐标
     */
    cartographicFromCartesian(cartesian) {
        return Cesium.Cartographic.fromCartesian(cartesian)
    }
    /**
     * @description: 经纬度度转经纬度弧度
     * @param {Degrees} degrees.longitude 经度 degrees.latitude 纬度 degrees.height高度
     * @return {*}
     */
    cartographicFromDegrees(degrees) {
        return this.degreesToCartographic(degrees)
    }
    /**
       * @description: 经纬度（弧度）转经纬度（度）
       * @param {Cartographic} cartographic
       * @return {*} 返回经纬度（度）
       */
    cartographicToDegrees(cartographic) {
        return this.degreesFromCartographic(cartographic)
    }
    /** 
     * @description: 经纬度（弧度）坐标转web墨卡托坐标
     * @param {Cartographic} cartographic
     * @return {Cartesian3} web墨卡托坐标
     */
    cartographicToWebMercatorProjection(cartographic) {
        var webMercatorProjection = new Cesium.WebMercatorProjection();
        return webMercatorProjection.project(cartographic)
    }
    /** 
     * @description: web墨卡托转经纬度（弧度）
     * @param {Cartesian3} cartesian
     * @return {Cartographic} 弧度坐标
     */
    cartographicFromWebMercatorProjection(cartesian) {
        var webMercatorProjection = new Cesium.WebMercatorProjection();
        return webMercatorProjection.unproject(cartesian)
    }
    /*
   * @description: 世界坐标转 经纬度（度）
   * @param {Cartesian3} cartesian 世界坐标
   * @return {Cartographic}  返回转换之后的经纬度
   */
    cartesianToDegrees(cartesian) {
        return this.degreesFromCartesian(cartesian)
    }
    /**
  * @description: 经纬度（度）转世界坐标
  * @param {Degrees} degrees.longitude 经度 degrees.latitude 纬度 degrees.height高度
  * @return {Cartesian3} 世界坐标
  */
    cartesianFormDegrees(degrees) {
        return this.degreesToCartesian(degrees)
    }
    /**
    * @description: 世界坐标转经纬度(弧度)
    * @param {Cartesian3} cartesian 世界坐标
    * @return {Cartographic}  返回转换之后的经纬度弧度坐标
    */
    cartesianToCartographic(cartesian) {
        return this.cartographicFromCartesian(cartesian)
    }
    /**
   * @description: 弧度坐标转世界坐标
   * @param {Cartographic}  cartographic.longitude 经度
   * @param {Cartographic}  cartographic.latitude 纬度
   * @param {Cartographic}  cartographic.height 高度
   * @return {Cartesian3} 世界坐标
   */
    cartesianFromCartographic(cartographic) {
        return this.cartographicToCartesian(cartographic)
    }
    /**
         * @description: 世界坐标坐标转web墨卡托坐标
         * @param {Cartographic} degrees
         * @return {Cartesian3} web墨卡托坐标
         */
    cartesianToWebMercatorProjection(cartesian) {
        var webMercatorProjection = new Cesium.WebMercatorProjection();
        return webMercatorProjection.project(this.cartesianToCartographic(cartesian))
    }
    /** 
     * @description: web墨卡托转世界坐标
     * @param {Cartesian3} cartesian
     * @return {Cartographic} 世界坐标
     */
    cartesianFromWebMercatorProjection(cartesian) {
        var webMercatorProjection = new Cesium.WebMercatorProjection();
        return this.cartesianFromCartographic(webMercatorProjection.unproject(cartesian))
    }
    /** 
     * @description: 世界坐标转屏幕坐标
     * @param {Cartesian3} cartesian
     * @return {Cartesian2} 屏幕坐标
     */
    cartesianToWindowCoordinates(scene, cartesian) {
        return Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, cartesian)
    }
    /** 
     * @description: 从4*4矩阵中得到平移位置
     * @param {Matrix4} mat4 4*4矩阵
     * @return {Cartesian3} 返回位置信息
     */
    getTranslationFromMatrix4(mat4, result) {
        if (!result) result = new Cesium.Cartesian3();
        return Cesium.Matrix4.getTranslation(mat4, result)
    }
    /** 
     * @description: 返回x,y,z方向的比例尺信息
     * @param {Matrix4} mat4 4*4矩阵
     * @param {Cartesian3} result 用于储存结果
     * @return {Cartesian3} 返回x,y,z方向的比例尺信息
     */
    getScaleFromMatrix4(mat4, result) {
        if (!result) result = new Cesium.Cartesian3();
        return Cesium.Matrix4.getScale(mat4, result)
    }
    /** 
     * @description: 将3*3旋转矩阵转换成齐次坐标
     * @param {Matrix4} matrix 3*3矩阵
     * @param {Quaternion} result 储存结果
     * @return {Quaternion} 返回齐次坐标
     */
    quaternionFromRotationMatrix(matrix, result) {
        return Cesium.Quaternion.fromRotationMatrix(matrix, result)
    }
    /** 
     * @description: 将欧拉角转成齐次坐标
     * @param {HeadingPitchRoll} headingPitchRoll
     * @param {Quaternion} result 储存结果
     * @return {Quaternion} 返回齐次坐标
     */
    quaternionfromHeadingPitchRoll(headingPitchRoll, result) {
        return Cesium.Quaternion.fromHeadingPitchRoll(headingPitchRoll, result)
    }
    /** 
     * @description: 将齐次坐标转成欧拉角表示，和quaternionfromHeadingPitchRoll方法互逆
     * @param {Quaternion} quaternion 齐次坐标
     * @param {HeadingPitchRoll} result  储存结果
     * @return {HeadingPitchRoll} 返回欧拉角
     */
    headingPitchRollFromQuaternion(quaternion, result) {
        return Cesium.HeadingPitchRoll.fromQuaternion(quaternion, result)
    }
    /**
     * @description: 从4*4矩阵中得到欧拉角
     * @param {Matrix4} transform 4*4矩阵
     * @param {Ellipsoid} ellipsoid 84椭球体
     * @param {Transforms.LocalFrameToFixedFrame} fixedFrameTransform 参考系，默认东-北-上参考系
     * @param {HeadingPitchRoll} result 储存结果
     * @return {HeadingPitchRoll}
     */
    fixedFrameToHeadingPitchRoll(transform, ellipsoid, fixedFrameTransform, result) {
        return Cesium.Transforms.fixedFrameToHeadingPitchRoll(transform, ellipsoid, fixedFrameTransform, result)
    }
    /** 
     * @description: 将欧拉角转成3*3矩阵
     * @param {HeadingPitchRoll} headingPitchRoll
     * @param {Matrix3} result 储存结果
     * @return {Matrix3} 返回一个3*3矩阵
     */
    matrixFromHeadingPitchRoll(headingPitchRoll, result) {
        return Cesium.Matrix3.fromHeadingPitchRoll(headingPitchRoll, result)
    }
    /** 
     * @description: 根据东-北-上方向参考系生成4*4矩阵,已知道地球上的某个位置，可以根据这个方法生成一个4*4矩阵
     * @param {Cartesian3} origin 原点坐标
     * @param {Ellipsoid} ellipsoid 84椭球体
     * @param {Matrix4} result 储存结果
     * @return {Matrix4} 返回4*4矩阵
     */
    eastNorthUpToFixedFrame(origin, ellipsoid, result) {
        return Cesium.Transforms.eastNorthUpToFixedFrame(origin, ellipsoid, result)
    }
    /** 
     * @description: 根据原点和欧拉角生成4*4矩阵
     * @param {Cartesian3} origin 原点坐标
     * @param {HeadingPitchRoll} headingPitchRoll 欧拉角
     * @param {Ellipsoid} ellipsoid
     * @param {Transforms.LocalFrameToFixedFrame} fixedFrameTransform 参考系，默认为东-北-上参考系
     * @param {Matrix4} result 储存结果
     * @return {Matrix4} 返回4*4矩阵
     */
    headingPitchRollToFixedFrame(origin, headingPitchRoll, ellipsoid, fixedFrameTransform, result) {
        return Cesium.Transforms.headingPitchRollToFixedFrame(origin, headingPitchRoll, ellipsoid, fixedFrameTransform, result)
    }


}
let tramsform = new Tramsform()