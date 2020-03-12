CREATE TABLE `t_kujiale_floor_plan`  (
  `id` int(22) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NULL COMMENT '户型图url',
  `spec` varchar(255)  NULL COMMENT '描述 几室几厅',
  `area` varchar(255) NULL COMMENT '面积',
  `city_second_zone` varchar(255)  NULL COMMENT '片区，如李沧公园，下王埠',
  `community_name` varchar(255)  NULL COMMENT '小区名字',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4;
