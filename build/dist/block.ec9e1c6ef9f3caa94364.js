(window.webpackJsonp = window.webpackJsonp || []).push([
    [17],
    {
        2058: function(e, t, n) {
            "use strict";
            var o = n(0),
                r = n.n(o),
                a = n(42),
                l = n(49),
                i = n(134),
                s = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            (o.enumerable = o.enumerable || !1),
                                (o.configurable = !0),
                                "value" in o && (o.writable = !0),
                                Object.defineProperty(e, o.key, o);
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t;
                    };
                })();
            var c = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, r.a.Component),
                    s(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.witness.get(
                                    "witness_account"
                                );
                                return r.a.createElement(i.a, {account: e});
                            }
                        }
                    ]),
                    t
                );
            })();
            (c.propTypes = {witness: a.a.ChainObject.isRequired}),
                (c = Object(l.a)(c)),
                (t.a = c);
        },
        2320: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(0),
                r = n.n(o),
                a = n(141),
                l = n(108),
                i = n(1),
                s = n.n(i),
                c = n(109),
                u = n(11),
                p = n.n(u),
                h = n(249),
                f = n(762),
                b = n(2),
                m = n.n(b),
                y = n(42),
                d = n(49),
                v = n(2058),
                k = n(340),
                g = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            (o.enumerable = o.enumerable || !1),
                                (o.configurable = !0),
                                "value" in o && (o.writable = !0),
                                Object.defineProperty(e, o.key, o);
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t;
                    };
                })();
            function E(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function _(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function w(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var O = (function(e) {
                    function t() {
                        return (
                            E(this, t),
                            _(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        w(t, r.a.Component),
                        g(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return e.block.id !== this.props.block.id;
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.block,
                                        t = null;
                                    return (
                                        (t = []),
                                        e.transactions.length > 0 &&
                                            ((t = []),
                                            e.transactions.forEach(function(
                                                e,
                                                n
                                            ) {
                                                t.push(
                                                    r.a.createElement(
                                                        k.Element,
                                                        {
                                                            key: n,
                                                            id: "tx_" + n,
                                                            name: "tx_" + n
                                                        },
                                                        r.a.createElement(f.a, {
                                                            key: n,
                                                            trx: e,
                                                            index: n
                                                        })
                                                    )
                                                );
                                            })),
                                        r.a.createElement("div", null, t)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                j = (function(e) {
                    function t(e) {
                        E(this, t);
                        var n = _(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (n.state = {showInput: !1}),
                            (n.scrollToTop = n.scrollToTop.bind(n)),
                            n
                        );
                    }
                    return (
                        w(t, r.a.Component),
                        g(t, [
                            {
                                key: "componentDidMount",
                                value: function() {
                                    var e = this;
                                    this._getBlock(this.props.height),
                                        k.Events.scrollEvent.register(
                                            "begin",
                                            function() {}
                                        ),
                                        k.Events.scrollEvent.register(
                                            "end",
                                            function() {
                                                e.setState({scrollEnded: !0});
                                            }
                                        );
                                }
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    e.height !== this.props.height &&
                                        this._getBlock(e.height);
                                }
                            },
                            {
                                key: "shouldComponentUpdate",
                                value: function(e, t) {
                                    return (
                                        !p.a.is(e.blocks, this.props.blocks) ||
                                        e.height !== this.props.height ||
                                        e.dynGlobalObject !==
                                            this.props.dynGlobalObject ||
                                        t.showInput !== this.state.showInput
                                    );
                                }
                            },
                            {
                                key: "scrollToTop",
                                value: function() {
                                    k.animateScroll.scrollToTop({
                                        duration: 1500,
                                        delay: 100,
                                        smooth: !0,
                                        containerId: "blockContainer"
                                    });
                                }
                            },
                            {
                                key: "_getBlock",
                                value: function(e) {
                                    e &&
                                        ((e = parseInt(e, 10)),
                                        this.props.blocks.get(e) ||
                                            h.a.getBlock(e));
                                }
                            },
                            {
                                key: "_nextBlock",
                                value: function() {
                                    var e = this.props.match.params.height,
                                        t = Math.min(
                                            this.props.dynGlobalObject.get(
                                                "head_block_number"
                                            ),
                                            parseInt(e, 10) + 1
                                        );
                                    this.props.history.push("/block/" + t);
                                }
                            },
                            {
                                key: "_previousBlock",
                                value: function() {
                                    var e = this.props.match.params.height,
                                        t = Math.max(1, parseInt(e, 10) - 1);
                                    this.props.history.push("/block/" + t);
                                }
                            },
                            {
                                key: "toggleInput",
                                value: function(e) {
                                    e.preventDefault(),
                                        this.setState({showInput: !0});
                                }
                            },
                            {
                                key: "_onKeyDown",
                                value: function(e) {
                                    e &&
                                        13 === e.keyCode &&
                                        (this.props.history.push(
                                            "/block/" + e.target.value
                                        ),
                                        this.setState({showInput: !1}));
                                }
                            },
                            {
                                key: "_onSubmit",
                                value: function() {
                                    var e = this.refs.blockInput.value;
                                    e &&
                                        this._onKeyDown({
                                            keyCode: 13,
                                            target: {value: e}
                                        });
                                }
                            },
                            {
                                key: "componentDidUpdate",
                                value: function() {
                                    var e = this.props.blocks,
                                        t = parseInt(this.props.height, 10),
                                        n = e.get(t);
                                    this.props.scrollToIndex &&
                                        !this.state.scrollEnded &&
                                        n &&
                                        k.scroller.scrollTo(
                                            "tx_" + this.props.scrollToIndex,
                                            {
                                                duration: 1500,
                                                delay: 100,
                                                smooth: !0,
                                                offset: -100,
                                                containerId: "blockContainer"
                                            }
                                        );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.state.showInput,
                                        t = this.props.blocks,
                                        n = parseInt(this.props.height, 10),
                                        o = t.get(n),
                                        a = e
                                            ? r.a.createElement(
                                                  "span",
                                                  {className: "inline-label"},
                                                  r.a.createElement("input", {
                                                      ref: "blockInput",
                                                      type: "number",
                                                      onKeyDown: this._onKeyDown.bind(
                                                          this
                                                      )
                                                  }),
                                                  r.a.createElement(
                                                      "button",
                                                      {
                                                          onClick: this._onSubmit.bind(
                                                              this
                                                          ),
                                                          className: "button"
                                                      },
                                                      r.a.createElement(m.a, {
                                                          content:
                                                              "explorer.block.go_to"
                                                      })
                                                  )
                                              )
                                            : r.a.createElement(
                                                  "span",
                                                  null,
                                                  r.a.createElement(m.a, {
                                                      style: {
                                                          textTransform:
                                                              "uppercase"
                                                      },
                                                      component: "span",
                                                      content:
                                                          "explorer.block.title"
                                                  }),
                                                  r.a.createElement(
                                                      "a",
                                                      {
                                                          onClick: this.toggleInput.bind(
                                                              this
                                                          )
                                                      },
                                                      " #",
                                                      n
                                                  )
                                              );
                                    return r.a.createElement(
                                        "div",
                                        {className: "grid-block page-layout"},
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block main-content"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className: "grid-content",
                                                    id: "blockContainer"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow medium-offset-2 medium-8 large-offset-3 large-6 small-12"
                                                    },
                                                    r.a.createElement(
                                                        "h4",
                                                        {
                                                            className:
                                                                "text-center"
                                                        },
                                                        a
                                                    ),
                                                    r.a.createElement(
                                                        "ul",
                                                        null,
                                                        r.a.createElement(
                                                            "li",
                                                            null,
                                                            r.a.createElement(
                                                                m.a,
                                                                {
                                                                    component:
                                                                        "span",
                                                                    content:
                                                                        "explorer.block.date"
                                                                }
                                                            ),
                                                            ":",
                                                            " ",
                                                            o
                                                                ? r.a.createElement(
                                                                      c.a,
                                                                      {
                                                                          value:
                                                                              o.timestamp,
                                                                          format:
                                                                              "full"
                                                                      }
                                                                  )
                                                                : null
                                                        ),
                                                        r.a.createElement(
                                                            "li",
                                                            null,
                                                            r.a.createElement(
                                                                m.a,
                                                                {
                                                                    component:
                                                                        "span",
                                                                    content:
                                                                        "explorer.block.witness"
                                                                }
                                                            ),
                                                            ":",
                                                            " ",
                                                            o
                                                                ? r.a.createElement(
                                                                      v.a,
                                                                      {
                                                                          witness:
                                                                              o.witness
                                                                      }
                                                                  )
                                                                : null
                                                        ),
                                                        r.a.createElement(
                                                            "li",
                                                            null,
                                                            r.a.createElement(
                                                                m.a,
                                                                {
                                                                    component:
                                                                        "span",
                                                                    content:
                                                                        "explorer.block.previous"
                                                                }
                                                            ),
                                                            ": ",
                                                            o
                                                                ? o.previous
                                                                : null
                                                        ),
                                                        r.a.createElement(
                                                            "li",
                                                            null,
                                                            r.a.createElement(
                                                                m.a,
                                                                {
                                                                    component:
                                                                        "span",
                                                                    content:
                                                                        "explorer.block.transactions"
                                                                }
                                                            ),
                                                            ":",
                                                            " ",
                                                            o
                                                                ? o.transactions
                                                                      .length
                                                                : null
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "clearfix",
                                                            style: {
                                                                marginBottom:
                                                                    "1rem"
                                                            }
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "button float-left outline",
                                                                onClick: this._previousBlock.bind(
                                                                    this
                                                                )
                                                            },
                                                            "←"
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "button float-right outline",
                                                                onClick: this._nextBlock.bind(
                                                                    this
                                                                )
                                                            },
                                                            "→"
                                                        )
                                                    ),
                                                    o
                                                        ? r.a.createElement(O, {
                                                              block: o
                                                          })
                                                        : null,
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "center",
                                                                marginBottom: 20
                                                            }
                                                        },
                                                        r.a.createElement(
                                                            "a",
                                                            {
                                                                onClick: this
                                                                    .scrollToTop
                                                            },
                                                            r.a.createElement(
                                                                m.a,
                                                                {
                                                                    content:
                                                                        "global.return_to_top"
                                                                }
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (j.propTypes = {
                dynGlobalObject: y.a.ChainObject.isRequired,
                blocks: s.a.object.isRequired,
                height: s.a.number.isRequired
            }),
                (j.defaultProps = {
                    dynGlobalObject: "2.1.0",
                    blocks: {},
                    height: 1
                });
            var x = Object(d.a)(j),
                I =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n)
                                Object.prototype.hasOwnProperty.call(n, o) &&
                                    (e[o] = n[o]);
                        }
                        return e;
                    },
                T = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            (o.enumerable = o.enumerable || !1),
                                (o.configurable = !0),
                                "value" in o && (o.writable = !0),
                                Object.defineProperty(e, o.key, o);
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t;
                    };
                })();
            var C = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, r.a.Component),
                    T(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = parseInt(
                                        this.props.match.params.height,
                                        10
                                    ),
                                    t = this.props.match.params.txIndex
                                        ? parseInt(
                                              this.props.match.params.txIndex
                                          )
                                        : 0;
                                return r.a.createElement(
                                    l.a,
                                    {
                                        stores: [a.a],
                                        inject: {
                                            blocks: function() {
                                                return a.a.getState().blocks;
                                            }
                                        }
                                    },
                                    r.a.createElement(
                                        x,
                                        I({}, this.props, {
                                            height: e,
                                            scrollToIndex: t
                                        })
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = C;
        }
    }
]);
//# sourceMappingURL=block.js.map
