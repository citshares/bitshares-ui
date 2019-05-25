(window.webpackJsonp = window.webpackJsonp || []).push([
    [20],
    {
        2310: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(31),
                l = n(235),
                c = n(24),
                i = n(15),
                s = n(2),
                u = n.n(s),
                p = n(6),
                m = n.n(p),
                f = n(10),
                g = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            var h = (function(e) {
                function t() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var e = (function(e, t) {
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
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (e.state = {
                            title: null,
                            start: new Date(),
                            end: null,
                            pay: null,
                            url: "http://",
                            vesting: 7
                        }),
                        e
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
                    g(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    e.currentAccount,
                                    this.props.currentAccount,
                                    !i.a.are_equal_shallow(t, this.state)
                                );
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function() {
                                l.a
                                    .createWorker(
                                        this.state,
                                        this.props.currentAccount
                                    )
                                    .catch(function(e) {
                                        console.log("error", e);
                                        var t =
                                            e.message &&
                                            e.message.length &&
                                            e.message.length > 0
                                                ? e.message.split("stack")[0]
                                                : "unknown error";
                                        f.Notification.error({
                                            message: m.a.translate(
                                                "notifications.worker_create_failure",
                                                {error_msg: t}
                                            )
                                        });
                                    });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this;
                                return (
                                    console.log("state:", this.state),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: "grid-block",
                                            style: {paddingTop: 20}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-content large-9 large-offset-3 small-12"
                                            },
                                            r.a.createElement(u.a, {
                                                content:
                                                    "explorer.workers.create",
                                                component: "h3"
                                            }),
                                            r.a.createElement(
                                                "form",
                                                {style: {maxWidth: 800}},
                                                r.a.createElement(u.a, {
                                                    content:
                                                        "explorer.workers.create_text_1",
                                                    component: "p"
                                                }),
                                                r.a.createElement(u.a, {
                                                    content:
                                                        "explorer.workers.create_text_2",
                                                    component: "p"
                                                }),
                                                r.a.createElement(
                                                    "label",
                                                    null,
                                                    r.a.createElement(u.a, {
                                                        content:
                                                            "explorer.workers.title"
                                                    }),
                                                    r.a.createElement("input", {
                                                        onChange: function(t) {
                                                            e.setState({
                                                                title:
                                                                    t.target
                                                                        .value
                                                            });
                                                        },
                                                        type: "text"
                                                    })
                                                ),
                                                r.a.createElement(u.a, {
                                                    content:
                                                        "explorer.workers.name_text",
                                                    component: "p"
                                                }),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            width: "50%",
                                                            paddingRight:
                                                                "2.5%",
                                                            display:
                                                                "inline-block"
                                                        }
                                                    },
                                                    r.a.createElement(
                                                        "label",
                                                        null,
                                                        r.a.createElement(u.a, {
                                                            content:
                                                                "account.votes.start"
                                                        }),
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                onChange: function(
                                                                    t
                                                                ) {
                                                                    e.setState({
                                                                        start: new Date(
                                                                            t.target.value
                                                                        )
                                                                    });
                                                                },
                                                                type: "date"
                                                            }
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            width: "50%",
                                                            paddingLeft: "2.5%",
                                                            display:
                                                                "inline-block"
                                                        }
                                                    },
                                                    r.a.createElement(
                                                        "label",
                                                        null,
                                                        r.a.createElement(u.a, {
                                                            content:
                                                                "account.votes.end"
                                                        }),
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                onChange: function(
                                                                    t
                                                                ) {
                                                                    e.setState({
                                                                        end: new Date(
                                                                            t.target.value
                                                                        )
                                                                    });
                                                                },
                                                                type: "date"
                                                            }
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(u.a, {
                                                    content:
                                                        "explorer.workers.date_text",
                                                    component: "p"
                                                }),
                                                r.a.createElement(
                                                    "label",
                                                    null,
                                                    r.a.createElement(u.a, {
                                                        content:
                                                            "explorer.workers.daily_pay"
                                                    }),
                                                    r.a.createElement("input", {
                                                        onChange: function(t) {
                                                            e.setState({
                                                                pay:
                                                                    t.target
                                                                        .value
                                                            });
                                                        },
                                                        type: "number"
                                                    })
                                                ),
                                                r.a.createElement(u.a, {
                                                    content:
                                                        "explorer.workers.pay_text",
                                                    component: "p"
                                                }),
                                                r.a.createElement(
                                                    "label",
                                                    null,
                                                    r.a.createElement(u.a, {
                                                        content:
                                                            "explorer.workers.website"
                                                    }),
                                                    r.a.createElement("input", {
                                                        onChange: function(t) {
                                                            e.setState({
                                                                url:
                                                                    t.target
                                                                        .value
                                                            });
                                                        },
                                                        type: "text"
                                                    })
                                                ),
                                                r.a.createElement(u.a, {
                                                    content:
                                                        "explorer.workers.url_text",
                                                    component: "p"
                                                }),
                                                r.a.createElement(
                                                    "label",
                                                    null,
                                                    r.a.createElement(u.a, {
                                                        content:
                                                            "explorer.workers.vesting_pay"
                                                    }),
                                                    r.a.createElement("input", {
                                                        defaultValue: this.state
                                                            .vesting,
                                                        onChange: function(t) {
                                                            e.setState({
                                                                vesting: parseInt(
                                                                    t.target
                                                                        .value
                                                                )
                                                            });
                                                        },
                                                        type: "number"
                                                    })
                                                ),
                                                r.a.createElement(u.a, {
                                                    content:
                                                        "explorer.workers.vesting_text",
                                                    component: "p"
                                                }),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "button-group",
                                                        onClick: this.onSubmit.bind(
                                                            this
                                                        )
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className: "button",
                                                            type: "submit"
                                                        },
                                                        "Publish"
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
            t.default = h = Object(o.a)(h, {
                listenTo: function() {
                    return [c.a];
                },
                getProps: function() {
                    return {currentAccount: c.a.getState().currentAccount};
                }
            });
        }
    }
]);
//# sourceMappingURL=create-worker.js.map
