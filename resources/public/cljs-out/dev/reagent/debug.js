// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8086__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8087__i = 0, G__8087__a = new Array(arguments.length -  0);
while (G__8087__i < G__8087__a.length) {G__8087__a[G__8087__i] = arguments[G__8087__i + 0]; ++G__8087__i;}
  args = new cljs.core.IndexedSeq(G__8087__a,0,null);
} 
return G__8086__delegate.call(this,args);};
G__8086.cljs$lang$maxFixedArity = 0;
G__8086.cljs$lang$applyTo = (function (arglist__8088){
var args = cljs.core.seq(arglist__8088);
return G__8086__delegate(args);
});
G__8086.cljs$core$IFn$_invoke$arity$variadic = G__8086__delegate;
return G__8086;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8089__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8090__i = 0, G__8090__a = new Array(arguments.length -  0);
while (G__8090__i < G__8090__a.length) {G__8090__a[G__8090__i] = arguments[G__8090__i + 0]; ++G__8090__i;}
  args = new cljs.core.IndexedSeq(G__8090__a,0,null);
} 
return G__8089__delegate.call(this,args);};
G__8089.cljs$lang$maxFixedArity = 0;
G__8089.cljs$lang$applyTo = (function (arglist__8091){
var args = cljs.core.seq(arglist__8091);
return G__8089__delegate(args);
});
G__8089.cljs$core$IFn$_invoke$arity$variadic = G__8089__delegate;
return G__8089;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
