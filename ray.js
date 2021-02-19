/*
 * @author: pwz（潘文周）
 * @description: cesium常用的几种射线
 */
class Ray {
    /**
     * @author: pwz（潘文周） 
     * @description: 沿着x轴方向的射线
     * @param {Cartesian3} origin 原点
     * @return {Ray}
     */
    xRay(origin) {
        let direction = Cesium.Cartesian3.UNIT_X;
        return new Cesium.Ray(origin, direction)
    }
    /**
  * @author: pwz（潘文周） 
  * @description: 沿着y轴方向的射线
  * @param {Cartesian3} origin 原点
  * @return {Ray}
  */
    yRay(origin) {
        let direction = Cesium.Cartesian3.UNIT_Y;
        return new Cesium.Ray(origin, direction)
    }
    /**
  * @author: pwz（潘文周） 
  * @description: 沿着z轴方向的射线,也叫垂直射线
  * @param {Cartesian3} origin 原点
  * @return {Ray}
  */
    zRay(origin) {
        let direction = Cesium.Cartesian3.UNIT_Z;
        return new Cesium.Ray(origin, direction)
    }
    /**
   * @author: pwz（潘文周） 
   * @description: 求相机位置到屏幕坐标点连线做射线
   * @param {Viewer} viewer
   * @param {Cartesian2} windowPosition 屏幕坐标
   * @param {Ray} result
   * @return {Ray} 返回相机位置和屏幕位置的射线
   */
    getCameraPickRay(viewer, windowPosition, result) {
        return viewer.scene.camera.getPickRay(windowPosition, result)
    }
    /**
 * @author: pwz（潘文周） 
 * @description: 根据相机位置和朝向做射线
 * @param {Viewer} viewer
 * @param {Cartesian2} windowPosition 屏幕坐标
 * @return {Ray} 得到相机朝向射线
 */
    cameraRay(viewer) {
        let camera = viewer.scene.camera;
        return new Cesium.Ray(camera.position, camera.direction)
    }
    /**
     * @author: pwz（潘文周） 
     * @description: 根据点A和点B的位置做射线，得到A指向B的射线
     * @param {Cartesian3} positionA 位置A
     * @param {Cartesian3} positionB 位置B
     * @return {Ray} 返回A指向B的射线
     */
    getRayByTwoPoint(positionA, positionB) {
        let result = new Cesium.Cartesian3();
        let direction = Cesium.Cartesian3.normalize(Cesium.Cartesian3.subtract(positionB, positionA, result), result);
        return new Cesium.Ray(positionA, direction)
    }
}