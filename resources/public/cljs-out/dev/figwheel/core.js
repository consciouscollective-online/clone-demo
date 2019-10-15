// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__10642_SHARP_){
var k = f.call(null,p1__10642_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10643){
var vec__10644 = p__10643;
var k = cljs.core.nth.call(null,vec__10644,(0),null);
var v = cljs.core.nth.call(null,vec__10644,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10648 = arguments.length;
var i__4731__auto___10649 = (0);
while(true){
if((i__4731__auto___10649 < len__4730__auto___10648)){
args__4736__auto__.push((arguments[i__4731__auto___10649]));

var G__10650 = (i__4731__auto___10649 + (1));
i__4731__auto___10649 = G__10650;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq10647){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10647));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__10653){
var map__10654 = p__10653;
var map__10654__$1 = (((((!((map__10654 == null))))?(((((map__10654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10654):map__10654);
var message = cljs.core.get.call(null,map__10654__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__10654__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__10654,map__10654__$1,message,column){
return (function (p1__10652_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10652_SHARP_], null)));
});})(map__10654,map__10654__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__10654,map__10654__$1,message,column){
return (function (p1__10651_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__10651_SHARP_);
});})(map__10654,map__10654__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__10657){
var map__10658 = p__10657;
var map__10658__$1 = (((((!((map__10658 == null))))?(((((map__10658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10658):map__10658);
var message_data = map__10658__$1;
var message = cljs.core.get.call(null,map__10658__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__10658__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__10658__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__10658__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__10660 = file_excerpt;
var map__10660__$1 = (((((!((map__10660 == null))))?(((((map__10660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10660):map__10660);
var start_line = cljs.core.get.call(null,map__10660__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__10660__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__10660__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__10660,map__10660__$1,start_line,path,excerpt,map__10658,map__10658__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__10660,map__10660__$1,start_line,path,excerpt,map__10658,map__10658__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__10661 = cljs.core.split_with.call(null,((function (map__10660,map__10660__$1,start_line,path,excerpt,lines,map__10658,map__10658__$1,message_data,message,line,column,file_excerpt){
return (function (p1__10656_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__10656_SHARP_));
});})(map__10660,map__10660__$1,start_line,path,excerpt,lines,map__10658,map__10658__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__10661,(0),null);
var end = cljs.core.nth.call(null,vec__10661,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__10665){
var map__10666 = p__10665;
var map__10666__$1 = (((((!((map__10666 == null))))?(((((map__10666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10666):map__10666);
var file = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__10668 = "";
var G__10668__$1 = (cljs.core.truth_(file)?[G__10668,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__10668);
var G__10668__$2 = (cljs.core.truth_(line)?[G__10668__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__10668__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__10668__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__10668__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_10723 = (new goog.debug.Console());
var G__10675_10724 = c_10723.getFormatter();
goog.object.set(G__10675_10724,"showAbsoluteTime",false);

goog.object.set(G__10675_10724,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_10723);

}

var temp__5457__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5457__auto__)){
var console_instance = temp__5457__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__10676 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__10676,"data",(function (){var or__4131__auto__ = data;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__10676;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5455__auto__ = e.event_;
if(cljs.core.truth_(temp__5455__auto__)){
var e__$1 = temp__5455__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && ((!((goog.global.document == null)))));
});

var last_reload_timestamp_10725 = cljs.core.atom.call(null,(0));
var promise_chain_10726 = (new goog.Promise(((function (last_reload_timestamp_10725){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_10725))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_10725,promise_chain_10726){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(figwheel.core.heads_up_display_QMARK_.call(null)){
var temp__5455__auto__ = (function (){var temp__5457__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var ts = temp__5457__auto__;
var and__4120__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_10725) < ts);
if(and__4120__auto__){
return ts;
} else {
return and__4120__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var ts = temp__5455__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_10725,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_10726.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_10725,promise_chain_10726){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__10677 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__10678 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__10678;

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR__orig_val__10677,_STAR_inline_code_message_max_column_STAR__temp_val__10678,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_10725,promise_chain_10726){
return (function (){
var seq__10679 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__10680 = null;
var count__10681 = (0);
var i__10682 = (0);
while(true){
if((i__10682 < count__10681)){
var w = cljs.core._nth.call(null,chunk__10680,i__10682);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__10727 = seq__10679;
var G__10728 = chunk__10680;
var G__10729 = count__10681;
var G__10730 = (i__10682 + (1));
seq__10679 = G__10727;
chunk__10680 = G__10728;
count__10681 = G__10729;
i__10682 = G__10730;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10679);
if(temp__5457__auto__){
var seq__10679__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10679__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10679__$1);
var G__10731 = cljs.core.chunk_rest.call(null,seq__10679__$1);
var G__10732 = c__4550__auto__;
var G__10733 = cljs.core.count.call(null,c__4550__auto__);
var G__10734 = (0);
seq__10679 = G__10731;
chunk__10680 = G__10732;
count__10681 = G__10733;
i__10682 = G__10734;
continue;
} else {
var w = cljs.core.first.call(null,seq__10679__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__10735 = cljs.core.next.call(null,seq__10679__$1);
var G__10736 = null;
var G__10737 = (0);
var G__10738 = (0);
seq__10679 = G__10735;
chunk__10680 = G__10736;
count__10681 = G__10737;
i__10682 = G__10738;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR__orig_val__10677,_STAR_inline_code_message_max_column_STAR__temp_val__10678,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_10725,promise_chain_10726))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__10677;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_10725,promise_chain_10726))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_10726.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_10725,promise_chain_10726){
return (function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__10683 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__10684 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__10684;

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__10683;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_10725,promise_chain_10726))
);
} else {
return promise_chain_10726.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_10725,promise_chain_10726){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_10725,promise_chain_10726))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_10725,promise_chain_10726))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4120__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4120__auto____$1){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10739 = arguments.length;
var i__4731__auto___10740 = (0);
while(true){
if((i__4731__auto___10740 < len__4730__auto___10739)){
args__4736__auto__.push((arguments[i__4731__auto___10740]));

var G__10741 = (i__4731__auto___10740 + (1));
i__4731__auto___10740 = G__10741;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__10687){
var vec__10688 = p__10687;
var n = cljs.core.nth.call(null,vec__10688,(0),null);
var mdata = cljs.core.nth.call(null,vec__10688,(1),null);
var temp__5457__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__10691 = cljs.core.seq.call(null,hooks);
var chunk__10692 = null;
var count__10693 = (0);
var i__10694 = (0);
while(true){
if((i__10694 < count__10693)){
var vec__10701 = cljs.core._nth.call(null,chunk__10692,i__10694);
var n = cljs.core.nth.call(null,vec__10701,(0),null);
var f = cljs.core.nth.call(null,vec__10701,(1),null);
var temp__5455__auto___10742 = cljs.core.reduce.call(null,((function (seq__10691,chunk__10692,count__10693,i__10694,vec__10701,n,f,hooks){
return (function (p1__10669_SHARP_,p2__10670_SHARP_){
if(cljs.core.truth_(p1__10669_SHARP_)){
return goog.object.get(p1__10669_SHARP_,p2__10670_SHARP_);
} else {
return null;
}
});})(seq__10691,chunk__10692,count__10693,i__10694,vec__10701,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___10742)){
var hook_10743 = temp__5455__auto___10742;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_10743,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__10744 = seq__10691;
var G__10745 = chunk__10692;
var G__10746 = count__10693;
var G__10747 = (i__10694 + (1));
seq__10691 = G__10744;
chunk__10692 = G__10745;
count__10693 = G__10746;
i__10694 = G__10747;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10691);
if(temp__5457__auto__){
var seq__10691__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10691__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10691__$1);
var G__10748 = cljs.core.chunk_rest.call(null,seq__10691__$1);
var G__10749 = c__4550__auto__;
var G__10750 = cljs.core.count.call(null,c__4550__auto__);
var G__10751 = (0);
seq__10691 = G__10748;
chunk__10692 = G__10749;
count__10693 = G__10750;
i__10694 = G__10751;
continue;
} else {
var vec__10704 = cljs.core.first.call(null,seq__10691__$1);
var n = cljs.core.nth.call(null,vec__10704,(0),null);
var f = cljs.core.nth.call(null,vec__10704,(1),null);
var temp__5455__auto___10752 = cljs.core.reduce.call(null,((function (seq__10691,chunk__10692,count__10693,i__10694,vec__10704,n,f,seq__10691__$1,temp__5457__auto__,hooks){
return (function (p1__10669_SHARP_,p2__10670_SHARP_){
if(cljs.core.truth_(p1__10669_SHARP_)){
return goog.object.get(p1__10669_SHARP_,p2__10670_SHARP_);
} else {
return null;
}
});})(seq__10691,chunk__10692,count__10693,i__10694,vec__10704,n,f,seq__10691__$1,temp__5457__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___10752)){
var hook_10753 = temp__5455__auto___10752;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_10753,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__10754 = cljs.core.next.call(null,seq__10691__$1);
var G__10755 = null;
var G__10756 = (0);
var G__10757 = (0);
seq__10691 = G__10754;
chunk__10692 = G__10755;
count__10693 = G__10756;
i__10694 = G__10757;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq10685){
var G__10686 = cljs.core.first.call(null,seq10685);
var seq10685__$1 = cljs.core.next.call(null,seq10685);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10686,seq10685__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10707){
var vec__10708 = p__10707;
var k = cljs.core.nth.call(null,vec__10708,(0),null);
var v = cljs.core.nth.call(null,vec__10708,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__10671_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__10671_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__10671_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__10672_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__10672_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__4120__auto__ = (!(figwheel.core.load_warninged_code));
if(and__4120__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4120__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__10673_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__10673_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__10711_10758 = cljs.core.seq.call(null,to_reload);
var chunk__10712_10759 = null;
var count__10713_10760 = (0);
var i__10714_10761 = (0);
while(true){
if((i__10714_10761 < count__10713_10760)){
var ns_10762 = cljs.core._nth.call(null,chunk__10712_10759,i__10714_10761);
goog.require(cljs.core.name.call(null,ns_10762),true);


var G__10763 = seq__10711_10758;
var G__10764 = chunk__10712_10759;
var G__10765 = count__10713_10760;
var G__10766 = (i__10714_10761 + (1));
seq__10711_10758 = G__10763;
chunk__10712_10759 = G__10764;
count__10713_10760 = G__10765;
i__10714_10761 = G__10766;
continue;
} else {
var temp__5457__auto___10767 = cljs.core.seq.call(null,seq__10711_10758);
if(temp__5457__auto___10767){
var seq__10711_10768__$1 = temp__5457__auto___10767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10711_10768__$1)){
var c__4550__auto___10769 = cljs.core.chunk_first.call(null,seq__10711_10768__$1);
var G__10770 = cljs.core.chunk_rest.call(null,seq__10711_10768__$1);
var G__10771 = c__4550__auto___10769;
var G__10772 = cljs.core.count.call(null,c__4550__auto___10769);
var G__10773 = (0);
seq__10711_10758 = G__10770;
chunk__10712_10759 = G__10771;
count__10713_10760 = G__10772;
i__10714_10761 = G__10773;
continue;
} else {
var ns_10774 = cljs.core.first.call(null,seq__10711_10768__$1);
goog.require(cljs.core.name.call(null,ns_10774),true);


var G__10775 = cljs.core.next.call(null,seq__10711_10768__$1);
var G__10776 = null;
var G__10777 = (0);
var G__10778 = (0);
seq__10711_10758 = G__10775;
chunk__10712_10759 = G__10776;
count__10713_10760 = G__10777;
i__10714_10761 = G__10778;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_10779 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5457__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5457__auto__)){
var not_loaded = temp__5457__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_10779);
} else {
setTimeout(after_reload_fn_10779,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__10715 = cljs.core.seq.call(null,warnings);
var chunk__10716 = null;
var count__10717 = (0);
var i__10718 = (0);
while(true){
if((i__10718 < count__10717)){
var warning = cljs.core._nth.call(null,chunk__10716,i__10718);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__10780 = seq__10715;
var G__10781 = chunk__10716;
var G__10782 = count__10717;
var G__10783 = (i__10718 + (1));
seq__10715 = G__10780;
chunk__10716 = G__10781;
count__10717 = G__10782;
i__10718 = G__10783;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10715);
if(temp__5457__auto__){
var seq__10715__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10715__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10715__$1);
var G__10784 = cljs.core.chunk_rest.call(null,seq__10715__$1);
var G__10785 = c__4550__auto__;
var G__10786 = cljs.core.count.call(null,c__4550__auto__);
var G__10787 = (0);
seq__10715 = G__10784;
chunk__10716 = G__10785;
count__10717 = G__10786;
i__10718 = G__10787;
continue;
} else {
var warning = cljs.core.first.call(null,seq__10715__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__10788 = cljs.core.next.call(null,seq__10715__$1);
var G__10789 = null;
var G__10790 = (0);
var G__10791 = (0);
seq__10715 = G__10788;
chunk__10716 = G__10789;
count__10717 = G__10790;
i__10718 = G__10791;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__10719){
var map__10720 = p__10719;
var map__10720__$1 = (((((!((map__10720 == null))))?(((((map__10720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10720):map__10720);
var exception_data = map__10720__$1;
var file = cljs.core.get.call(null,map__10720__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__10720__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__10720__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__10720,map__10720__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__10720,map__10720__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__10720,map__10720__$1,exception_data,file,type,message){
return (function (p1__10674_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__10674_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__10720,map__10720__$1,exception_data,file,type,message))
);

return goog.log.warning(figwheel.core.logger,(function (){var G__10722 = "Compile Exception - ";
var G__10722__$1 = (cljs.core.truth_((function (){var or__4131__auto__ = type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return message;
}
})())?[G__10722,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))))].join(''):G__10722);
if(cljs.core.truth_(file)){
return [G__10722__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__10722__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
