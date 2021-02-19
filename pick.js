/*
 * @author: pwz（潘文周）
 * @description: cesium常用的几种拾取方法
 */

class Pick {
    /**
     * @author: pwz（潘文周） 
     * @description: 拾取得到场景中的第一个primitive
     * @param {Viewer} viewer 
     * @param {Cartesian2} windowPosition 屏幕坐标
     * @param {Number} width 拾取矩形的宽度
     * @param {Number} height 拾取矩形的高度
     * @return {Object} 返回拾取得到的primitive
     */
    pick(viewer, windowPosition, width, height) {
        return viewer.scene.pick(windowPosition, width, height)
    }
    /**
     * @author: pwz（潘文周） 
     * @description: 根据屏幕坐标拾取场景中对应的世界坐标
     * @param {Viewer} viewer
     * @param {Cartesian2} windowPosition 屏幕坐标
     * @param {Cartesian3} result 储存结果
     * @return {Cartesian3} 返回拾取到的世界坐标位置
     */
    pickPosition(viewer, windowPosition, result) {
        if (!result) result = new Cesium.Cartesian3();
        return viewer.scene.pickPosition(windowPosition, result)
    }
    /**
  * @author: pwz（潘文周） 
  * @description: 根据屏幕坐标拾取场景中对应的世界坐标
  * @param {Viewer} viewer
  * @param {Cartesian2} windowPosition 屏幕坐标
  * @param {Cartesian3} result 储存结果
  * @return {Cartesian3} 返回拾取到的世界坐标位置
  */
    pickPositionWorldCoordinates(viewer, windowPosition, result) {
        if (!result) result = new Cesium.Cartesian3();
        return viewer.scene.pickPositionWorldCoordinates(windowPosition, result)
    }
    /**
     * @author: pwz（潘文周） 
     * @description: 根据屏幕坐标批量拾取场景中的primitive
     * @param {Viewer} viewer
     * @param {Cartesian2} windowPosition 屏幕坐标
     * @param {Number} limit 限制拾取的数量
     * @param {Number} width 拾取矩形的宽度
     * @param {Number} height 拾取矩形的高度
     * @return {Array} 返回拾取到的primitive数组
     */
    drillPick(viewer, windowPosition, limit, width, height) {
        return viewer.scene.drillPick(windowPosition, limit, width, height)
    }
    /**
     * @author: pwz（潘文周） 
     * @description: 通过射线拾取到第一个primitive和世界坐标位置
     * @param {Viewer} viewer
     * @param {Ray} ray
     * @param {Object[]} objectsToExclude 需要排除的被拾取对象列表
     * @param {Number} width 相交点的宽度，单位为米
     * @return {Object} 返回拾取结果
     */
    pickFromRay(viewer, ray, objectsToExclude, width) {
        return viewer.scene.pickFromRay(ray, objectsToExclude, width)
    }

    /**
    * @author: pwz（潘文周） 
    * @description: 通过射线拾取到第一个primitive和世界坐标位置,pickFromRay的异步模式
    * @param {Viewer} viewer
    * @param {Ray} ray
    * @param {Object[]} objectsToExclude 需要排除的被拾取对象列表
    * @param {Number} width 相交点的宽度，单位为米
    * @return {Object} 返回拾取结果
    */
    async pickFromRayMostDetailed(viewer, ray, objectsToExclude, width) {
        return await viewer.scene.pickFromRayMostDetailed(ray, objectsToExclude, width)
    }
    /**
    * @author: pwz（潘文周） 
    * @description: 通过射线批量拾取primitive和世界坐标位置，返回一个拾取列表
    * @param {Viewer} viewer
    * @param {Ray} ray
    * @param {Object[]} objectsToExclude 需要排除的被拾取对象列表
    * @param {Number} width 相交点的宽度，单位为米
    * @return {Object} 返回拾取结果
    */
    drillPickFromRay(viewer, ray, objectsToExclude, width) {
        return viewer.scene.drillPickFromRay(ray, objectsToExclude, width)
    }
    /**
   * @author: pwz（潘文周） 
   * @description: 通过射线批量拾取primitive和世界坐标位置，返回一个拾取列表，drillPickFromRay的异步模式
   * @param {Viewer} viewer
   * @param {Ray} ray
   * @param {Object[]} objectsToExclude 需要排除的被拾取对象列表
   * @param {Number} width 相交点的宽度，单位为米
   * @return {Object} 返回拾取结果
   */
    drillPickFromRayMostDetailed(viewer, ray, objectsToExclude, width) {
        return viewer.scene.drillPickFromRayMostDetailed(ray, objectsToExclude, width)
    }
    /**
     * @author: pwz（潘文周） 
     * @description: 根据经纬度（弧度）坐标拾取场景中的几何体高度
     * @param {Viewer} viewer
     * @param {Cartographic} position
     * @param {Object[]} objectsToExclude 需要排除的被拾取对象列表
     * @param {Number} width 相交点的宽度，单位为米
     * @return {Number} 返回高度
     */
    sampleHeight(viewer, position, objectsToExclude, width) {
        return viewer.scene.sampleHeight(position, objectsToExclude, width)
    }
    /**
    * @author: pwz（潘文周） 
    * @description: 根据经纬度（弧度）坐标拾取场景中的几何体高度，sampleHeight的异步模式
    * @param {Viewer} viewer
    * @param {Cartographic} position
    * @param {Object[]} objectsToExclude 需要排除的被拾取对象列表
    * @param {Number} width 相交点的宽度，单位为米
    * @return {Number} 返回高度
    */
    async sampleHeightMostDetailed(viewer, position, objectsToExclude, width) {
        return await viewer.scene.sampleHeightMostDetailed(position, objectsToExclude, width)
    }
    /**
    * @author: pwz（潘文周） 
    * @description: 根据经纬度（弧度）坐标拾取场景中的几何体表面的位置
    * @param {Viewer} viewer
    * @param {Cartesian3} position
    * @param {Object[]} objectsToExclude 需要排除的被拾取对象列表
    * @param {Number} width 相交点的宽度，单位为米
    * @return {Cartesian3} 返回几何体表面的世界坐标
    */
    clampToHeight(viewer, position, objectsToExclude, width) {
        return viewer.scene.clampToHeight(position, objectsToExclude, width)
    }
    /**
  * @author: pwz（潘文周） 
  * @description: 根据经纬度（弧度）坐标拾取场景中的几何体表面的位置,clampToHeight的异步模式
  * @param {Viewer} viewer
  * @param {Cartesian3} position
  * @param {Object[]} objectsToExclude 需要排除的被拾取对象列表
  * @param {Number} width 相交点的宽度，单位为米
  * @return {Cartesian3} 返回几何体表面的世界坐标
  */
    async clampToHeightMostDetailed(viewer, position, objectsToExclude, width) {
        return await viewer.scene.clampToHeightMostDetailed(position, objectsToExclude, width)
    }
    /**
     * @author: pwz（潘文周） 
     * @description: 通过相机位置和屏幕的坐标的连线拾取地球上的点的位置
     * @param {Viewer} viewer
     * @param {Cartesian2} windowPosition 屏幕坐标
     * @param {Ellipsoid} ellipsoid 椭球体
     * @param {Cartesian3} result 储存结果
     * @return {Cartesian3} 返回椭球体上的世界坐标位置
     */
    pickEllipsoidByCamera(viewer, windowPosition, ellipsoid, result) {
        return viewer.scene.camera.pickEllipsoid(windowPosition, ellipsoid, result)
    }
}

