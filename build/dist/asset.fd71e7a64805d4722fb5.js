(window.webpackJsonp = window.webpackJsonp || []).push([
    [16],
    {
        2007: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return y;
            }),
                a.d(t, "a", function() {
                    return E;
                });
            var n = a(0),
                r = a.n(n),
                l = a(1),
                s = a.n(l),
                o = a(3),
                i = a.n(o),
                c = a(31),
                u = a(25),
                m = a(27),
                d = a(6),
                p = a.n(d),
                h = a(2322),
                b = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function _(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function f(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function g(e, t) {
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
            var E = (function(e) {
                function t() {
                    return (
                        _(this, t),
                        f(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    g(t, r.a.Component),
                    b(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.isActive,
                                    a = e.index,
                                    n = e.changeTab,
                                    l = e.title,
                                    s = e.className,
                                    o = e.updatedTab,
                                    c = e.disabled,
                                    u = e.subText,
                                    m = i()({"is-active": t}, s);
                                return (
                                    "string" == typeof l &&
                                        l.indexOf(".") > 0 &&
                                        (l = p.a.translate(l)),
                                    this.props.collapsed
                                        ? ("string" == typeof u &&
                                              (u = u.trim()),
                                          r.a.createElement(
                                              "option",
                                              {
                                                  value: a,
                                                  "data-is-link-to": this.props
                                                      .isLinkTo,
                                                  className: "tab-title"
                                              },
                                              r.a.createElement(
                                                  r.a.Fragment,
                                                  null,
                                                  l,
                                                  o ? "*" : "",
                                                  u && " (",
                                                  u && u,
                                                  u && ")"
                                              )
                                          ))
                                        : r.a.createElement(
                                              "li",
                                              {
                                                  className: m,
                                                  onClick: c
                                                      ? null
                                                      : n.bind(
                                                            this,
                                                            a,
                                                            this.props.isLinkTo
                                                        )
                                              },
                                              r.a.createElement(
                                                  "a",
                                                  null,
                                                  r.a.createElement(
                                                      "span",
                                                      {className: "tab-title"},
                                                      l,
                                                      o ? "*" : ""
                                                  ),
                                                  u &&
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "tab-subtext"
                                                          },
                                                          u
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
            (E.propTypes = {
                changeTab: s.a.func,
                isActive: s.a.bool.isRequired,
                index: s.a.number.isRequired,
                className: s.a.string,
                isLinkTo: s.a.string,
                subText: s.a.oneOfType([s.a.object, s.a.string])
            }),
                (E.defaultProps = {
                    isActive: !1,
                    index: 0,
                    className: "",
                    isLinkTo: "",
                    subText: null
                });
            var y = (function(e) {
                function t(e) {
                    _(this, t);
                    var a = f(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.state = {
                            activeTab: e.setting
                                ? e.viewSettings.get(
                                      e.setting,
                                      e.defaultActiveTab
                                  )
                                : e.defaultActiveTab,
                            width: window.innerWidth
                        }),
                        (a._setDimensions = a._setDimensions.bind(a)),
                        a
                    );
                }
                return (
                    g(t, r.a.Component),
                    b(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this._setDimensions(),
                                    window.addEventListener(
                                        "resize",
                                        this._setDimensions,
                                        {capture: !1, passive: !0}
                                    );
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = e.viewSettings.get(e.setting);
                                t !==
                                    this.props.viewSettings.get(
                                        this.props.setting
                                    ) && this.setState({activeTab: t});
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                window.removeEventListener(
                                    "resize",
                                    this._setDimensions
                                );
                            }
                        },
                        {
                            key: "_setDimensions",
                            value: function() {
                                var e = window.innerWidth;
                                e !== this.state.width &&
                                    this.setState({width: e});
                            }
                        },
                        {
                            key: "_changeTab",
                            value: function(e, t) {
                                e !== this.state.activeTab &&
                                    ("" !== t && this.props.history.push(t),
                                    this.props.setting &&
                                        u.a.changeViewSetting(
                                            (function(e, t, a) {
                                                return (
                                                    t in e
                                                        ? Object.defineProperty(
                                                              e,
                                                              t,
                                                              {
                                                                  value: a,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              }
                                                          )
                                                        : (e[t] = a),
                                                    e
                                                );
                                            })({}, this.props.setting, e)
                                        ),
                                    this.setState({activeTab: e}),
                                    this.props.onChangeTab &&
                                        this.props.onChangeTab(e));
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.children,
                                    n = t.contentClass,
                                    l = t.tabsClass,
                                    s = t.style,
                                    o = t.segmented,
                                    c =
                                        this.state.width < 900 &&
                                        r.a.Children.count(a) > 2,
                                    u = null,
                                    m = r.a.Children.map(a, function(t, a) {
                                        if (!t) return null;
                                        if (c && t.props.disabled) return null;
                                        var n = a === e.state.activeTab;
                                        return (
                                            n && (u = t.props.children),
                                            r.a.cloneElement(t, {
                                                collapsed: c,
                                                isActive: n,
                                                changeTab: e._changeTab.bind(e),
                                                index: a
                                            })
                                        );
                                    }).filter(function(e) {
                                        return null !== e;
                                    });
                                return (
                                    u || (u = m[0].props.children),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: i()(
                                                this.props.actionButtons
                                                    ? "with-buttons"
                                                    : "",
                                                this.props.className
                                            )
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "service-selector"},
                                            r.a.createElement(
                                                "ul",
                                                {
                                                    style: s,
                                                    className: i()(
                                                        "button-group no-margin",
                                                        l,
                                                        {segmented: o}
                                                    )
                                                },
                                                c
                                                    ? r.a.createElement(
                                                          "li",
                                                          {
                                                              style: {
                                                                  paddingLeft: 10,
                                                                  paddingRight: 10,
                                                                  minWidth:
                                                                      "15rem"
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              "select",
                                                              {
                                                                  value: this
                                                                      .state
                                                                      .activeTab,
                                                                  style: {
                                                                      marginTop: 10,
                                                                      marginBottom: 10
                                                                  },
                                                                  className:
                                                                      "bts-select",
                                                                  onChange: function(
                                                                      t
                                                                  ) {
                                                                      var a = parseInt(
                                                                          t
                                                                              .target
                                                                              .value,
                                                                          10
                                                                      );
                                                                      e._changeTab(
                                                                          a,
                                                                          t
                                                                              .target[
                                                                              a
                                                                          ]
                                                                              .attributes[
                                                                              "data-is-link-to"
                                                                          ]
                                                                              .value
                                                                      );
                                                                  }
                                                              },
                                                              m
                                                          )
                                                      )
                                                    : m,
                                                this.props.actionButtons
                                                    ? r.a.createElement(
                                                          "li",
                                                          {
                                                              className:
                                                                  "tabs-action-buttons"
                                                          },
                                                          this.props
                                                              .actionButtons
                                                      )
                                                    : null
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: i()("tab-content", n)},
                                            u
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (y.propTypes = {
                setting: s.a.string,
                defaultActiveTab: s.a.number,
                segmented: s.a.bool
            }),
                (y.defaultProps = {
                    active: 0,
                    defaultActiveTab: 0,
                    segmented: !0,
                    contentClass: "",
                    style: {}
                }),
                (y = Object(c.a)(y, {
                    listenTo: function() {
                        return [m.a];
                    },
                    getProps: function() {
                        return {viewSettings: m.a.getState().viewSettings};
                    }
                })),
                (y = Object(h.a)(y));
        },
        2316: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                l = a(2305),
                s = a(2),
                o = a.n(s),
                i = a(134),
                c = a(172),
                u = a(121),
                m = a(37),
                d = a(147),
                p = a(106),
                h = a(571),
                b = a(566),
                _ = a(352),
                f = a(15),
                g = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var E = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (a.state = {time: e.time}), a;
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
                                key: "getHours",
                                value: function(e) {
                                    return e / 3600;
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        this.getHours(this.state.time),
                                        "h"
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                y = a(5),
                v = a(14),
                k = a(35),
                x = a(575),
                w = a(3),
                A = a.n(w),
                O = a(262),
                C = a(320),
                N = a(452),
                P = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function S(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            var T = function(e, t) {
                    var a =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : function(e) {
                                  return e;
                              };
                    return function(n) {
                        return e.setState(S({}, t, a(n)));
                    };
                },
                j = function(e) {
                    return function(t) {
                        return t[e];
                    };
                },
                F = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.onAccountNameChanged = T(
                                a,
                                "funderAccountName"
                            )),
                            (a.onAccountChanged = T(a, "newFunderAccount")),
                            (a.onPoolInput = T(
                                a,
                                "fundPoolAmount",
                                j("amount")
                            )),
                            (a.onFundPool = function() {
                                return N.a.fundPool(
                                    a.state.newFunderAccount
                                        ? a.state.newFunderAccount.get("id")
                                        : null,
                                    a.props.core,
                                    a.props.asset,
                                    a.state.fundPoolAmount.replace(/,/g, "")
                                );
                            }),
                            (a.reset = function() {
                                a.setState(a.initialState());
                            }),
                            (a.initialState = function() {
                                return {
                                    funderAccountName:
                                        a.props.funderAccountName,
                                    fundPoolAmount: 0,
                                    fundPoolAsset: new k.a({
                                        amount: 0,
                                        precision: a.props.core.get(
                                            "precision"
                                        ),
                                        asset_id: a.props.core.get("id")
                                    }),
                                    claimPoolAmount: 0,
                                    claimPoolAmountAsset: new k.a({
                                        amount: 0,
                                        precision: a.props.core.get(
                                            "precision"
                                        ),
                                        asset_id: a.props.core.get("id")
                                    }),
                                    claimFeesAmount: 0,
                                    claimFeesAmountAsset: new k.a({
                                        amount: 0,
                                        precision: a.props.asset.get(
                                            "precision"
                                        ),
                                        asset_id: a.props.asset.get("id")
                                    })
                                };
                            }),
                            (a.onClaimPool = function() {
                                return N.a.claimPool(
                                    a.props.asset,
                                    a.state.claimPoolAmountAsset
                                );
                            }),
                            (a.state = a.initialState()),
                            a
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
                        P(t, [
                            {
                                key: "onClaimInput",
                                value: function(e, t) {
                                    var a = t.amount;
                                    this.state[e + "Asset"].setAmount({
                                        real: a
                                    }),
                                        this.setState(S({}, e, a));
                                }
                            },
                            {
                                key: "onClaimFees",
                                value: function() {
                                    var e = y.ChainStore.getAccount(
                                        this.props.funderAccountName
                                    );
                                    e &&
                                        N.a.claimPoolFees(
                                            e.get("id"),
                                            this.props.asset,
                                            this.state.claimFeesAmountAsset
                                        );
                                }
                            },
                            {
                                key: "renderFundPool",
                                value: function() {
                                    var e = this.props,
                                        t = this.state,
                                        a = this.onPoolInput,
                                        n = this.onFundPool,
                                        l = this.reset,
                                        s = this.onAccountNameChanged,
                                        i = this.onAccountChanged,
                                        c = e.asset,
                                        u = e.core,
                                        d = e.hideBalance,
                                        p = e.getDynamicObject,
                                        h = t.funderAccountName,
                                        b = t.fundPoolAmount,
                                        _ = t.newFunderAccount,
                                        f = null;
                                    d ||
                                        (f = p(c.get("dynamic_asset_data_id")));
                                    var g = u.get("id") || "1.3.0",
                                        E = 0;
                                    if (_) {
                                        var v = _.getIn(["balances", g]);
                                        if (v) {
                                            var k = y.ChainStore.getObject(v);
                                            k && (E = k.get("balance"));
                                        }
                                    }
                                    var x = r.a.createElement(
                                        "span",
                                        null,
                                        r.a.createElement(o.a, {
                                            component: "span",
                                            content: "transfer.available"
                                        }),
                                        ": ",
                                        r.a.createElement(m.a, {
                                            amount: E,
                                            asset: g
                                        })
                                    );
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        d ||
                                            r.a.createElement(
                                                "div",
                                                {
                                                    style: {
                                                        paddingBottom: "1.5rem"
                                                    }
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.fee_pool.pool_balance"
                                                }),
                                                r.a.createElement(
                                                    "span",
                                                    null,
                                                    ": "
                                                ),
                                                f
                                                    ? r.a.createElement(m.a, {
                                                          amount: f.get(
                                                              "fee_pool"
                                                          ),
                                                          asset: g
                                                      })
                                                    : null
                                            ),
                                        r.a.createElement(O.a, {
                                            label:
                                                "transaction.funding_account",
                                            accountName: h,
                                            onChange: s,
                                            onAccountChanged: i,
                                            account: h,
                                            error: null,
                                            tabIndex: 1
                                        }),
                                        r.a.createElement(C.a, {
                                            label: "transfer.amount",
                                            display_balance: x,
                                            amount: b,
                                            onChange: a,
                                            asset: g,
                                            assets: [g],
                                            placeholder: "0.0",
                                            tabIndex: 2,
                                            style: {
                                                width: "100%",
                                                paddingTop: 16
                                            }
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {
                                                style: {paddingTop: "1rem"},
                                                className: "button-group"
                                            },
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: A()("button", {
                                                        disabled: b <= 0
                                                    }),
                                                    onClick: n
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "transaction.trxTypes.asset_fund_fee_pool"
                                                })
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: "button outline",
                                                    onClick: l
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "account.perm.reset"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderClaimPool",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = this.onClaimPool,
                                        n = this.reset,
                                        l = this.state.claimPoolAmount,
                                        s = t.asset,
                                        i = t.core,
                                        c = (0, t.getDynamicObject)(
                                            s.get("dynamic_asset_data_id")
                                        ),
                                        u = i.get("id") || "1.3.0",
                                        d = c
                                            ? r.a.createElement(
                                                  "span",
                                                  {
                                                      onClick: function() {
                                                          e.state.claimPoolAmountAsset.setAmount(
                                                              {
                                                                  sats: c.get(
                                                                      "fee_pool"
                                                                  )
                                                              }
                                                          ),
                                                              e.setState({
                                                                  claimPoolAmount: e.state.claimPoolAmountAsset.getAmount(
                                                                      {real: !0}
                                                                  )
                                                              });
                                                      }
                                                  },
                                                  r.a.createElement(o.a, {
                                                      component: "span",
                                                      content:
                                                          "transfer.available"
                                                  }),
                                                  ": ",
                                                  r.a.createElement(m.a, {
                                                      amount: c.get("fee_pool"),
                                                      asset: u
                                                  })
                                              )
                                            : null;
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(o.a, {
                                            component: "p",
                                            content:
                                                "explorer.asset.fee_pool.claim_pool_text"
                                        }),
                                        r.a.createElement(C.a, {
                                            label: "transfer.amount",
                                            display_balance: d,
                                            amount: l,
                                            onChange: this.onClaimInput.bind(
                                                this,
                                                "claimPoolAmount"
                                            ),
                                            asset: u,
                                            assets: [u],
                                            placeholder: "0.0",
                                            tabIndex: 2,
                                            style: {
                                                width: "100%",
                                                paddingTop: 16
                                            }
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {
                                                style: {paddingTop: "1rem"},
                                                className: "button-group"
                                            },
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: A()("button", {
                                                        disabled: l <= 0
                                                    }),
                                                    onClick: a
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "transaction.trxTypes.asset_claim_fee_pool"
                                                })
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: "button outline",
                                                    onClick: n
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "account.perm.reset"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderClaimFees",
                                value: function() {
                                    var e = this.props,
                                        t = this.state.claimFeesAmount,
                                        a = e.asset,
                                        n = (0, e.getDynamicObject)(
                                            a.get("dynamic_asset_data_id")
                                        ),
                                        l = n ? n.get("accumulated_fees") : 0,
                                        s =
                                            t > 0 &&
                                            this.state.claimFeesAmountAsset.getAmount() <=
                                                l,
                                        i = r.a.createElement(
                                            "span",
                                            null,
                                            r.a.createElement(o.a, {
                                                component: "span",
                                                content: "transfer.available"
                                            }),
                                            ": ",
                                            r.a.createElement(m.a, {
                                                amount: l,
                                                asset: a.get("id")
                                            })
                                        );
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(o.a, {
                                            component: "p",
                                            content:
                                                "explorer.asset.fee_pool.claim_text",
                                            asset: a.get("symbol")
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {style: {paddingBottom: "1rem"}},
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.fee_pool.unclaimed_issuer_income"
                                            }),
                                            ": ",
                                            n
                                                ? r.a.createElement(m.a, {
                                                      amount: n.get(
                                                          "accumulated_fees"
                                                      ),
                                                      asset: a.get("id")
                                                  })
                                                : null
                                        ),
                                        r.a.createElement(C.a, {
                                            label: "transfer.amount",
                                            display_balance: i,
                                            amount: t,
                                            onChange: this.onClaimInput.bind(
                                                this,
                                                "claimFeesAmount"
                                            ),
                                            asset: a.get("id"),
                                            assets: [a.get("id")],
                                            placeholder: "0.0",
                                            tabIndex: 1,
                                            style: {
                                                width: "100%",
                                                paddingTop: 16
                                            }
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {
                                                style: {paddingTop: "1rem"},
                                                className: "button-group"
                                            },
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: A()("button", {
                                                        disabled: !s
                                                    }),
                                                    onClick: this.onClaimFees.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.fee_pool.claim_fees"
                                                })
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: "button outline",
                                                    onClick: this.reset.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "account.perm.reset"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return "fund" === this.props.type
                                        ? this.renderFundPool()
                                        : "claim" === this.props.type
                                            ? this.renderClaimPool()
                                            : "claim_fees" === this.props.type
                                                ? this.renderClaimFees()
                                                : void 0;
                                }
                            }
                        ]),
                        t
                    );
                })();
            F.defaultProps = {type: "fund"};
            var I = (F = Object(u.a)(F, {
                    propNames: ["asset", "core"],
                    defaultProps: {core: "1.3.0"},
                    withDynamic: !0
                })),
                R = a(24),
                q = a(31),
                B = a(42),
                D = a(49),
                z = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function M(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            var J = (function(e) {
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
                            new_issuer_account_id: null,
                            issuer_account_name: null
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
                    z(t, [
                        {
                            key: "onAccountNameChanged",
                            value: function(e, t) {
                                this.setState(M({}, e, t));
                            }
                        },
                        {
                            key: "onAccountChanged",
                            value: function(e, t) {
                                this.setState(M({}, e, t ? t.get("id") : null));
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function() {
                                var e = this;
                                N.a
                                    .updateOwner(
                                        this.props.asset,
                                        this.state.new_issuer_account_id
                                    )
                                    .then(function() {
                                        e.onReset();
                                    });
                            }
                        },
                        {
                            key: "onReset",
                            value: function() {
                                this.setState({
                                    new_issuer_account_id: null,
                                    issuer_account_name: null
                                });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.currentOwner;
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "div",
                                        {style: {paddingBottom: "1rem"}},
                                        r.a.createElement(O.a, {
                                            label:
                                                "account.user_issued_assets.current_issuer",
                                            accountName: e.get("name"),
                                            account: e.get("name"),
                                            error: null,
                                            tabIndex: 1,
                                            disabled: !0
                                        })
                                    ),
                                    r.a.createElement(O.a, {
                                        label:
                                            "account.user_issued_assets.new_issuer",
                                        accountName: this.state
                                            .issuer_account_name,
                                        onChange: this.onAccountNameChanged.bind(
                                            this,
                                            "issuer_account_name"
                                        ),
                                        onAccountChanged: this.onAccountChanged.bind(
                                            this,
                                            "new_issuer_account_id"
                                        ),
                                        account: this.state.issuer_account_name,
                                        error: null,
                                        tabIndex: 1,
                                        typeahead: !0,
                                        excludeAccounts: [e.get("name")]
                                    }),
                                    r.a.createElement(
                                        "div",
                                        {
                                            style: {paddingTop: "1rem"},
                                            className: "button-group"
                                        },
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: A()("button", {
                                                    disabled: !this.state
                                                        .new_issuer_account_id
                                                }),
                                                onClick: this.onSubmit.bind(
                                                    this
                                                )
                                            },
                                            r.a.createElement(o.a, {
                                                content:
                                                    "account.user_issued_assets.update_owner"
                                            })
                                        ),
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: "button outline",
                                                onClick: this.onReset.bind(this)
                                            },
                                            r.a.createElement(o.a, {
                                                content: "account.perm.reset"
                                            })
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            J.propTypes = {
                account: B.a.ChainAccount.isRequired,
                currentOwner: B.a.ChainAccount.isRequired
            };
            var L = (J = Object(D.a)(J)),
                V = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var U = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
                                if (!e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return !t ||
                                    ("object" != typeof t &&
                                        "function" != typeof t)
                                    ? e
                                    : t;
                            })(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(
                                    this
                                )
                            ),
                            n = new k.a({
                                amount: 0,
                                asset_id: e.quote.get("id"),
                                precision: e.quote.get("precision")
                            }),
                            r = new k.a({
                                amount: 0,
                                asset_id: e.base.get("id"),
                                precision: e.base.get("precision")
                            }),
                            l = new k.i({quote: n, base: r});
                        return (
                            (a.state = {price: l, realPriceValue: l.toReal()}),
                            a
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
                        V(t, [
                            {
                                key: "onPriceChanged",
                                value: function(e) {
                                    var t = e.amount;
                                    this.state.price.setPriceFromReal(
                                        parseFloat(t)
                                    ),
                                        this.setState({realPriceValue: t}),
                                        this.props.onPriceChanged &&
                                            this.props.onPriceChanged(
                                                this.state.price.clone()
                                            );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.state,
                                        t = e.realPriceValue,
                                        a = e.price;
                                    return r.a.createElement(C.a, {
                                        label: this.props.label,
                                        amount: t,
                                        onChange: this.onPriceChanged.bind(
                                            this
                                        ),
                                        asset: a.base.asset_id,
                                        base: this.props.quote.get("symbol"),
                                        isPrice: !0,
                                        assets: [a.quote.asset_id],
                                        placeholder: "0.0",
                                        tabIndex: 1,
                                        style: {
                                            width: "100%",
                                            paddingRight: "10px"
                                        }
                                    });
                                }
                            }
                        ]),
                        t
                    );
                })(),
                W = (U = Object(u.a)(U, {
                    propNames: ["quote", "base"],
                    defaultProps: {base: "1.3.0"}
                })),
                G = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function H(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            var Y = (function(e) {
                function t(e) {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var a = (function(e, t) {
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
                    return (a.state = a.resetState(e)), a;
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
                    G(t, [
                        {
                            key: "resetState",
                            value: function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props,
                                    t = e.account.get("id"),
                                    a = e.asset.getIn([
                                        "bitasset",
                                        "current_feed"
                                    ]),
                                    n = a.get(
                                        "maintenance_collateral_ratio",
                                        1750
                                    ),
                                    r = a.get(
                                        "maximum_short_squeeze_ratio",
                                        1100
                                    );
                                return {
                                    publisher: e.account.get("name"),
                                    publisher_id: t,
                                    mcr: n,
                                    mcrValue: n / 1e3,
                                    mssr: r,
                                    mssrValue: r / 1e3
                                };
                            }
                        },
                        {
                            key: "onAccountNameChanged",
                            value: function(e, t) {
                                this.setState(H({}, e, t));
                            }
                        },
                        {
                            key: "onAccountChanged",
                            value: function(e, t) {
                                this.setState(H({}, e, t ? t.get("id") : null));
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function() {
                                N.a.publishFeed({
                                    publisher: this.state.publisher_id,
                                    asset_id: this.props.asset.get("id"),
                                    mcr: this.state.mcr,
                                    mssr: this.state.mssr,
                                    settlementPrice: this.state.settlementPrice,
                                    cer: this.state.cer
                                });
                            }
                        },
                        {
                            key: "onPriceChanged",
                            value: function(e, t) {
                                this.setState(H({}, e, t));
                            }
                        },
                        {
                            key: "onSetRatio",
                            value: function(e, t) {
                                var a,
                                    n = t.amount;
                                n &&
                                    "string" == typeof n &&
                                    -1 !== n.indexOf(".") &&
                                    n.indexOf(".") + 4 !== n.length &&
                                    (n = n.substr(0, n.indexOf(".") + 4)),
                                    this.setState(
                                        (H((a = {}), e + "Value", n),
                                        H(
                                            a,
                                            e,
                                            Math.floor(1e3 * parseFloat(n))
                                        ),
                                        a)
                                    );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.asset,
                                    t = this.state,
                                    a = t.mcrValue,
                                    n = t.mssrValue,
                                    l = t.publisher,
                                    s = e.get("id"),
                                    i = e.getIn([
                                        "bitasset",
                                        "options",
                                        "short_backing_asset"
                                    ]);
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(O.a, {
                                        label: "explorer.asset.feed_producer",
                                        accountName: l,
                                        onChange: this.onAccountNameChanged.bind(
                                            this,
                                            "publisher"
                                        ),
                                        onAccountChanged: this.onAccountChanged.bind(
                                            this,
                                            "publisher_id"
                                        ),
                                        account: l,
                                        error: null,
                                        tabIndex: 1,
                                        typeahead: !0
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(W, {
                                        onPriceChanged: this.onPriceChanged.bind(
                                            this,
                                            "cer"
                                        ),
                                        label:
                                            "explorer.asset.fee_pool.core_exchange_rate",
                                        quote: "1.3.0",
                                        base: s
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(W, {
                                        onPriceChanged: this.onPriceChanged.bind(
                                            this,
                                            "settlementPrice"
                                        ),
                                        label:
                                            "explorer.asset.price_feed.settlement_price",
                                        quote: i,
                                        base: s
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(C.a, {
                                        label:
                                            "explorer.asset.price_feed.maintenance_collateral_ratio",
                                        amount: a,
                                        onChange: this.onSetRatio.bind(
                                            this,
                                            "mcr"
                                        ),
                                        placeholder: "0.0",
                                        style: {
                                            width: "100%",
                                            paddingRight: "10px"
                                        }
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(C.a, {
                                        label:
                                            "explorer.asset.price_feed.maximum_short_squeeze_ratio",
                                        amount: n,
                                        onChange: this.onSetRatio.bind(
                                            this,
                                            "mssr"
                                        ),
                                        placeholder: "0.0",
                                        style: {
                                            width: "100%",
                                            paddingRight: "10px"
                                        }
                                    }),
                                    r.a.createElement(
                                        "div",
                                        {
                                            style: {paddingTop: "1rem"},
                                            className: "button-group"
                                        },
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: A()("button", {
                                                    disabled: !1
                                                }),
                                                onClick: this.onSubmit.bind(
                                                    this
                                                )
                                            },
                                            r.a.createElement(o.a, {
                                                content:
                                                    "transaction.trxTypes.asset_publish_feed"
                                            })
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (Y.propTypes = {account: B.a.ChainAccount.isRequired}),
                (Y = Object(D.a)(Y));
            var Z = (Y = Object(u.a)(Y)),
                K = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var Q = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.initialState = function() {
                                return {
                                    account: y.ChainStore.getAccount(
                                        a.props.funderAccountName
                                    ),
                                    collateralAmount: "0",
                                    debtAmount: "0"
                                };
                            }),
                            (a.state = a.initialState()),
                            a
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
                        K(t, [
                            {
                                key: "reset",
                                value: function() {
                                    this.setState(this.initialState());
                                }
                            },
                            {
                                key: "_collateralBidInput",
                                value: function(e) {
                                    this.setState({collateralAmount: e.amount});
                                }
                            },
                            {
                                key: "_debtBidInput",
                                value: function(e) {
                                    this.setState({debtAmount: e.amount});
                                }
                            },
                            {
                                key: "_onBidCollateral",
                                value: function() {
                                    var e = this,
                                        t = this.state,
                                        a = t.collateralAmount,
                                        n = t.debtAmount;
                                    (a = 0 == a ? a : a.replace(/,/g, "")),
                                        (n = 0 == n ? n : n.replace(/,/g, "")),
                                        N.a.bidCollateral(
                                            this.state.account
                                                ? this.state.account.get("id")
                                                : null,
                                            this.props.core,
                                            this.props.asset,
                                            a,
                                            n
                                        ),
                                        setTimeout(function() {
                                            e.props.onUpdate();
                                        }, 6e3);
                                }
                            },
                            {
                                key: "removeBid",
                                value: function() {
                                    var e = this;
                                    N.a.bidCollateral(
                                        this.state.account
                                            ? this.state.account.get("id")
                                            : null,
                                        this.props.core,
                                        this.props.asset,
                                        0,
                                        0
                                    ),
                                        setTimeout(function() {
                                            e.props.onUpdate();
                                        }, 6e3);
                                }
                            },
                            {
                                key: "renderCollateralBid",
                                value: function() {
                                    var e = this.props,
                                        t = e.asset,
                                        a = e.core,
                                        n = this.state,
                                        l = n.account,
                                        s = n.collateralAmount,
                                        i = n.debtAmount,
                                        c = 1,
                                        u = a.get("id") || "1.3.0",
                                        p = 0,
                                        h = l ? l.getIn(["balances", u]) : null;
                                    if (h) {
                                        var b = y.ChainStore.getObject(h);
                                        b && (p = b.get("balance"));
                                    }
                                    var _ = r.a.createElement(
                                        "span",
                                        null,
                                        r.a.createElement(o.a, {
                                            component: "span",
                                            content: "transfer.available"
                                        }),
                                        ": ",
                                        r.a.createElement(m.a, {
                                            amount: p,
                                            asset: u
                                        })
                                    );
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(C.a, {
                                            label: "transaction.collateral",
                                            display_balance: _,
                                            amount: s,
                                            onChange: this._collateralBidInput.bind(
                                                this
                                            ),
                                            asset: u,
                                            assets: [u],
                                            placeholder: "0.0",
                                            tabIndex: c++,
                                            style: {
                                                width: "100%",
                                                paddingTop: 16
                                            }
                                        }),
                                        r.a.createElement(C.a, {
                                            label: "transaction.borrow_amount",
                                            amount: i,
                                            onChange: this._debtBidInput.bind(
                                                this
                                            ),
                                            asset: t.get("id"),
                                            assets: [t.get("id")],
                                            placeholder: "0.0",
                                            tabIndex: c++,
                                            style: {
                                                width: "100%",
                                                paddingTop: 16
                                            }
                                        }),
                                        "0" !== this.state.collateralAmount &&
                                            "0" !== this.state.debtAmount &&
                                            r.a.createElement(
                                                "div",
                                                {style: {paddingTop: "1rem"}},
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.collateral.bid_price"
                                                }),
                                                " ",
                                                r.a.createElement(d.a, {
                                                    base_amount:
                                                        this.state
                                                            .collateralAmount /
                                                        1,
                                                    base_asset: u,
                                                    quote_amount:
                                                        this.state.debtAmount /
                                                        1,
                                                    quote_asset: t.get("id"),
                                                    noPopOver: !0
                                                })
                                            ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                style: {paddingTop: "1rem"},
                                                className: "button-group"
                                            },
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: A()("button"),
                                                    onClick: this._onBidCollateral.bind(
                                                        this
                                                    ),
                                                    tabIndex: c++
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "transaction.trxTypes.bid_collateral"
                                                })
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: "button outline",
                                                    onClick: this.reset.bind(
                                                        this
                                                    ),
                                                    tabIndex: c++
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "account.perm.reset"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return this.renderCollateralBid();
                                }
                            }
                        ]),
                        t
                    );
                })(),
                X = (Q = Object(u.a)(Q, {
                    propNames: ["asset", "core"],
                    defaultProps: {core: "1.3.0"},
                    withDynamic: !0
                })),
                $ = a(2007),
                ee =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                te = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function ae(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            function ne(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function re(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function le(e, t) {
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
            var se = (function(e) {
                    function t() {
                        return (
                            ne(this, t),
                            re(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        le(t, r.a.Component),
                        te(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.isSet,
                                        a = e.name;
                                    return t
                                        ? r.a.createElement(
                                              "span",
                                              {className: "asset-flag"},
                                              r.a.createElement(
                                                  "span",
                                                  {className: "label info"},
                                                  r.a.createElement(o.a, {
                                                      content:
                                                          "account.user_issued_assets." +
                                                          a
                                                  })
                                              )
                                          )
                                        : r.a.createElement("span", null);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                oe = (function(e) {
                    function t() {
                        return (
                            ne(this, t),
                            re(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        le(t, r.a.Component),
                        te(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.isSet,
                                        a = e.name;
                                    return t
                                        ? r.a.createElement(
                                              "span",
                                              {className: "asset-flag"},
                                              r.a.createElement(
                                                  "span",
                                                  {className: "label info"},
                                                  r.a.createElement(o.a, {
                                                      content:
                                                          "account.user_issued_assets." +
                                                          a
                                                  })
                                              )
                                          )
                                        : r.a.createElement("span", null);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ie = (function(e) {
                    function t(e) {
                        ne(this, t);
                        var a = re(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.state = {
                                callOrders: [],
                                collateralBids: [],
                                marginTableSort: "ratio",
                                collateralTableSort: "price",
                                sortDirection: !0,
                                showCollateralBidInInfo: !1
                            }),
                            a
                        );
                    }
                    return (
                        le(t, r.a.Component),
                        te(t, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    this._getMarginCollateral();
                                }
                            },
                            {
                                key: "updateOnCollateralBid",
                                value: function() {
                                    this._getMarginCollateral();
                                }
                            },
                            {
                                key: "_getMarginCollateral",
                                value: function() {
                                    var e = this;
                                    if (this.props.asset.has("bitasset")) {
                                        var t,
                                            a = (ae(
                                                (t = {}),
                                                this.props.asset.get("id"),
                                                this.props.asset.toJS()
                                            ),
                                            ae(
                                                t,
                                                this.props.backingAsset.get(
                                                    "id"
                                                ),
                                                this.props.backingAsset.toJS()
                                            ),
                                            t),
                                            n = this.props.asset.getIn(
                                                [
                                                    "bitasset",
                                                    "is_prediction_market"
                                                ],
                                                !1
                                            ),
                                            r = this._getFeedPrice();
                                        try {
                                            v.Apis.instance()
                                                .db_api()
                                                .exec("get_call_orders", [
                                                    this.props.asset.get("id"),
                                                    300
                                                ])
                                                .then(function(t) {
                                                    var l = t.map(function(t) {
                                                        return new k.b(
                                                            t,
                                                            a,
                                                            e.props.asset.get(
                                                                "id"
                                                            ),
                                                            r,
                                                            n
                                                        );
                                                    });
                                                    e.setState({callOrders: l});
                                                });
                                        } catch (e) {}
                                        try {
                                            v.Apis.instance()
                                                .db_api()
                                                .exec("get_collateral_bids", [
                                                    this.props.asset.get("id"),
                                                    100,
                                                    0
                                                ])
                                                .then(function(t) {
                                                    var n = t.map(function(t) {
                                                        return new k.c(
                                                            t,
                                                            a,
                                                            e.props.asset.get(
                                                                "id"
                                                            ),
                                                            r
                                                        );
                                                    });
                                                    e.setState({
                                                        collateralBids: n
                                                    });
                                                });
                                        } catch (e) {
                                            console.log(
                                                "get_collateral_bids Error: ",
                                                e
                                            );
                                        }
                                    }
                                }
                            },
                            {
                                key: "_getFeedPrice",
                                value: function() {
                                    var e,
                                        t = (ae(
                                            (e = {}),
                                            this.props.asset.get("id"),
                                            this.props.asset.toJS()
                                        ),
                                        ae(
                                            e,
                                            this.props.backingAsset.get("id"),
                                            this.props.backingAsset.toJS()
                                        ),
                                        e),
                                        a = this.props.asset.getIn(
                                            [
                                                "bitasset",
                                                "is_prediction_market"
                                            ],
                                            !1
                                        ),
                                        n = this.props.asset.getIn([
                                            "bitasset",
                                            "current_feed",
                                            "maximum_short_squeeze_ratio"
                                        ]),
                                        r = this.props.asset.getIn([
                                            "bitasset",
                                            "current_feed",
                                            "settlement_price"
                                        ]);
                                    return (
                                        a &&
                                            r.getIn(["base", "asset_id"]) ===
                                                r.getIn([
                                                    "quote",
                                                    "asset_id"
                                                ]) &&
                                            (t[
                                                this.props.backingAsset.get(
                                                    "id"
                                                )
                                            ] ||
                                                (t[
                                                    this.props.backingAsset.get(
                                                        "id"
                                                    )
                                                ] = {
                                                    precision: this.props.asset.get(
                                                        "precision"
                                                    )
                                                }),
                                            (r = (r = (r = (r = r.setIn(
                                                ["base", "amount"],
                                                1
                                            )).setIn(
                                                ["base", "asset_id"],
                                                this.props.backingAsset.get(
                                                    "id"
                                                )
                                            )).setIn(
                                                ["quote", "amount"],
                                                1
                                            )).setIn(
                                                ["quote", "asset_id"],
                                                this.props.asset.get("id")
                                            )),
                                            (n = 1e3)),
                                        new k.d({
                                            priceObject: r,
                                            market_base: this.props.asset.get(
                                                "id"
                                            ),
                                            sqr: n,
                                            assets: t
                                        })
                                    );
                                }
                            },
                            {
                                key: "_toggleSortOrder",
                                value: function(e) {
                                    e !== this.state.marginTableSort
                                        ? this.setState({marginTableSort: e})
                                        : this.setState({
                                              sortDirection: !this.state
                                                  .sortDirection
                                          }),
                                        e !== this.state.collateralTableSort
                                            ? this.setState({
                                                  collateralTableSort: e
                                              })
                                            : this.setState({
                                                  sortDirection: !this.state
                                                      .sortDirection
                                              });
                                }
                            },
                            {
                                key: "_assetType",
                                value: function(e) {
                                    return "bitasset" in e
                                        ? e.bitasset.is_prediction_market
                                            ? "Prediction"
                                            : "Smart"
                                        : "Simple";
                                }
                            },
                            {
                                key: "renderFlagIndicators",
                                value: function(e, t) {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        t.map(function(t) {
                                            return r.a.createElement(se, {
                                                key: "flag_" + t,
                                                name: t,
                                                isSet: e[t]
                                            });
                                        })
                                    );
                                }
                            },
                            {
                                key: "renderPermissionIndicators",
                                value: function(e, t) {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        t.map(function(t) {
                                            return r.a.createElement(oe, {
                                                key: "perm_" + t,
                                                name: t,
                                                isSet: e[t]
                                            });
                                        })
                                    );
                                }
                            },
                            {
                                key: "formattedPrice",
                                value: function(e) {
                                    var t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1] &&
                                            arguments[1],
                                        a =
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2] &&
                                            arguments[2],
                                        n =
                                            arguments.length > 3 &&
                                            void 0 !== arguments[3]
                                                ? arguments[3]
                                                : 0,
                                        l =
                                            arguments.length > 4 &&
                                            void 0 !== arguments[4] &&
                                            arguments[4],
                                        s = e.base,
                                        o = e.quote;
                                    return r.a.createElement(d.a, {
                                        base_amount: s.amount,
                                        base_asset: s.asset_id,
                                        quote_amount: o.amount,
                                        quote_asset: o.asset_id,
                                        hide_value: a,
                                        hide_symbols: t,
                                        factor: n,
                                        negative_invert: l
                                    });
                                }
                            },
                            {
                                key: "renderAuthorityList",
                                value: function(e) {
                                    return e.map(function(e) {
                                        return r.a.createElement(
                                            "span",
                                            {key: e},
                                            r.a.createElement(i.a, {
                                                account: e
                                            }),
                                            " "
                                        );
                                    });
                                }
                            },
                            {
                                key: "renderMarketList",
                                value: function(e, t) {
                                    var a = e.symbol;
                                    return t.map(
                                        function(e) {
                                            if (e == a) return null;
                                            var t = e + "_" + a,
                                                n = e + "/" + a;
                                            return r.a.createElement(
                                                "span",
                                                {key: t},
                                                r.a.createElement(
                                                    l.a,
                                                    {to: "/market/" + t},
                                                    n
                                                ),
                                                " "
                                            );
                                        }.bind(this)
                                    );
                                }
                            },
                            {
                                key: "renderAboutBox",
                                value: function(e, t) {
                                    var a = y.ChainStore.getObject(
                                            e.issuer,
                                            !1,
                                            !1
                                        ),
                                        n = a ? a.get("name") : "",
                                        s = _.a.parseDescription(
                                            e.options.description
                                        ),
                                        i = s.main,
                                        c = s.short_name ? s.short_name : null,
                                        u = (i =
                                            i && i.length > 0
                                                ? i + " "
                                                : i).match(
                                            /(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g
                                        ),
                                        m = y.ChainStore.getAsset("1.3.0"),
                                        d = s.market
                                            ? s.market
                                            : m
                                                ? m.get("symbol")
                                                : "CTS";
                                    "bitasset" in e &&
                                        e.bitasset.is_prediction_market &&
                                        (d = (d = y.ChainStore.getAsset(
                                            e.bitasset.options
                                                .short_backing_asset
                                        ))
                                            ? d.get("symbol")
                                            : m.get("symbol")),
                                        e.symbol === m.get("symbol") &&
                                            (d = "USD"),
                                        u &&
                                            u.length &&
                                            u.forEach(function(e) {
                                                var t =
                                                    '<a target="_blank" rel="noopener noreferrer" href="' +
                                                    e +
                                                    '">' +
                                                    e +
                                                    "</a>";
                                                i = i.replace(e, t);
                                            });
                                    var p = f.a.replaceName(t),
                                        h = p.name,
                                        g = p.prefix;
                                    return r.a.createElement(
                                        "div",
                                        {style: {overflow: "visible"}},
                                        r.a.createElement(b.a, {
                                            path: "assets/" + e.symbol,
                                            alt_path: "assets/Asset",
                                            section: "summary",
                                            symbol: (g || "") + h,
                                            description: i,
                                            issuer: n,
                                            hide_issuer: "true"
                                        }),
                                        c
                                            ? r.a.createElement("p", null, c)
                                            : null,
                                        r.a.createElement(
                                            l.a,
                                            {
                                                className:
                                                    "button market-button",
                                                to:
                                                    "/market/" +
                                                    e.symbol +
                                                    "_" +
                                                    d
                                            },
                                            r.a.createElement(o.a, {
                                                content: "exchange.market"
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderSummary",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    t && (t = t.toJS());
                                    var a = e.options,
                                        n = _.a.getFlagBooleans(
                                            e.options.flags,
                                            this.props.asset.has(
                                                "bitasset_data_id"
                                            )
                                        ),
                                        l = Object.keys(n),
                                        s = t
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.summary.current_supply"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(m.a, {
                                                          amount:
                                                              t.current_supply,
                                                          asset: e.id
                                                      })
                                                  )
                                              )
                                            : null,
                                        u = t
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.summary.stealth_supply"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(m.a, {
                                                          amount:
                                                              t.confidential_supply,
                                                          asset: e.id
                                                      })
                                                  )
                                              )
                                            : null,
                                        d = n.charge_market_fee
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.summary.market_fee"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      a.market_fee_percent /
                                                          100,
                                                      " % "
                                                  )
                                              )
                                            : null,
                                        h = n.charge_market_fee
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.summary.max_market_fee"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(m.a, {
                                                          amount: +a.max_market_fee,
                                                          asset: e.id
                                                      })
                                                  )
                                              )
                                            : null;
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            r.a.createElement(p.a, {
                                                name: e.symbol
                                            })
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover"
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.summary.asset_type"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        this._assetType(e),
                                                        " "
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.summary.issuer"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(i.a, {
                                                            account: e.issuer
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.assets.precision"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        e.precision,
                                                        " "
                                                    )
                                                ),
                                                e.bitasset
                                                    ? r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.assets.backing_asset"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  c.a,
                                                                  {
                                                                      asset:
                                                                          e
                                                                              .bitasset
                                                                              .options
                                                                              .short_backing_asset
                                                                  }
                                                              )
                                                          )
                                                      )
                                                    : null,
                                                s,
                                                u,
                                                d,
                                                h
                                            )
                                        ),
                                        r.a.createElement("br", null),
                                        this.renderFlagIndicators(n, l)
                                    );
                                }
                            },
                            {
                                key: "renderPriceFeed",
                                value: function(e) {
                                    var t = r.a.createElement(o.a, {
                                            content:
                                                "explorer.asset.price_feed.title"
                                        }),
                                        a = e.bitasset;
                                    if (!("current_feed" in a))
                                        return r.a.createElement("div", {
                                            header: t
                                        });
                                    var n = a.current_feed,
                                        l = this.formattedPrice(
                                            n.settlement_price
                                        );
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            t
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover",
                                                style: {padding: "1.2rem"}
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.external_feed_price"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        l
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.feed_lifetime"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        a.options
                                                            .feed_lifetime_sec /
                                                            60 /
                                                            60
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.min_feeds"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        a.options.minimum_feeds
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.maintenance_collateral_ratio"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        n.maintenance_collateral_ratio /
                                                            1e3
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.maximum_short_squeeze_ratio"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        n.maximum_short_squeeze_ratio /
                                                            1e3
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "_analyzeBids",
                                value: function(e) {
                                    var t = e,
                                        a = 0,
                                        n = 0;
                                    return (
                                        this.state.collateralBids
                                            .sort(function(e, t) {
                                                return (
                                                    t.bid.toReal() -
                                                    e.bid.toReal()
                                                );
                                            })
                                            .forEach(function(e) {
                                                var r = e.collateral,
                                                    l = e.debt;
                                                n < t
                                                    ? (n + l >= t
                                                          ? ((r =
                                                                ((l = t - n) /
                                                                    e.debt) *
                                                                r),
                                                            (e.consideredIfRevived = 2))
                                                          : (e.consideredIfRevived = 1),
                                                      (a += r),
                                                      (n += l))
                                                    : (e.consideredIfRevived = 0);
                                            }),
                                        {collateral: a, debt: n}
                                    );
                                }
                            },
                            {
                                key: "renderSettlement",
                                value: function(e) {
                                    var t = this,
                                        a = r.a.createElement(o.a, {
                                            content:
                                                "explorer.asset.settlement.title"
                                        }),
                                        n = e.bitasset;
                                    if (!("current_feed" in n))
                                        return r.a.createElement("div", {
                                            header: a
                                        });
                                    var l = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    l && (l = l.toJS());
                                    var s = l ? l.current_supply : 0,
                                        i = n.current_feed,
                                        c = e.bitasset.settlement_fund > 0,
                                        u = null,
                                        p = null,
                                        h = null;
                                    if (c) {
                                        var b,
                                            _ = n.settlement_fund,
                                            f = this.formattedPrice(
                                                n.settlement_price
                                            ),
                                            g = this.formattedPrice(
                                                n.settlement_price,
                                                !1,
                                                !1,
                                                i.maintenance_collateral_ratio /
                                                    1e3,
                                                !0
                                            ),
                                            y = (ae(
                                                (b = {}),
                                                this.props.asset.get("id"),
                                                this.props.asset.toJS()
                                            ),
                                            ae(
                                                b,
                                                this.props.backingAsset.get(
                                                    "id"
                                                ),
                                                this.props.backingAsset.toJS()
                                            ),
                                            b),
                                            v = this._getFeedPrice(),
                                            k = s,
                                            x = n.settlement_fund,
                                            w = this._analyzeBids(k);
                                        (h = r.a.createElement(d.a, {
                                            base_amount:
                                                n.settlement_fund / 1 +
                                                w.collateral,
                                            base_asset:
                                                y[n.options.short_backing_asset]
                                                    .id,
                                            quote_amount: w.debt,
                                            quote_asset: e.id,
                                            hide_value: !1,
                                            hide_symbols: !1,
                                            factor:
                                                i.maintenance_collateral_ratio /
                                                1e3,
                                            negative_invert: !0
                                        })),
                                            (k /= Math.pow(10, e.precision)),
                                            (u =
                                                (x /= Math.pow(
                                                    10,
                                                    y[
                                                        n.options
                                                            .short_backing_asset
                                                    ].precision
                                                )) /
                                                v.toReal() /
                                                k),
                                            (p =
                                                (x +
                                                    w.collateral /
                                                        Math.pow(
                                                            10,
                                                            y[
                                                                n.options
                                                                    .short_backing_asset
                                                            ].precision
                                                        )) /
                                                v.toReal() /
                                                k);
                                    } else
                                        var A = this.getGlobalSettlementPrice(),
                                            O = n.force_settled_volume,
                                            C =
                                                n.options
                                                    .force_settlement_offset_percent,
                                            N =
                                                n.options
                                                    .force_settlement_delay_sec,
                                            P =
                                                n.options
                                                    .maximum_force_settlement_volume,
                                            S = this.formattedPrice(
                                                i.settlement_price,
                                                !1,
                                                !1,
                                                i.maximum_short_squeeze_ratio /
                                                    1e3
                                            ),
                                            T = this.formattedPrice(
                                                i.settlement_price,
                                                !1,
                                                !1,
                                                1 - C / 1e4
                                            );
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            a
                                        ),
                                        c &&
                                            r.a.createElement(o.a, {
                                                component: "p",
                                                content:
                                                    "explorer.asset.settlement.gs_description"
                                            }),
                                        c &&
                                            r.a.createElement(
                                                "p",
                                                null,
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.settlement.gs_revive"
                                                }),
                                                " (",
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.settlement.gs_see_actions"
                                                }),
                                                ",  ",
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.settlement.gs_or"
                                                }),
                                                " ",
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        onClick: function() {
                                                            t.setState({
                                                                showCollateralBidInInfo: !t
                                                                    .state
                                                                    .showCollateralBidInInfo
                                                            });
                                                        }
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "explorer.asset.settlement.gs_place_bid"
                                                    })
                                                ),
                                                ")."
                                            ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover",
                                                style: {padding: "1.2rem"}
                                            },
                                            c
                                                ? r.a.createElement(
                                                      "tbody",
                                                      null,
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.settlement.settlement_price"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              f
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.settlement.settlement_funds"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  m.a,
                                                                  {
                                                                      asset:
                                                                          n
                                                                              .options
                                                                              .short_backing_asset,
                                                                      amount: _
                                                                  }
                                                              )
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.settlement.settlement_funds_collateral_ratio"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              u.toFixed(6)
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              " "
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              " "
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      style: {
                                                                          fontWeight:
                                                                              "bold"
                                                                      },
                                                                      content:
                                                                          "explorer.asset.settlement.gs_revert"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              " "
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.settlement.gs_auto_revive_price"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              g,
                                                              " / ",
                                                              h
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.settlement.gs_collateral_valuation",
                                                                      mcr:
                                                                          i.maintenance_collateral_ratio /
                                                                          1e3
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              p.toFixed(6)
                                                          )
                                                      )
                                                  )
                                                : r.a.createElement(
                                                      "tbody",
                                                      null,
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.price_feed.maximum_short_squeeze_price"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              S
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.price_feed.global_settlement_price"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              A || "-"
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              " "
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              " "
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      style: {
                                                                          fontWeight:
                                                                              "bold"
                                                                      },
                                                                      content:
                                                                          "explorer.asset.settlement.force_settlement"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              " "
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.settlement.price"
                                                                  }
                                                              ),
                                                              "  (",
                                                              C / 100,
                                                              "%",
                                                              " ",
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.settlement.offset"
                                                                  }
                                                              ),
                                                              ")"
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              T
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.settlement.delay"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  E,
                                                                  {time: N}
                                                              )
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.settlement.max_settle_volume"
                                                                  }
                                                              ),
                                                              " (",
                                                              P / 100,
                                                              "%)"
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  m.a,
                                                                  {
                                                                      asset:
                                                                          e.id,
                                                                      amount:
                                                                          s *
                                                                          (P /
                                                                              1e4)
                                                                  }
                                                              )
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.settlement.current_settled"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  m.a,
                                                                  {
                                                                      asset:
                                                                          e.id,
                                                                      amount: O
                                                                  }
                                                              )
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "tr",
                                                          null,
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              r.a.createElement(
                                                                  o.a,
                                                                  {
                                                                      content:
                                                                          "explorer.asset.settlement.settle_remaining_volume"
                                                                  }
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "td",
                                                              null,
                                                              0 == O
                                                                  ? 100
                                                                  : Math.round(
                                                                        100 -
                                                                            (O /
                                                                                (s *
                                                                                    (P /
                                                                                        1e4))) *
                                                                                100,
                                                                        2
                                                                    ),
                                                              "%"
                                                          )
                                                      )
                                                  )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeePool",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    t && (t = t.toJS());
                                    var a = e.options,
                                        n = y.ChainStore.getAsset("1.3.0");
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.fee_pool.title"
                                            })
                                        ),
                                        r.a.createElement(o.a, {
                                            component: "p",
                                            content:
                                                "explorer.asset.fee_pool.pool_text",
                                            unsafe: !0,
                                            asset: e.symbol,
                                            core: n.get("symbol")
                                        }),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table",
                                                style: {padding: "1.2rem"}
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.fee_pool.core_exchange_rate"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        this.formattedPrice(
                                                            a.core_exchange_rate
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.fee_pool.pool_balance"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        t
                                                            ? r.a.createElement(
                                                                  m.a,
                                                                  {
                                                                      asset:
                                                                          "1.3.0",
                                                                      amount:
                                                                          t.fee_pool
                                                                  }
                                                              )
                                                            : null
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.fee_pool.unclaimed_issuer_income"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        t
                                                            ? r.a.createElement(
                                                                  m.a,
                                                                  {
                                                                      asset:
                                                                          e.id,
                                                                      amount:
                                                                          t.accumulated_fees
                                                                  }
                                                              )
                                                            : null
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderAssetOwnerUpdate",
                                value: function(e) {
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-content small-no-padding",
                                            style: {overflowY: "visible"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "asset-card no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "card-divider"},
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "account.user_issued_assets.update_owner"
                                                })
                                            ),
                                            r.a.createElement(o.a, {
                                                component: "p",
                                                content:
                                                    "account.user_issued_assets.update_owner_text",
                                                asset: e.symbol
                                            }),
                                            r.a.createElement(L, {
                                                asset: e,
                                                account: this.props
                                                    .currentAccount,
                                                currentOwner: e.issuer
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeedPublish",
                                value: function(e) {
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-content small-no-padding",
                                            style: {overflowY: "visible"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "asset-card no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "card-divider"},
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "transaction.trxTypes.asset_publish_feed"
                                                })
                                            ),
                                            r.a.createElement(o.a, {
                                                component: "p",
                                                content:
                                                    "explorer.asset.feed_producer_text"
                                            }),
                                            r.a.createElement(Z, {
                                                asset: e.id,
                                                account: this.props
                                                    .currentAccount,
                                                currentOwner: e.issuer
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderCollateralBid",
                                value: function(e) {
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-content small-no-padding"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "asset-card no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "card-divider"},
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.collateral.bid"
                                                })
                                            ),
                                            r.a.createElement(o.a, {
                                                component: "p",
                                                content:
                                                    "explorer.asset.collateral.bid_text",
                                                asset: e.symbol
                                            }),
                                            r.a.createElement(o.a, {
                                                component: "p",
                                                content:
                                                    "explorer.asset.settlement.gs_included_on_revival"
                                            }),
                                            r.a.createElement(o.a, {
                                                component: "p",
                                                content:
                                                    "explorer.asset.collateral.remove_bid"
                                            }),
                                            r.a.createElement(X, {
                                                asset: e.symbol,
                                                funderAccountName: this.props
                                                    .currentAccount,
                                                onUpdate: this.updateOnCollateralBid.bind(
                                                    this
                                                ),
                                                hideBalance: !0
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeePoolFunding",
                                value: function(e) {
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-content small-no-padding"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "asset-card no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "card-divider"},
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.fee_pool.fund"
                                                })
                                            ),
                                            r.a.createElement(o.a, {
                                                component: "p",
                                                content:
                                                    "explorer.asset.fee_pool.fund_text",
                                                asset: e.symbol
                                            }),
                                            r.a.createElement(I, {
                                                asset: e.symbol,
                                                funderAccountName: this.props
                                                    .currentAccount,
                                                hideBalance: !0
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeePoolClaiming",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    return (
                                        t && (t = t.toJS()),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-content small-no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "asset-card no-padding"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {className: "card-divider"},
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "explorer.asset.fee_pool.claim_balance"
                                                    })
                                                ),
                                                r.a.createElement(I, {
                                                    asset: e.symbol,
                                                    funderAccountName: this
                                                        .props.currentAccount,
                                                    dynamic: t,
                                                    hideBalance: !0,
                                                    type: "claim"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeesClaiming",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    return (
                                        t && (t = t.toJS()),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-content small-no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "asset-card no-padding"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {className: "card-divider"},
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.trxTypes.asset_claim_fees"
                                                    })
                                                ),
                                                r.a.createElement(I, {
                                                    asset: e.symbol,
                                                    dynamic: t,
                                                    funderAccountName: this
                                                        .props.currentAccount,
                                                    hideBalance: !0,
                                                    type: "claim_fees"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderPermissions",
                                value: function(e) {
                                    var t = e.options,
                                        a = _.a.getFlagBooleans(
                                            e.options.issuer_permissions,
                                            this.props.asset.has(
                                                "bitasset_data_id"
                                            )
                                        ),
                                        n = Object.keys(a),
                                        l = a.charge_market_fee
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.permissions.max_market_fee"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(m.a, {
                                                          amount: +t.max_market_fee,
                                                          asset: e.id
                                                      })
                                                  )
                                              )
                                            : null,
                                        s = r.a.createElement(
                                            "tr",
                                            null,
                                            r.a.createElement(
                                                "td",
                                                null,
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.permissions.max_supply"
                                                })
                                            ),
                                            r.a.createElement(
                                                "td",
                                                null,
                                                r.a.createElement(m.a, {
                                                    amount: +t.max_supply,
                                                    asset: e.id
                                                })
                                            )
                                        ),
                                        i = a.white_list
                                            ? r.a.createElement(
                                                  "div",
                                                  null,
                                                  r.a.createElement("br", null),
                                                  !!t.blacklist_authorities &&
                                                      !!t.blacklist_authorities
                                                          .length &&
                                                      r.a.createElement(
                                                          r.a.Fragment,
                                                          null,
                                                          r.a.createElement(
                                                              o.a,
                                                              {
                                                                  content:
                                                                      "explorer.asset.permissions.blacklist_authorities"
                                                              }
                                                          ),
                                                          ":  ",
                                                          this.renderAuthorityList(
                                                              t.blacklist_authorities
                                                          )
                                                      ),
                                                  !!t.blacklist_markets &&
                                                      !!t.blacklist_markets
                                                          .length &&
                                                      r.a.createElement(
                                                          r.a.Fragment,
                                                          null,
                                                          r.a.createElement(
                                                              "br",
                                                              null
                                                          ),
                                                          r.a.createElement(
                                                              o.a,
                                                              {
                                                                  content:
                                                                      "explorer.asset.permissions.blacklist_markets"
                                                              }
                                                          ),
                                                          ":  ",
                                                          this.renderMarketList(
                                                              e,
                                                              t.blacklist_markets
                                                          )
                                                      ),
                                                  !!t.whitelist_authorities &&
                                                      !!t.whitelist_authorities
                                                          .length &&
                                                      r.a.createElement(
                                                          r.a.Fragment,
                                                          null,
                                                          r.a.createElement(
                                                              "br",
                                                              null
                                                          ),
                                                          r.a.createElement(
                                                              o.a,
                                                              {
                                                                  content:
                                                                      "explorer.asset.permissions.whitelist_authorities"
                                                              }
                                                          ),
                                                          ":  ",
                                                          this.renderAuthorityList(
                                                              t.whitelist_authorities
                                                          )
                                                      ),
                                                  !!t.whitelist_markets &&
                                                      !!t.whitelist_markets
                                                          .length &&
                                                      r.a.createElement(
                                                          r.a.Fragment,
                                                          null,
                                                          r.a.createElement(
                                                              "br",
                                                              null
                                                          ),
                                                          r.a.createElement(
                                                              o.a,
                                                              {
                                                                  content:
                                                                      "explorer.asset.permissions.whitelist_markets"
                                                              }
                                                          ),
                                                          ":  ",
                                                          this.renderMarketList(
                                                              e,
                                                              t.whitelist_markets
                                                          )
                                                      )
                                              )
                                            : null;
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.permissions.title"
                                            })
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover",
                                                style: {padding: "1.2rem"}
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                l,
                                                s
                                            )
                                        ),
                                        r.a.createElement("br", null),
                                        this.renderPermissionIndicators(a, n),
                                        r.a.createElement("br", null),
                                        i
                                    );
                                }
                            },
                            {
                                key: "getMarginPositions",
                                value: function() {
                                    var e = this.state.sortDirection,
                                        t = {
                                            name: function(t, a) {
                                                var n = y.ChainStore.getAccount(
                                                    t.borrower,
                                                    !1
                                                );
                                                n && (n = n.get("name"));
                                                var r = y.ChainStore.getAccount(
                                                    a.borrower,
                                                    !1
                                                );
                                                return (
                                                    r && (r = r.get("name")),
                                                    n > r
                                                        ? e
                                                            ? 1
                                                            : -1
                                                        : n < r
                                                            ? e
                                                                ? -1
                                                                : 1
                                                            : 0
                                                );
                                            },
                                            price: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (t.call_price.toReal() -
                                                        a.call_price.toReal())
                                                );
                                            },
                                            collateral: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (a.collateral -
                                                        t.collateral)
                                                );
                                            },
                                            debt: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (a.debt - t.debt)
                                                );
                                            },
                                            ratio: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (t.getRatio() -
                                                        a.getRatio())
                                                );
                                            }
                                        };
                                    return this.state.callOrders.sort(
                                        t[this.state.marginTableSort]
                                    );
                                }
                            },
                            {
                                key: "getCollateralBids",
                                value: function(e) {
                                    var t = this.state.sortDirection,
                                        a = {
                                            name: function(e, a) {
                                                var n = y.ChainStore.getAccount(
                                                    e.bidder,
                                                    !1
                                                );
                                                n && (n = n.get("name"));
                                                var r = y.ChainStore.getAccount(
                                                    a.bidder,
                                                    !1
                                                );
                                                return (
                                                    r && (r = r.get("name")),
                                                    n > r
                                                        ? t
                                                            ? 1
                                                            : -1
                                                        : n < r
                                                            ? t
                                                                ? -1
                                                                : 1
                                                            : 0
                                                );
                                            },
                                            price: function(e, a) {
                                                return (
                                                    (t ? 1 : -1) *
                                                    (e.bid.toReal() -
                                                        a.bid.toReal())
                                                );
                                            },
                                            collateral: function(e, a) {
                                                return (
                                                    (t ? 1 : -1) *
                                                    (a.collateral -
                                                        e.collateral)
                                                );
                                            },
                                            debt: function(e, a) {
                                                return (
                                                    (t ? 1 : -1) *
                                                    (a.debt - e.debt)
                                                );
                                            },
                                            ratio: function(e, a) {
                                                return (
                                                    (t ? -1 : 1) *
                                                    (e.getRatio() -
                                                        a.getRatio())
                                                );
                                            }
                                        };
                                    return this.state.collateralBids.sort(
                                        a[this.state.collateralTableSort]
                                    );
                                }
                            },
                            {
                                key: "getGlobalSettlementPrice",
                                value: function() {
                                    if (!this.state.callOrders) return null;
                                    for (
                                        var e = null,
                                            t = null,
                                            a = this.state.callOrders.length,
                                            n = 0;
                                        n < a;
                                        n++
                                    ) {
                                        var l = this.state.callOrders[n];
                                        null == e
                                            ? ((e = l), (t = l.getRatio()))
                                            : l.getRatio() < t &&
                                              ((t = l.getRatio()), (e = l));
                                    }
                                    if (null == e) return null;
                                    var s = e.debt,
                                        o = e.collateral;
                                    return r.a.createElement(d.a, {
                                        base_amount: o,
                                        base_asset: e.call_price.base.asset_id,
                                        quote_amount: s,
                                        quote_asset: e.call_price.quote.asset_id
                                    });
                                }
                            },
                            {
                                key: "renderMarginPositions",
                                value: function(e, t, a) {
                                    var n = e.bitasset;
                                    if (
                                        !("feeds" in n) ||
                                        0 == n.feeds.length ||
                                        n.is_prediction_market
                                    )
                                        return null;
                                    var l = new Date().getTime(),
                                        s = new Date(
                                            l -
                                                1e3 *
                                                    e.bitasset.options
                                                        .feed_lifetime_sec
                                        ),
                                        c = n.feeds;
                                    if (
                                        !(c = c
                                            .filter(function(e) {
                                                return new Date(e[1][0]) > s;
                                            })
                                            .sort(function(e, t) {
                                                return (
                                                    new Date(t[1][0]) -
                                                    new Date(e[1][0])
                                                );
                                            })).length
                                    )
                                        return null;
                                    for (
                                        var u = [],
                                            p = c[0][1][1].settlement_price,
                                            b = c[0][1][1].core_exchange_rate,
                                            _ = r.a.createElement(
                                                "thead",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "left"
                                                            }
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.publisher"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.settlement_price"
                                                        }),
                                                        r.a.createElement(
                                                            "br",
                                                            null
                                                        ),
                                                        "(",
                                                        this.formattedPrice(
                                                            p,
                                                            !1,
                                                            !0
                                                        ),
                                                        ")"
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            },
                                                            className:
                                                                "column-hide-small"
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.core_exchange_rate"
                                                        }),
                                                        r.a.createElement(
                                                            "br",
                                                            null
                                                        ),
                                                        "(",
                                                        this.formattedPrice(
                                                            b,
                                                            !1,
                                                            !0
                                                        ),
                                                        ")"
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.maintenance_collateral_ratio"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.maximum_short_squeeze_ratio"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            },
                                                            className:
                                                                "column-hide-small"
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.published"
                                                        })
                                                    )
                                                )
                                            ),
                                            f = 0;
                                        f < c.length;
                                        f++
                                    ) {
                                        var g = c[f],
                                            E = g[0],
                                            y = new Date(g[1][0] + "Z"),
                                            v = g[1][1].settlement_price,
                                            k = g[1][1].core_exchange_rate,
                                            x =
                                                "" +
                                                g[1][1]
                                                    .maintenance_collateral_ratio /
                                                    1e3,
                                            w =
                                                "" +
                                                g[1][1]
                                                    .maximum_short_squeeze_ratio /
                                                    1e3;
                                        u.push(
                                            r.a.createElement(
                                                "tr",
                                                {key: E},
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(i.a, {
                                                        account: E
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    this.formattedPrice(v, !0)
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    this.formattedPrice(k, !0)
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    x
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    w
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    r.a.createElement(h.a, {
                                                        time: y
                                                    })
                                                )
                                            )
                                        );
                                    }
                                    var A = n.settlement_fund > 0,
                                        O = null,
                                        C = null;
                                    if (A) {
                                        var N = this.props.getDynamicObject(
                                            e.dynamic_asset_data_id
                                        );
                                        if (N) {
                                            var P = (N = N.toJS())
                                                ? N.current_supply
                                                : 0;
                                            this._analyzeBids(P);
                                        }
                                        (C = r.a.createElement(
                                            "thead",
                                            null,
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "name"
                                                        ),
                                                        style: {
                                                            textAlign: "left"
                                                        }
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.bidder"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "clickable column-hide-small",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "collateral"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.collateral"
                                                    }),
                                                    a.length && " (",
                                                    a.length &&
                                                        r.a.createElement(m.a, {
                                                            amount: 1,
                                                            asset:
                                                                a[0].bid.base
                                                                    .asset_id,
                                                            hide_amount: !0
                                                        }),
                                                    a.length && ")"
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "debt"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.borrow_amount"
                                                    }),
                                                    a.length && " (",
                                                    a.length &&
                                                        r.a.createElement(m.a, {
                                                            amount: 1,
                                                            asset:
                                                                a[0].bid.quote
                                                                    .asset_id,
                                                            hide_amount: !0
                                                        }),
                                                    a.length && ")"
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "clickable column-hide-small",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "price"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "explorer.asset.collateral_bid.bid"
                                                    }),
                                                    a.length && " (",
                                                    a.length &&
                                                        r.a.createElement(d.a, {
                                                            base_amount: 1,
                                                            base_asset:
                                                                a[0].bid.base
                                                                    .asset_id,
                                                            quote_amount: 1,
                                                            quote_asset:
                                                                a[0].bid.quote
                                                                    .asset_id,
                                                            hide_value: !0,
                                                            noPopOver: !0
                                                        }),
                                                    a.length && ")"
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "clickable column-hide-small",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "ratio"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "borrow.coll_ratio"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "borrow.considered_on_revival"
                                                    })
                                                )
                                            )
                                        )),
                                            (O = a.map(function(e) {
                                                var t = "no";
                                                return (
                                                    e.consideredIfRevived &&
                                                        (t =
                                                            1 ==
                                                            e.consideredIfRevived
                                                                ? "yes"
                                                                : 2 ==
                                                                  e.consideredIfRevived
                                                                    ? "partially"
                                                                    : "no"),
                                                    r.a.createElement(
                                                        "tr",
                                                        {
                                                            className:
                                                                "margin-row",
                                                            key: e.id
                                                        },
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                i.a,
                                                                {
                                                                    account:
                                                                        e.bidder
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "right"
                                                                },
                                                                className:
                                                                    "column-hide-small"
                                                            },
                                                            r.a.createElement(
                                                                m.a,
                                                                {
                                                                    amount:
                                                                        e.bid
                                                                            .base
                                                                            .amount,
                                                                    asset:
                                                                        e.bid
                                                                            .base
                                                                            .asset_id,
                                                                    hide_asset: !0
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "right"
                                                                },
                                                                className: ""
                                                            },
                                                            r.a.createElement(
                                                                m.a,
                                                                {
                                                                    amount:
                                                                        e.bid
                                                                            .quote
                                                                            .amount,
                                                                    asset:
                                                                        e.bid
                                                                            .quote
                                                                            .asset_id,
                                                                    hide_asset: !0
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "right",
                                                                    paddingRight: 10
                                                                },
                                                                className:
                                                                    "column-hide-small"
                                                            },
                                                            r.a.createElement(
                                                                d.a,
                                                                {
                                                                    base_amount:
                                                                        e.bid
                                                                            .base
                                                                            .amount,
                                                                    base_asset:
                                                                        e.bid
                                                                            .base
                                                                            .asset_id,
                                                                    quote_amount:
                                                                        e.bid
                                                                            .quote
                                                                            .amount,
                                                                    quote_asset:
                                                                        e.bid
                                                                            .quote
                                                                            .asset_id,
                                                                    hide_symbols: !0
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "right"
                                                                },
                                                                className:
                                                                    "column-hide-small"
                                                            },
                                                            e
                                                                .getRatio()
                                                                .toFixed(3)
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "right"
                                                                }
                                                            },
                                                            t
                                                        )
                                                    )
                                                );
                                            }));
                                    } else
                                        (C = r.a.createElement(
                                            "thead",
                                            null,
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "name"
                                                        ),
                                                        style: {
                                                            textAlign: "left"
                                                        }
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.borrower"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "clickable column-hide-small",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "collateral"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.collateral"
                                                    }),
                                                    this.state.callOrders
                                                        .length && " (",
                                                    this.state.callOrders
                                                        .length &&
                                                        r.a.createElement(m.a, {
                                                            amount: this.state.callOrders[0]
                                                                .getCollateral()
                                                                .getAmount(),
                                                            asset: this.state.callOrders[0].getCollateral()
                                                                .asset_id,
                                                            hide_amount: !0
                                                        }),
                                                    this.state.callOrders
                                                        .length && ")"
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "debt"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.borrow_amount"
                                                    }),
                                                    this.state.callOrders
                                                        .length && " (",
                                                    this.state.callOrders
                                                        .length &&
                                                        r.a.createElement(m.a, {
                                                            amount: this.state.callOrders[0]
                                                                .amountToReceive()
                                                                .getAmount(),
                                                            asset: this.state.callOrders[0].amountToReceive()
                                                                .asset_id,
                                                            hide_amount: !0
                                                        }),
                                                    this.state.callOrders
                                                        .length && ")"
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "clickable  column-hide-small",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "price"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content: "exchange.call"
                                                    }),
                                                    this.state.callOrders
                                                        .length && " (",
                                                    this.state.callOrders
                                                        .length &&
                                                        r.a.createElement(d.a, {
                                                            base_amount: this
                                                                .state
                                                                .callOrders[0]
                                                                .call_price.base
                                                                .amount,
                                                            base_asset: this
                                                                .state
                                                                .callOrders[0]
                                                                .call_price.base
                                                                .asset_id,
                                                            quote_amount: this
                                                                .state
                                                                .callOrders[0]
                                                                .call_price
                                                                .quote.amount,
                                                            quote_asset: this
                                                                .state
                                                                .callOrders[0]
                                                                .call_price
                                                                .quote.asset_id,
                                                            hide_value: !0,
                                                            noPopOver: !0
                                                        }),
                                                    this.state.callOrders
                                                        .length && ")"
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "borrow.coll_ratio_target"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "ratio"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "borrow.coll_ratio"
                                                    })
                                                )
                                            )
                                        )),
                                            (O = t.map(function(e) {
                                                return r.a.createElement(
                                                    "tr",
                                                    {
                                                        className: "margin-row",
                                                        key: e.id
                                                    },
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(i.a, {
                                                            account: e.borrower
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            },
                                                            className:
                                                                "column-hide-small"
                                                        },
                                                        r.a.createElement(m.a, {
                                                            amount:
                                                                e.collateral,
                                                            asset: e.getCollateral()
                                                                .asset_id,
                                                            hide_asset: !0
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        r.a.createElement(m.a, {
                                                            amount: e.debt,
                                                            asset: e.amountToReceive()
                                                                .asset_id,
                                                            hide_asset: !0
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right",
                                                                paddingRight: 10
                                                            },
                                                            className:
                                                                "column-hide-small"
                                                        },
                                                        r.a.createElement(d.a, {
                                                            base_amount:
                                                                e.call_price
                                                                    .base
                                                                    .amount,
                                                            base_asset:
                                                                e.call_price
                                                                    .base
                                                                    .asset_id,
                                                            quote_amount:
                                                                e.call_price
                                                                    .quote
                                                                    .amount,
                                                            quote_asset:
                                                                e.call_price
                                                                    .quote
                                                                    .asset_id,
                                                            hide_symbols: !0
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right",
                                                                paddingRight: 10
                                                            },
                                                            className:
                                                                "column-hide-small"
                                                        },
                                                        e.order
                                                            .target_collateral_ratio
                                                            ? (
                                                                  e.order
                                                                      .target_collateral_ratio /
                                                                  1e3
                                                              ).toFixed(3)
                                                            : "-"
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            className: e.getStatus(),
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        e.getRatio().toFixed(3)
                                                    )
                                                );
                                            }));
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className: "grid-block",
                                            style: {paddingBottom: "1rem"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-content no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: ""},
                                                r.a.createElement(
                                                    $.b,
                                                    {
                                                        defaultActiveTab: 0,
                                                        segmented: !1,
                                                        setting:
                                                            "bitassetDataTabs"
                                                    },
                                                    r.a.createElement(
                                                        $.a,
                                                        {
                                                            title:
                                                                "explorer.asset.price_feed_data.title"
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    " table order-table table-hover",
                                                                style: {
                                                                    padding:
                                                                        "1.2rem"
                                                                }
                                                            },
                                                            _,
                                                            r.a.createElement(
                                                                "tbody",
                                                                null,
                                                                u
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        $.a,
                                                        {
                                                            title: A
                                                                ? "explorer.asset.collateral_bid.title"
                                                                : "explorer.asset.margin_positions.title"
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    " table order-table table-hover",
                                                                style: {
                                                                    padding:
                                                                        "1.2rem"
                                                                }
                                                            },
                                                            C,
                                                            r.a.createElement(
                                                                "tbody",
                                                                null,
                                                                O
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.asset.toJS(),
                                        t = this.getMarginPositions(),
                                        a = this.getCollateralBids(),
                                        n =
                                            "bitasset" in e
                                                ? this.renderPriceFeed(e)
                                                : null,
                                        l =
                                            "bitasset" in e
                                                ? this.renderMarginPositions(
                                                      e,
                                                      t,
                                                      a
                                                  )
                                                : null;
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-container asset-page"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block page-layout"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block main-content wrap"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block medium-up-1",
                                                        style: {width: "100%"}
                                                    },
                                                    this.renderAboutBox(
                                                        e,
                                                        this.props.asset
                                                    )
                                                ),
                                                r.a.createElement(
                                                    $.b,
                                                    {
                                                        setting:
                                                            "assetDataTabs",
                                                        className:
                                                            "grid-block vertical",
                                                        tabsClass:
                                                            "bordered-header content-block",
                                                        contentClass:
                                                            "tab-no-background",
                                                        segmented: !1
                                                    },
                                                    r.a.createElement(
                                                        $.a,
                                                        {
                                                            title:
                                                                "explorer.asset.info"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-block vertical large-horizontal medium-up-1 large-up-2",
                                                                style: {
                                                                    paddingTop:
                                                                        "1rem"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grid-content small-no-padding"
                                                                },
                                                                this.renderSummary(
                                                                    e
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grid-content small-no-padding"
                                                                },
                                                                this.renderPermissions(
                                                                    e
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grid-content small-no-padding"
                                                                },
                                                                this.renderFeePool(
                                                                    e
                                                                )
                                                            ),
                                                            n
                                                                ? r.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "grid-content small-no-padding"
                                                                      },
                                                                      this.renderPriceFeed(
                                                                          e
                                                                      )
                                                                  )
                                                                : null,
                                                            n
                                                                ? r.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "grid-content small-no-padding"
                                                                      },
                                                                      this.renderSettlement(
                                                                          e
                                                                      )
                                                                  )
                                                                : null,
                                                            this.state
                                                                .showCollateralBidInInfo
                                                                ? r.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "grid-content small-no-padding"
                                                                      },
                                                                      this.renderCollateralBid(
                                                                          e
                                                                      )
                                                                  )
                                                                : null
                                                        ),
                                                        l || null
                                                    ),
                                                    r.a.createElement(
                                                        $.a,
                                                        {
                                                            title:
                                                                "explorer.asset.actions"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-block vertical large-horizontal medium-up-1 large-up-2",
                                                                style: {
                                                                    paddingTop:
                                                                        "1rem"
                                                                }
                                                            },
                                                            this.renderFeePoolFunding(
                                                                e
                                                            ),
                                                            this.renderFeePoolClaiming(
                                                                e
                                                            ),
                                                            this.renderFeesClaiming(
                                                                e
                                                            ),
                                                            this.renderAssetOwnerUpdate(
                                                                e
                                                            ),
                                                            "bitasset" in e &&
                                                            !e.bitasset
                                                                .is_prediction_market
                                                                ? this.renderFeedPublish(
                                                                      e
                                                                  )
                                                                : null,
                                                            a.length > 0 &&
                                                                this.renderCollateralBid(
                                                                    e
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
            (ie = Object(q.a)(ie, {
                listenTo: function() {
                    return [R.a];
                },
                getProps: function() {
                    return {
                        currentAccount:
                            R.a.getState().currentAccount ||
                            R.a.getState().passwordAccount
                    };
                }
            })),
                (ie = Object(u.a)(ie, {propNames: ["backingAsset"]}));
            var ce = (function(e) {
                function t() {
                    return (
                        ne(this, t),
                        re(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    le(t, r.a.Component),
                    te(t, [
                        {
                            key: "render",
                            value: function() {
                                if (null === this.props.asset)
                                    return r.a.createElement(x.a, {
                                        subtitle: "asset_not_found_subtitle"
                                    });
                                var e = this.props.asset.has("bitasset")
                                    ? this.props.asset.getIn([
                                          "bitasset",
                                          "options",
                                          "short_backing_asset"
                                      ])
                                    : "1.3.0";
                                return r.a.createElement(
                                    ie,
                                    ee({}, this.props, {backingAsset: e})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            ce = Object(u.a)(ce, {withDynamic: !0});
            var ue = (function(e) {
                function t() {
                    return (
                        ne(this, t),
                        re(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    le(t, r.a.Component),
                    te(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.match.params.symbol.toUpperCase();
                                return r.a.createElement(
                                    ce,
                                    ee({}, this.props, {asset: e})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = ue;
        }
    }
]);
//# sourceMappingURL=asset.js.map
