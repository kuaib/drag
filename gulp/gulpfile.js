var gulp = require("gulp"),
    uglify = require("gulp-uglify");

gulp.task('scripts',function(){
    gulp.src('src/js/*.js')    // 要压缩的js文件
    .pipe(uglify())            // 使用uglify进行压缩
    .pipe(gulp.dest('dist/js'))// 压缩后的路径
})

gulp.task('default',['scripts'])
