(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        2052: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(31),
                i = n(11),
                c = n.n(i),
                l = n(3),
                s = n.n(l),
                u = n(6),
                f = n.n(u),
                p = n(43),
                m = n(98),
                y = n(283),
                h = n(573),
                _ = n(399),
                d = n(37),
                b = n(2),
                v = n.n(b),
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
            var k = (function(e) {
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
                                    ("object" != typeof t &&
                                        "function" != typeof t)
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
                        })(t, a["Component"]),
                        g(t, [
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    e.claim_account_name &&
                                        this.onClaimAccount(
                                            e.claim_account_name,
                                            e.checked
                                        );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this;
                                    if (
                                        void 0 === this.props.balances ||
                                        !this.props.total_by_account_asset.size
                                    )
                                        return r.a.createElement("div", null);
                                    var t = -1;
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                            "table",
                                            {className: "table"},
                                            r.a.createElement(
                                                "thead",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "th",
                                                        null
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "center"
                                                            }
                                                        },
                                                        r.a.createElement(v.a, {
                                                            content:
                                                                "wallet.unclaimed"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "center"
                                                            }
                                                        },
                                                        r.a.createElement(v.a, {
                                                            content:
                                                                "wallet.unclaimed_vesting"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "center"
                                                            }
                                                        },
                                                        r.a.createElement(v.a, {
                                                            content:
                                                                "account.name"
                                                        })
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                this.props.total_by_account_asset
                                                    .map(function(n, a) {
                                                        return r.a.createElement(
                                                            "tr",
                                                            {key: ++t},
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                r.a.createElement(
                                                                    "input",
                                                                    {
                                                                        type:
                                                                            "checkbox",
                                                                        checked: !!e.props.checked.get(
                                                                            t
                                                                        ),
                                                                        onChange: e.onCheckbox.bind(
                                                                            e,
                                                                            t,
                                                                            n.balances
                                                                        )
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                n.unclaimed
                                                                    ? r.a.createElement(
                                                                          d.a,
                                                                          {
                                                                              color:
                                                                                  "info",
                                                                              amount:
                                                                                  n.unclaimed,
                                                                              asset: a.get(
                                                                                  1
                                                                              )
                                                                          }
                                                                      )
                                                                    : null
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                n.vesting
                                                                    .unclaimed
                                                                    ? r.a.createElement(
                                                                          "div",
                                                                          null,
                                                                          r.a.createElement(
                                                                              d.a,
                                                                              {
                                                                                  color:
                                                                                      "info",
                                                                                  amount:
                                                                                      n
                                                                                          .vesting
                                                                                          .unclaimed,
                                                                                  hide_asset: !0,
                                                                                  asset: a.get(
                                                                                      1
                                                                                  )
                                                                              }
                                                                          ),
                                                                          r.a.createElement(
                                                                              "span",
                                                                              null,
                                                                              " of "
                                                                          ),
                                                                          r.a.createElement(
                                                                              d.a,
                                                                              {
                                                                                  color:
                                                                                      "info",
                                                                                  amount:
                                                                                      n
                                                                                          .vesting
                                                                                          .total,
                                                                                  asset: a.get(
                                                                                      1
                                                                                  )
                                                                              }
                                                                          )
                                                                      )
                                                                    : null
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                " ",
                                                                a.get(0),
                                                                " "
                                                            )
                                                        );
                                                    })
                                                    .toArray()
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "onCheckbox",
                                value: function(e, t) {
                                    var n = this.props.checked;
                                    (n = n.get(e) ? n.delete(e) : n.set(e, t)),
                                        _.a.setSelectedBalanceClaims(n);
                                }
                            },
                            {
                                key: "onClaimAccount",
                                value: function(e, t) {
                                    if (!t.size) {
                                        var n = -1;
                                        this.props.total_by_account_asset.forEach(
                                            function(a, r) {
                                                n++,
                                                    r.get(0) === e &&
                                                        (a.unclaimed ||
                                                            a.vesting
                                                                .unclaimed) &&
                                                        (t = t.set(
                                                            n,
                                                            a.balances
                                                        ));
                                            }
                                        ),
                                            t.size &&
                                                _.a.setSelectedBalanceClaims(t);
                                    }
                                }
                            }
                        ]),
                        t
                    );
                })(),
                E = (k = Object(o.a)(k, {
                    listenTo: function() {
                        return [h.a];
                    },
                    getProps: function() {
                        var e = h.a.getState(),
                            t = e.balances,
                            n = e.address_to_pubkey,
                            a = m.a.getState().keys,
                            r = c.a.Map().asMutable();
                        return (
                            t &&
                                (e.total_by_account_asset = t
                                    .groupBy(function(e) {
                                        var t = "",
                                            o = n.get(e.owner),
                                            i = a.get(o);
                                        i &&
                                            i.import_account_names &&
                                            (t = i.import_account_names.join(
                                                ", "
                                            ));
                                        var l = Math.ceil(
                                            (function(e, t) {
                                                var n = r.get(e);
                                                return (
                                                    n ||
                                                        ((n = c.a
                                                            .Set()
                                                            .asMutable()),
                                                        r.set(e, n)),
                                                    n.add(t),
                                                    n.size
                                                );
                                            })(
                                                c.a.List([
                                                    t,
                                                    e.balance.asset_id
                                                ]),
                                                e.owner
                                            ) / 60
                                        );
                                        return c.a.List([
                                            t,
                                            e.balance.asset_id,
                                            l
                                        ]);
                                    })
                                    .map(function(e) {
                                        return e.reduce(
                                            function(e, t) {
                                                return (
                                                    (t.public_key_string = n.get(
                                                        t.owner
                                                    )),
                                                    (e.balances = e.balances.add(
                                                        t
                                                    )),
                                                    void 0 != t.vested_balance
                                                        ? ((e.vesting.unclaimed += Number(
                                                              t.vested_balance
                                                                  .amount
                                                          )),
                                                          (e.vesting.total += Number(
                                                              t.balance.amount
                                                          )))
                                                        : (e.unclaimed += Number(
                                                              t.balance.amount
                                                          )),
                                                    e
                                                );
                                            },
                                            {
                                                unclaimed: 0,
                                                vesting: {
                                                    unclaimed: 0,
                                                    total: 0
                                                },
                                                balances: c.a.Set()
                                            }
                                        );
                                    })
                                    .sortBy(function(e) {
                                        return e;
                                    })),
                            e
                        );
                    }
                })),
                w = n(65),
                O = n(24),
                C = n(42),
                S = n(171),
                j = n(49),
                x = n(1),
                P = n.n(x),
                N = (function() {
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
            var A = (function(e) {
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
                    })(t, a["Component"]),
                    N(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.accounts
                                    .filter(function(e) {
                                        return !!e;
                                    })
                                    .filter(function(e) {
                                        return O.a.isMyAccount(e);
                                    })
                                    .map(function(e) {
                                        return e.get("name");
                                    })
                                    .sort();
                                return r.a.createElement(
                                    "span",
                                    null,
                                    r.a.createElement(S.a, {
                                        onChange: this.onAccountSelect.bind(
                                            this
                                        ),
                                        account_names: e,
                                        center: !0
                                    })
                                );
                            }
                        },
                        {
                            key: "onAccountSelect",
                            value: function(e) {
                                this.props.onChange(e);
                            }
                        }
                    ]),
                    t
                );
            })();
            A.propTypes = {
                accounts: C.a.ChainAccountsList.isRequired,
                onChange: P.a.func.isRequired
            };
            var T = Object(j.a)(A),
                B = n(10),
                I = (function() {
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
            var K = (function(e) {
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
                    })(t, a["Component"]),
                    I(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                var e = m.a.getState().keys.keySeq();
                                _.a.setPubkeys(e), (this.existing_keys = e);
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = m.a.getState().keys.keySeq();
                                t.equals(this.existing_keys) ||
                                    ((this.existing_keys = t),
                                    _.a.setPubkeys(t));
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                if (!this.props.account_refs.size)
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                            "h5",
                                            null,
                                            r.a.createElement(v.a, {
                                                content: "wallet.no_balance"
                                            })
                                        )
                                    );
                                if (this.props.loading)
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement("br", null),
                                        r.a.createElement(
                                            "h5",
                                            null,
                                            r.a.createElement(v.a, {
                                                content:
                                                    "wallet.loading_balances"
                                            }),
                                            "…"
                                        ),
                                        r.a.createElement("br", null),
                                        r.a.createElement(p.a, {
                                            type: "three-bounce"
                                        })
                                    );
                                if (
                                    !this.props.balances ||
                                    !this.props.balances.size
                                )
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement("br", null),
                                        r.a.createElement(
                                            "h5",
                                            null,
                                            r.a.createElement(v.a, {
                                                content: "wallet.no_balance"
                                            })
                                        )
                                    );
                                var e =
                                        this.props.selected_balances.size &&
                                        this.props.claim_account_name,
                                    t = e
                                        ? " (" +
                                          this.props.claim_account_name +
                                          ")"
                                        : null;
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "content-block center-content"
                                        },
                                        r.a.createElement(
                                            "h3",
                                            {className: "no-border-bottom"},
                                            r.a.createElement(v.a, {
                                                content: "wallet.claim_balances"
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {className: "grid-block vertical"},
                                        r.a.createElement(
                                            "div",
                                            {
                                                className: "grid-content",
                                                style: {
                                                    overflowY:
                                                        "hidden !important"
                                                }
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "full-width-content center-content"
                                                },
                                                r.a.createElement(T, {
                                                    key: this.props.balances,
                                                    accounts: c.a.List(
                                                        this.props.account_refs
                                                    ),
                                                    onChange: this.onClaimAccountChange.bind(
                                                        this
                                                    )
                                                })
                                            ),
                                            r.a.createElement("br", null)
                                        ),
                                        r.a.createElement("br", null),
                                        r.a.createElement(E, null)
                                    ),
                                    r.a.createElement("br", null),
                                    r.a.createElement("br", null),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: s()("button success", {
                                                disabled: !e
                                            }),
                                            onClick: this.onClaimBalance.bind(
                                                this
                                            )
                                        },
                                        r.a.createElement(v.a, {
                                            content: "wallet.claim_balance"
                                        }),
                                        t
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: "button cancel",
                                            onClick: this.onBack.bind(this)
                                        },
                                        r.a.createElement(v.a, {
                                            content: "wallet.cancel"
                                        })
                                    )
                                );
                            }
                        },
                        {
                            key: "onBack",
                            value: function(e) {
                                e.preventDefault(), window.history.back();
                            }
                        },
                        {
                            key: "onClaimAccountChange",
                            value: function(e) {
                                _.a.claimAccountChange(e);
                            }
                        },
                        {
                            key: "onClaimBalance",
                            value: function() {
                                w.a
                                    .importBalance(
                                        this.props.claim_account_name,
                                        this.props.selected_balances,
                                        !0
                                    )
                                    .catch(function(e) {
                                        console.error("claimBalance", e);
                                        var t = e;
                                        try {
                                            t = e.data.message;
                                        } catch (e) {}
                                        throw (B.Notification.error({
                                            message: f.a.translate(
                                                "notifications.balance_claim_error",
                                                {error_msg: t}
                                            )
                                        }),
                                        e);
                                    });
                            }
                        }
                    ]),
                    t
                );
            })();
            K = Object(o.a)(K, {
                listenTo: function() {
                    return [h.a, y.a, m.a];
                },
                getProps: function() {
                    var e = h.a.getState();
                    return (e.account_refs = y.a.getAccountRefs()), e;
                }
            });
            t.a = K;
        },
        2068: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(31),
                i = n(3),
                c = n.n(i),
                l = n(5),
                s = n(14),
                u = n(98),
                f = n(47),
                p = n(576),
                m = n(43),
                y = n(2),
                h = n.n(y),
                _ = n(6),
                d = n.n(_),
                b = n(2052),
                v = n(399),
                g = n(573),
                k = n(37),
                E = (function() {
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
            var w = (function(e) {
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
                                    ("object" != typeof t &&
                                        "function" != typeof t)
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
                        })(t, a["Component"]),
                        E(t, [
                            {
                                key: "render",
                                value: function() {
                                    if (void 0 === this.props.balances)
                                        return r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(h.a, {
                                                content:
                                                    "wallet.loading_balances"
                                            }),
                                            "…"
                                        );
                                    var e = this.props.balances
                                        .groupBy(function(e) {
                                            return e.balance.asset_id;
                                        })
                                        .map(function(e) {
                                            return e.reduce(function(e, t) {
                                                return (
                                                    e + Number(t.balance.amount)
                                                );
                                            }, 0);
                                        });
                                    return e.size
                                        ? r.a.createElement(
                                              "div",
                                              null,
                                              e
                                                  .map(function(e, t) {
                                                      return r.a.createElement(
                                                          "div",
                                                          {key: t},
                                                          r.a.createElement(
                                                              k.a,
                                                              {
                                                                  color: "info",
                                                                  amount: e,
                                                                  asset: t
                                                              }
                                                          )
                                                      );
                                                  })
                                                  .toArray()
                                          )
                                        : r.a.createElement(
                                              "div",
                                              null,
                                              "None"
                                          );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                O = (w = Object(o.a)(w, {
                    listenTo: function() {
                        return [g.a];
                    },
                    getProps: function() {
                        return g.a.getState();
                    }
                })),
                C = n(20),
                S = n(29),
                j = n(92),
                x = (function() {
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
            var P = (function(e) {
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
                            (e.state = e._getInitialState()),
                            e._export("importing"),
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
                        })(t, j["a"]),
                        x(t, [
                            {
                                key: "_getInitialState",
                                value: function() {
                                    return {importing: !1};
                                }
                            },
                            {
                                key: "importing",
                                value: function(e) {
                                    this.setState({importing: e});
                                }
                            }
                        ]),
                        t
                    );
                })(),
                N = S.a.createStore(P, "ImportKeysStore"),
                A = n(10),
                T = n(2300),
                B = (function() {
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
            n(2302);
            var I = function(e) {
                    var t = e.key_count;
                    return t
                        ? r.a.createElement(
                              "span",
                              null,
                              "Found ",
                              t,
                              " private keys"
                          )
                        : r.a.createElement("span", null);
                },
                K = (function(e) {
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
                            (e.state = e._getInitialState()),
                            (e._renderBalanceClaims = e._renderBalanceClaims.bind(
                                e
                            )),
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
                        })(t, a["Component"]),
                        B(t, [
                            {
                                key: "_getInitialState",
                                value: function() {
                                    return {
                                        keys_to_account: {},
                                        no_file: !0,
                                        account_keys: [],
                                        reset_file_name:
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0] &&
                                            arguments[0]
                                                ? this.state.reset_file_name
                                                : Date.now(),
                                        reset_password: Date.now(),
                                        password_checksum: null,
                                        import_file_message: null,
                                        import_password_message: null,
                                        imported_keys_public: {},
                                        key_text_message: null,
                                        genesis_filtering: !1,
                                        genesis_filter_status: [],
                                        genesis_filter_finished: void 0,
                                        importSuccess: !1
                                    };
                                }
                            },
                            {
                                key: "reset",
                                value: function(e, t) {
                                    var n = this;
                                    e && e.preventDefault();
                                    var a = this._getInitialState(t);
                                    this.setState(a, function() {
                                        return n.updateOnChange();
                                    });
                                }
                            },
                            {
                                key: "onWif",
                                value: function(e) {
                                    e.preventDefault();
                                    var t = this.refs.wifInput.value;
                                    this.addByPattern(t);
                                }
                            },
                            {
                                key: "onCancel",
                                value: function(e) {
                                    e && e.preventDefault(),
                                        this.setState(this._getInitialState());
                                }
                            },
                            {
                                key: "updateOnChange",
                                value: function() {
                                    v.a.setPubkeys(
                                        Object.keys(
                                            this.state.imported_keys_public
                                        )
                                    );
                                }
                            },
                            {
                                key: "getImportAccountKeyCount",
                                value: function(e) {
                                    var t = {},
                                        n = !1;
                                    for (var a in e) {
                                        var r = !0,
                                            o = !1,
                                            i = void 0;
                                        try {
                                            for (
                                                var c,
                                                    l = e[a].account_names[
                                                        Symbol.iterator
                                                    ]();
                                                !(r = (c = l.next()).done);
                                                r = !0
                                            ) {
                                                var s = c.value;
                                                (t[s] = (t[s] || 0) + 1),
                                                    (n = !0);
                                            }
                                        } catch (e) {
                                            (o = !0), (i = e);
                                        } finally {
                                            try {
                                                !r && l.return && l.return();
                                            } finally {
                                                if (o) throw i;
                                            }
                                        }
                                    }
                                    return n ? t : null;
                                }
                            },
                            {
                                key: "upload",
                                value: function(e) {
                                    var t = this;
                                    this.reset(null, !0);
                                    var n = e.target.files[0],
                                        a = new FileReader();
                                    (a.onload = function(e) {
                                        var a = e.target.result;
                                        try {
                                            var r = void 0;
                                            try {
                                                (r = JSON.parse(a)),
                                                    t._parseImportKeyUpload(
                                                        r,
                                                        n.name,
                                                        function(e) {
                                                            t.setState(
                                                                e,
                                                                function() {
                                                                    e.genesis_filter_finished &&
                                                                        t._passwordCheck();
                                                                }
                                                            );
                                                        }
                                                    );
                                            } catch (e) {
                                                try {
                                                    r || n.name,
                                                        t._parseWalletJson(r);
                                                } catch (e) {
                                                    if (!t.addByPattern(a))
                                                        throw e;
                                                }
                                                t._passwordCheck();
                                            }
                                        } catch (e) {
                                            console.error(
                                                "... ImportKeys upload error",
                                                e
                                            ),
                                                t.setState({
                                                    import_file_message: e
                                                });
                                        }
                                    }),
                                        a.readAsText(n);
                                }
                            },
                            {
                                key: "_parseImportKeyUpload",
                                value: function(e, t, n) {
                                    var a = this,
                                        r = void 0,
                                        o = void 0;
                                    try {
                                        if (!(r = e.password_checksum))
                                            throw t +
                                                " is an unrecognized format";
                                        if (!Array.isArray(e.account_keys))
                                            throw t +
                                                " is an unrecognized format";
                                        o = e.account_keys;
                                    } catch (e) {
                                        throw e.message || e;
                                    }
                                    var i = new T.a();
                                    i.isAvailable()
                                        ? this.setState(
                                              {genesis_filter_initalizing: !0},
                                              function() {
                                                  return i.init(function() {
                                                      var e =
                                                              a.state
                                                                  .genesis_filter_status,
                                                          t = o;
                                                      i.filter(t, function(a) {
                                                          if (
                                                              "missing_public_keys" ===
                                                              a.error
                                                          )
                                                              return (
                                                                  console.error(
                                                                      "un-released format, just for testing"
                                                                  ),
                                                                  void n({
                                                                      password_checksum: r,
                                                                      account_keys: o,
                                                                      genesis_filter_finished: !0,
                                                                      genesis_filtering: !1
                                                                  })
                                                              );
                                                          if (a.success)
                                                              n({
                                                                  password_checksum: r,
                                                                  account_keys: t,
                                                                  genesis_filter_finished: !0,
                                                                  genesis_filtering: !1
                                                              });
                                                          else if (
                                                              void 0 ===
                                                              a.initalizing
                                                          )
                                                              if (
                                                                  void 0 !==
                                                                  a.importing
                                                              ) {
                                                                  if (e.length)
                                                                      e[
                                                                          e.length -
                                                                              1
                                                                      ]
                                                                          .account_name ===
                                                                      a.account_name
                                                                          ? (e[
                                                                                e.length -
                                                                                    1
                                                                            ] = a)
                                                                          : e.push(
                                                                                a
                                                                            );
                                                                  else
                                                                      e.push(a);
                                                                  n({
                                                                      genesis_filter_status: e
                                                                  });
                                                              } else
                                                                  console.error(
                                                                      "unknown status",
                                                                      a
                                                                  );
                                                          else
                                                              n({
                                                                  genesis_filter_initalizing:
                                                                      a.initalizing,
                                                                  genesis_filtering: !0
                                                              });
                                                      });
                                                  });
                                              }
                                          )
                                        : n({
                                              password_checksum: r,
                                              account_keys: o,
                                              genesis_filter_finished: !0,
                                              genesis_filtering: !1
                                          });
                                }
                            },
                            {
                                key: "_parseWalletJson",
                                value: function(e) {
                                    var t = void 0,
                                        n = void 0,
                                        a = {},
                                        r = {},
                                        o = function(e, t) {
                                            e =
                                                s.ChainConfig.address_prefix +
                                                e.substring(3);
                                            var n = l.PublicKey.fromPublicKeyString(
                                                    e
                                                ).toAddressString(),
                                                a = r[t] || [];
                                            (n = "CTS" + n.substring(3)),
                                                a.push(n),
                                                (r[t] = a);
                                        };
                                    try {
                                        if (!Array.isArray(e))
                                            throw new Error(
                                                "Invalid wallet format"
                                            );
                                        var i = !0,
                                            c = !1,
                                            u = void 0;
                                        try {
                                            for (
                                                var f, p = e[Symbol.iterator]();
                                                !(i = (f = p.next()).done);
                                                i = !0
                                            ) {
                                                var m = f.value;
                                                if (
                                                    "key_record_type" ==
                                                        m.type &&
                                                    m.data.account_address &&
                                                    m.data.encrypted_private_key
                                                ) {
                                                    var y =
                                                            m.data
                                                                .account_address,
                                                        h = a[y] || [];
                                                    h.push(
                                                        m.data
                                                            .encrypted_private_key
                                                    ),
                                                        (a[y] = h);
                                                } else if (
                                                    "account_record_type" !=
                                                    m.type
                                                )
                                                    if (
                                                        "property_record_type" !=
                                                            m.type ||
                                                        "encrypted_brainkey" !=
                                                            m.data.key
                                                    ) {
                                                        if (
                                                            "master_key_record_type" ==
                                                            m.type
                                                        ) {
                                                            if (!m.data)
                                                                throw file.name +
                                                                    " invalid master_key_record record";
                                                            if (
                                                                !m.data.checksum
                                                            )
                                                                throw file.name +
                                                                    " is missing master_key_record checksum";
                                                            t = m.data.checksum;
                                                        }
                                                    } else n = m.data.value;
                                                else {
                                                    var _ = m.data.name;
                                                    o(m.data.owner_key, _);
                                                    var d = !0,
                                                        b = !1,
                                                        v = void 0;
                                                    try {
                                                        for (
                                                            var g,
                                                                k = m.data.active_key_history[
                                                                    Symbol
                                                                        .iterator
                                                                ]();
                                                            !(d = (g = k.next())
                                                                .done);
                                                            d = !0
                                                        ) {
                                                            o(g.value[1], _);
                                                        }
                                                    } catch (e) {
                                                        (b = !0), (v = e);
                                                    } finally {
                                                        try {
                                                            !d &&
                                                                k.return &&
                                                                k.return();
                                                        } finally {
                                                            if (b) throw v;
                                                        }
                                                    }
                                                }
                                            }
                                        } catch (e) {
                                            (c = !0), (u = e);
                                        } finally {
                                            try {
                                                !i && p.return && p.return();
                                            } finally {
                                                if (c) throw u;
                                            }
                                        }
                                        if (!n)
                                            throw "Please use a CTS 1.0 wallet_export_keys file instead";
                                        if (!t)
                                            throw file.name +
                                                " is missing password_checksum";
                                        if (!enckeys.length)
                                            throw file.name +
                                                " does not contain any private keys";
                                    } catch (e) {
                                        throw e.message || e;
                                    }
                                    var E = [];
                                    for (var w in r) {
                                        var O = [],
                                            C = !0,
                                            S = !1,
                                            j = void 0;
                                        try {
                                            for (
                                                var x,
                                                    P = r[w][Symbol.iterator]();
                                                !(C = (x = P.next()).done);
                                                C = !0
                                            ) {
                                                var N = a[x.value];
                                                if (N) {
                                                    var A = !0,
                                                        T = !1,
                                                        B = void 0;
                                                    try {
                                                        for (
                                                            var I,
                                                                K = N[
                                                                    Symbol
                                                                        .iterator
                                                                ]();
                                                            !(A = (I = K.next())
                                                                .done);
                                                            A = !0
                                                        ) {
                                                            var R = I.value;
                                                            O.push(R);
                                                        }
                                                    } catch (e) {
                                                        (T = !0), (B = e);
                                                    } finally {
                                                        try {
                                                            !A &&
                                                                K.return &&
                                                                K.return();
                                                        } finally {
                                                            if (T) throw B;
                                                        }
                                                    }
                                                }
                                            }
                                        } catch (e) {
                                            (S = !0), (j = e);
                                        } finally {
                                            try {
                                                !C && P.return && P.return();
                                            } finally {
                                                if (S) throw j;
                                            }
                                        }
                                        E.push({
                                            account_name: w,
                                            encrypted_private_keys: O
                                        });
                                    }
                                    this.setState({
                                        password_checksum: t,
                                        account_keys: E
                                    });
                                }
                            },
                            {
                                key: "_passwordCheck",
                                value: function(e) {
                                    var t = this;
                                    e &&
                                        "preventDefault" in e &&
                                        e.preventDefault();
                                    var n = this.refs.password,
                                        a = n ? n.value : "";
                                    if (
                                        this.state.password_checksum !=
                                        l.hash
                                            .sha512(l.hash.sha512(a))
                                            .toString("hex")
                                    )
                                        return this.setState({
                                            no_file: !1,
                                            import_password_message: a.length
                                                ? "Incorrect password"
                                                : null
                                        });
                                    this.setState(
                                        {
                                            no_file: !1,
                                            reset_password: Date.now(),
                                            import_password_message: d.a.translate(
                                                "wallet.import_pass_match"
                                            )
                                        },
                                        function() {
                                            return t._decryptPrivateKeys(a);
                                        }
                                    );
                                }
                            },
                            {
                                key: "_decryptPrivateKeys",
                                value: function(e) {
                                    var t = this,
                                        n = l.Aes.fromSeed(e),
                                        a = !0,
                                        r = !0,
                                        o = !1,
                                        i = void 0;
                                    try {
                                        for (
                                            var c,
                                                u = this.state.account_keys[
                                                    Symbol.iterator
                                                ]();
                                            !(r = (c = u.next()).done);
                                            r = !0
                                        ) {
                                            var f = c.value;
                                            if (f.encrypted_private_keys)
                                                for (
                                                    var p = f.account_name.trim(),
                                                        m = new RegExp(
                                                            "^" +
                                                                s.ChainConfig
                                                                    .address_prefix
                                                        ),
                                                        y = 0;
                                                    y <
                                                    f.encrypted_private_keys
                                                        .length;
                                                    y++
                                                ) {
                                                    var h =
                                                            f
                                                                .encrypted_private_keys[
                                                                y
                                                            ],
                                                        _ = f.public_keys
                                                            ? f.public_keys[y]
                                                            : null;
                                                    try {
                                                        var b = n.decryptHex(h);
                                                        if (_)
                                                            m.test(_) ||
                                                                (_ =
                                                                    s
                                                                        .ChainConfig
                                                                        .address_prefix +
                                                                    _.substring(
                                                                        3
                                                                    ));
                                                        else
                                                            _ = l.PrivateKey.fromHex(
                                                                b
                                                            )
                                                                .toPublicKey()
                                                                .toPublicKeyString();
                                                        this.state.imported_keys_public[
                                                            _
                                                        ] = !0;
                                                        var v = (
                                                                this.state
                                                                    .keys_to_account[
                                                                    b
                                                                ] || {
                                                                    account_names: []
                                                                }
                                                            ).account_names,
                                                            g = !1,
                                                            k = !0,
                                                            E = !1,
                                                            w = void 0;
                                                        try {
                                                            for (
                                                                var O,
                                                                    C = v[
                                                                        Symbol
                                                                            .iterator
                                                                    ]();
                                                                !(k = (O = C.next())
                                                                    .done);
                                                                k = !0
                                                            ) {
                                                                O.value == p &&
                                                                    (g = !0);
                                                            }
                                                        } catch (e) {
                                                            (E = !0), (w = e);
                                                        } finally {
                                                            try {
                                                                !k &&
                                                                    C.return &&
                                                                    C.return();
                                                            } finally {
                                                                if (E) throw w;
                                                            }
                                                        }
                                                        if (g) continue;
                                                        v.push(p),
                                                            (this.state.keys_to_account[
                                                                b
                                                            ] = {
                                                                account_names: v,
                                                                public_key_string: _
                                                            });
                                                    } catch (e) {
                                                        console.log(e, e.stack);
                                                        var S = e.message || e;
                                                        A.Notification.error({
                                                            message: d.a.translate(
                                                                "notifications.import_keys_error",
                                                                {
                                                                    account_name: p,
                                                                    error_msg: S
                                                                }
                                                            )
                                                        });
                                                    }
                                                }
                                            else {
                                                var j =
                                                    "Account " +
                                                    f.account_name +
                                                    " missing encrypted_private_keys";
                                                console.error(j),
                                                    a &&
                                                        (A.Notification.error({
                                                            message: j
                                                        }),
                                                        (a = !1));
                                            }
                                        }
                                    } catch (e) {
                                        (o = !0), (i = e);
                                    } finally {
                                        try {
                                            !r && u.return && u.return();
                                        } finally {
                                            if (o) throw i;
                                        }
                                    }
                                    this.setState(
                                        {
                                            import_file_message: null,
                                            import_password_message: null,
                                            password_checksum: null
                                        },
                                        function() {
                                            return t.updateOnChange();
                                        }
                                    );
                                }
                            },
                            {
                                key: "_saveImport",
                                value: function(e) {
                                    var t = this;
                                    e.preventDefault();
                                    var n = u.a.getState().keys,
                                        a = {};
                                    for (var r in this.state
                                        .imported_keys_public)
                                        n.has(r) &&
                                            (delete this.state
                                                .imported_keys_public[r],
                                            (a[r] = !0));
                                    if (
                                        0 !==
                                        Object.keys(
                                            this.state.imported_keys_public
                                        ).length
                                    ) {
                                        var o = this.state.keys_to_account,
                                            i = !0,
                                            c = !1,
                                            l = void 0;
                                        try {
                                            for (
                                                var s,
                                                    p = Object.keys(o)[
                                                        Symbol.iterator
                                                    ]();
                                                !(i = (s = p.next()).done);
                                                i = !0
                                            ) {
                                                var m = s.value,
                                                    y = o[m];
                                                y.account_names;
                                                a[y.public_key_string] &&
                                                    delete o[m];
                                            }
                                        } catch (e) {
                                            (c = !0), (l = e);
                                        } finally {
                                            try {
                                                !i && p.return && p.return();
                                            } finally {
                                                if (c) throw l;
                                            }
                                        }
                                        f.a
                                            .unlock()
                                            .then(function() {
                                                N.importing(!0),
                                                    setTimeout(function() {
                                                        return t.saveImport();
                                                    }, 200);
                                            })
                                            .catch(function() {});
                                    } else
                                        A.Notification.error({
                                            message: d.a.translate(
                                                "notifications.import_keys_already_imported"
                                            )
                                        });
                                }
                            },
                            {
                                key: "saveImport",
                                value: function() {
                                    var e = this,
                                        t = this.state.keys_to_account,
                                        n = [],
                                        a = !0,
                                        r = !1,
                                        o = void 0;
                                    try {
                                        for (
                                            var i,
                                                c = Object.keys(t)[
                                                    Symbol.iterator
                                                ]();
                                            !(a = (i = c.next()).done);
                                            a = !0
                                        ) {
                                            var l = i.value,
                                                s = t[l],
                                                u = s.account_names,
                                                f = s.public_key_string;
                                            n.push({
                                                private_plainhex: l,
                                                import_account_names: u,
                                                public_key_string: f
                                            });
                                        }
                                    } catch (e) {
                                        (r = !0), (o = e);
                                    } finally {
                                        try {
                                            !a && c.return && c.return();
                                        } finally {
                                            if (r) throw o;
                                        }
                                    }
                                    this.reset(),
                                        C.a
                                            .importKeysWorker(n)
                                            .then(function(t) {
                                                N.importing(!1);
                                                var a = n.length;
                                                A.Notification.success({
                                                    message: d.a.translate(
                                                        "wallet.import_key_success",
                                                        {count: a}
                                                    )
                                                }),
                                                    e.setState({
                                                        importSuccess: !0
                                                    });
                                            })
                                            .catch(function(e) {
                                                console.log("error:", e),
                                                    N.importing(!1);
                                                var t = e;
                                                try {
                                                    t = e.target.error.message;
                                                } catch (e) {}
                                                A.Notification.error({
                                                    message: d.a.translate(
                                                        "notifications.import_keys_error_unknown",
                                                        {error_msg: t}
                                                    )
                                                });
                                            });
                                }
                            },
                            {
                                key: "addByPattern",
                                value: function(e) {
                                    var t = this;
                                    if (!e) return !1;
                                    var n = 0,
                                        a = 0,
                                        r = !0,
                                        o = !1,
                                        i = void 0;
                                    try {
                                        for (
                                            var c,
                                                s = (e.match(
                                                    /5[HJK][1-9A-Za-z]{49}/g
                                                ) || [])[Symbol.iterator]();
                                            !(r = (c = s.next()).done);
                                            r = !0
                                        ) {
                                            var u = c.value;
                                            try {
                                                var f = l.PrivateKey.fromWif(u),
                                                    p = f
                                                        .toBuffer()
                                                        .toString("hex"),
                                                    m = f
                                                        .toPublicKey()
                                                        .toPublicKeyString();
                                                (this.state.imported_keys_public[
                                                    m
                                                ] = !0),
                                                    (this.state.keys_to_account[
                                                        p
                                                    ] = {
                                                        account_names: [],
                                                        public_key_string: m
                                                    }),
                                                    n++;
                                            } catch (e) {
                                                a++;
                                            }
                                        }
                                    } catch (e) {
                                        (o = !0), (i = e);
                                    } finally {
                                        try {
                                            !r && s.return && s.return();
                                        } finally {
                                            if (o) throw i;
                                        }
                                    }
                                    return (
                                        this.setState(
                                            {
                                                key_text_message:
                                                    "Found " +
                                                    (n ? n + " valid" : "") +
                                                    (a
                                                        ? " and " +
                                                          a +
                                                          " invalid"
                                                        : "") +
                                                    " key" +
                                                    (n > 1 || a > 1
                                                        ? "s"
                                                        : "") +
                                                    "."
                                            },
                                            function() {
                                                return t.updateOnChange();
                                            }
                                        ),
                                        (this.state.key_text_message = null),
                                        n
                                    );
                                }
                            },
                            {
                                key: "_renderBalanceClaims",
                                value: function() {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(b.a, null),
                                        r.a.createElement(
                                            "div",
                                            {style: {paddingTop: 15}},
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className: "button success",
                                                    onClick: this.onCancel.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(h.a, {
                                                    content: "wallet.done"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props.privateKey,
                                        n = this.state.keys_to_account,
                                        a = Object.keys(n).length,
                                        o = this.getImportAccountKeyCount(n);
                                    if (!C.a.getWallet())
                                        return r.a.createElement(p.b, {
                                            importKeys: !0,
                                            hideTitle: !0
                                        });
                                    if (this.props.importing)
                                        return r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "div",
                                                {className: "center-content"},
                                                r.a.createElement(m.a, {
                                                    type: "circle"
                                                })
                                            )
                                        );
                                    var i = this.state.genesis_filtering,
                                        l = (!!this.state.genesis_filter_status
                                            .length &&
                                            this.state.genesis_filter_finished,
                                        null);
                                    if (
                                        this.state.genesis_filter_status.length
                                    ) {
                                        l = [];
                                        var s = !0,
                                            u = !1,
                                            f = void 0;
                                        try {
                                            for (
                                                var y,
                                                    _ = this.state.genesis_filter_status[
                                                        Symbol.iterator
                                                    ]();
                                                !(s = (y = _.next()).done);
                                                s = !0
                                            ) {
                                                var b = y.value;
                                                b.count &&
                                                    b.total &&
                                                    l.push(
                                                        r.a.createElement(
                                                            "tr",
                                                            {
                                                                key:
                                                                    b.account_name
                                                            },
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                b.account_name
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                i
                                                                    ? r.a.createElement(
                                                                          "span",
                                                                          null,
                                                                          "Filtering",
                                                                          " ",
                                                                          Math.round(
                                                                              (b.count /
                                                                                  b.total) *
                                                                                  100
                                                                          ),
                                                                          " ",
                                                                          "%",
                                                                          " "
                                                                      )
                                                                    : r.a.createElement(
                                                                          "span",
                                                                          null,
                                                                          b.count
                                                                      )
                                                            )
                                                        )
                                                    );
                                            }
                                        } catch (e) {
                                            (u = !0), (f = e);
                                        } finally {
                                            try {
                                                !s && _.return && _.return();
                                            } finally {
                                                if (u) throw f;
                                            }
                                        }
                                    }
                                    var v = 0 !== a,
                                        g = d.a.translate(
                                            "wallet.import_password"
                                        );
                                    if ((v && (g = ""), !l && o))
                                        for (var k in ((l = []), o))
                                            l.push(
                                                r.a.createElement(
                                                    "tr",
                                                    {key: k},
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        k
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        o[k]
                                                    )
                                                )
                                            );
                                    var E = r.a.createElement(
                                            "div",
                                            {
                                                className: "button success",
                                                onClick: this.onCancel.bind(
                                                    this
                                                )
                                            },
                                            r.a.createElement(h.a, {
                                                content: "wallet.cancel"
                                            })
                                        ),
                                        w = 1;
                                    return this.state.importSuccess
                                        ? this._renderBalanceClaims()
                                        : r.a.createElement(
                                              "div",
                                              null,
                                              r.a.createElement(
                                                  "div",
                                                  {style: {padding: "10px 0"}},
                                                  r.a.createElement(
                                                      "span",
                                                      null,
                                                      this.state
                                                          .key_text_message
                                                          ? this.state
                                                                .key_text_message
                                                          : r.a.createElement(
                                                                I,
                                                                {key_count: a}
                                                            )
                                                  ),
                                                  v
                                                      ? r.a.createElement(
                                                            "span",
                                                            null,
                                                            " ",
                                                            "(",
                                                            r.a.createElement(
                                                                "a",
                                                                {
                                                                    onClick: this.reset.bind(
                                                                        this
                                                                    )
                                                                },
                                                                r.a.createElement(
                                                                    h.a,
                                                                    {
                                                                        content:
                                                                            "wallet.reset"
                                                                    }
                                                                )
                                                            ),
                                                            ")"
                                                        )
                                                      : null
                                              ),
                                              l
                                                  ? r.a.createElement(
                                                        "div",
                                                        null,
                                                        l.length
                                                            ? r.a.createElement(
                                                                  "div",
                                                                  null,
                                                                  r.a.createElement(
                                                                      "table",
                                                                      {
                                                                          className:
                                                                              "table"
                                                                      },
                                                                      r.a.createElement(
                                                                          "thead",
                                                                          null,
                                                                          r.a.createElement(
                                                                              "tr",
                                                                              null,
                                                                              r.a.createElement(
                                                                                  "th",
                                                                                  null,
                                                                                  r.a.createElement(
                                                                                      h.a,
                                                                                      {
                                                                                          content:
                                                                                              "explorer.account.title"
                                                                                      }
                                                                                  )
                                                                              ),
                                                                              r.a.createElement(
                                                                                  "th",
                                                                                  null,
                                                                                  r.a.createElement(
                                                                                      h.a,
                                                                                      {
                                                                                          content:
                                                                                              "settings.restore_key_count"
                                                                                      }
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "tbody",
                                                                          null,
                                                                          l
                                                                      )
                                                                  ),
                                                                  r.a.createElement(
                                                                      "br",
                                                                      null
                                                                  )
                                                              )
                                                            : d.a.translate(
                                                                  "wallet.no_accounts"
                                                              )
                                                    )
                                                  : null,
                                              r.a.createElement("br", null),
                                              v ||
                                              this.state
                                                  .genesis_filter_initalizing
                                                  ? null
                                                  : r.a.createElement(
                                                        "div",
                                                        null,
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            r.a.createElement(
                                                                "div",
                                                                null,
                                                                t
                                                                    ? r.a.createElement(
                                                                          "form",
                                                                          {
                                                                              onSubmit: this.onWif.bind(
                                                                                  this
                                                                              )
                                                                          },
                                                                          r.a.createElement(
                                                                              h.a,
                                                                              {
                                                                                  component:
                                                                                      "label",
                                                                                  content:
                                                                                      "wallet.paste_private"
                                                                              }
                                                                          ),
                                                                          r.a.createElement(
                                                                              "input",
                                                                              {
                                                                                  ref:
                                                                                      "wifInput",
                                                                                  type:
                                                                                      "password",
                                                                                  id:
                                                                                      "wif",
                                                                                  tabIndex: w++
                                                                              }
                                                                          ),
                                                                          r.a.createElement(
                                                                              "button",
                                                                              {
                                                                                  className:
                                                                                      "button",
                                                                                  type:
                                                                                      "submit"
                                                                              },
                                                                              r.a.createElement(
                                                                                  h.a,
                                                                                  {
                                                                                      content:
                                                                                          "wallet.submit"
                                                                                  }
                                                                              )
                                                                          ),
                                                                          E
                                                                      )
                                                                    : r.a.createElement(
                                                                          "form",
                                                                          {
                                                                              onSubmit: this._passwordCheck.bind(
                                                                                  this
                                                                              )
                                                                          },
                                                                          r.a.createElement(
                                                                              "label",
                                                                              null,
                                                                              r.a.createElement(
                                                                                  h.a,
                                                                                  {
                                                                                      content:
                                                                                          "wallet.bts_09_export"
                                                                                  }
                                                                              ),
                                                                              this
                                                                                  .state
                                                                                  .no_file
                                                                                  ? null
                                                                                  : r.a.createElement(
                                                                                        "span",
                                                                                        null,
                                                                                        "  (",
                                                                                        r.a.createElement(
                                                                                            "a",
                                                                                            {
                                                                                                onClick: this.reset.bind(
                                                                                                    this
                                                                                                )
                                                                                            },
                                                                                            "Reset"
                                                                                        ),
                                                                                        ")"
                                                                                    )
                                                                          ),
                                                                          r.a.createElement(
                                                                              "input",
                                                                              {
                                                                                  type:
                                                                                      "file",
                                                                                  id:
                                                                                      "file_input",
                                                                                  accept:
                                                                                      ".json",
                                                                                  style: {
                                                                                      border:
                                                                                          "solid",
                                                                                      marginBottom: 15
                                                                                  },
                                                                                  key: this
                                                                                      .state
                                                                                      .reset_file_name,
                                                                                  onChange: this.upload.bind(
                                                                                      this
                                                                                  )
                                                                              }
                                                                          ),
                                                                          r.a.createElement(
                                                                              "div",
                                                                              null,
                                                                              this
                                                                                  .state
                                                                                  .import_file_message
                                                                          ),
                                                                          this
                                                                              .state
                                                                              .no_file
                                                                              ? null
                                                                              : r.a.createElement(
                                                                                    "div",
                                                                                    null,
                                                                                    r.a.createElement(
                                                                                        "input",
                                                                                        {
                                                                                            type:
                                                                                                "password",
                                                                                            ref:
                                                                                                "password",
                                                                                            key: this
                                                                                                .state
                                                                                                .reset_password,
                                                                                            placeholder: g,
                                                                                            onChange: function() {
                                                                                                e
                                                                                                    .state
                                                                                                    .import_password_message &&
                                                                                                    e
                                                                                                        .state
                                                                                                        .import_password_message
                                                                                                        .length &&
                                                                                                    e.setState(
                                                                                                        {
                                                                                                            import_password_message: null
                                                                                                        }
                                                                                                    );
                                                                                            }
                                                                                        }
                                                                                    ),
                                                                                    r.a.createElement(
                                                                                        "p",
                                                                                        {
                                                                                            className:
                                                                                                "facolor-error"
                                                                                        },
                                                                                        this
                                                                                            .state
                                                                                            .import_password_message
                                                                                    )
                                                                                ),
                                                                          r.a.createElement(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "button-group"
                                                                              },
                                                                              r.a.createElement(
                                                                                  "button",
                                                                                  {
                                                                                      className: c()(
                                                                                          "button",
                                                                                          {
                                                                                              disabled: !!this
                                                                                                  .state
                                                                                                  .no_file
                                                                                          }
                                                                                      ),
                                                                                      type:
                                                                                          "submit"
                                                                                  },
                                                                                  r.a.createElement(
                                                                                      h.a,
                                                                                      {
                                                                                          content:
                                                                                              "wallet.submit"
                                                                                      }
                                                                                  )
                                                                              ),
                                                                              E
                                                                          )
                                                                      )
                                                            ),
                                                            r.a.createElement(
                                                                "br",
                                                                null
                                                            ),
                                                            r.a.createElement(
                                                                "br",
                                                                null
                                                            )
                                                        )
                                                    ),
                                              this.state
                                                  .genesis_filter_initalizing
                                                  ? r.a.createElement(
                                                        "div",
                                                        null,
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "center-content"
                                                            },
                                                            r.a.createElement(
                                                                m.a,
                                                                {type: "circle"}
                                                            )
                                                        )
                                                    )
                                                  : null,
                                              v
                                                  ? r.a.createElement(
                                                        "div",
                                                        null,
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "button-group"
                                                                },
                                                                r.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className: c()(
                                                                            "button success",
                                                                            {
                                                                                disabled: !v
                                                                            }
                                                                        ),
                                                                        onClick: this._saveImport.bind(
                                                                            this
                                                                        )
                                                                    },
                                                                    r.a.createElement(
                                                                        h.a,
                                                                        {
                                                                            content:
                                                                                "wallet.import_keys"
                                                                        }
                                                                    )
                                                                ),
                                                                r.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "button secondary",
                                                                        onClick: this.reset.bind(
                                                                            this
                                                                        )
                                                                    },
                                                                    r.a.createElement(
                                                                        h.a,
                                                                        {
                                                                            content:
                                                                                "wallet.cancel"
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "h4",
                                                            null,
                                                            r.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "wallet.unclaimed"
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(h.a, {
                                                            component: "p",
                                                            content:
                                                                "wallet.claim_later"
                                                        }),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-block"
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grid-content no-overflow"
                                                                },
                                                                r.a.createElement(
                                                                    h.a,
                                                                    {
                                                                        component:
                                                                            "label",
                                                                        content:
                                                                            "wallet.totals"
                                                                    }
                                                                ),
                                                                r.a.createElement(
                                                                    O,
                                                                    null
                                                                )
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "br",
                                                            null
                                                        )
                                                    )
                                                  : null
                                          );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (K.defaultProps = {privateKey: !0}),
                (K = Object(o.a)(K, {
                    listenTo: function() {
                        return [N];
                    },
                    getProps: function() {
                        return {importing: N.getState().importing};
                    }
                }));
            t.a = K;
        },
        2300: function(t, n, a) {
            "use strict";
            (function(t) {
                var r = a(5),
                    o = (function() {
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
                var i = void 0;
                try {
                    var c = a(2301);
                    if (-1 === c.indexOf("3cee441"))
                        throw new Error(
                            "Incorrect hash: bts_genesiskeys_bloom.dat"
                        );
                    i = c;
                } catch (e) {
                    console.log(
                        "WARN: Will be unable to filter CTS 1.0 wallet imports, did not find assets/bts_genesiskeys_bloom.dat",
                        e
                    );
                }
                var l = (function() {
                    function n(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, n),
                            e &&
                                ((this.bloom_buffer = e),
                                (this.bits_in_filter = 8 * e.length));
                    }
                    return (
                        o(n, [
                            {
                                key: "isAvailable",
                                value: function() {
                                    return void 0 !== i;
                                }
                            },
                            {
                                key: "init",
                                value: function(n) {
                                    var a = this;
                                    if (this.bloom_buffer) n();
                                    else {
                                        if (!this.isAvailable())
                                            throw new Error(
                                                "Genesis bloom file was not deployed"
                                            );
                                        var r = new XMLHttpRequest();
                                        (r.responseType = "blob"),
                                            (r.onload = function() {
                                                if (404 !== r.status) {
                                                    var e = new FileReader();
                                                    (e.onload = function(e) {
                                                        var r = new t(
                                                            e.target.result,
                                                            "binary"
                                                        );
                                                        if (
                                                            1048576 !== r.length
                                                        )
                                                            throw new Error(
                                                                "Wrong length"
                                                            );
                                                        (a.bits_in_filter =
                                                            8 * r.length),
                                                            (a.bloom_buffer = r),
                                                            n();
                                                    }),
                                                        e.readAsBinaryString(
                                                            r.response
                                                        );
                                                }
                                            }),
                                            (r.onerror = function() {
                                                console.error("xhr.onerror", e);
                                            }),
                                            r.open("GET", i),
                                            r.send();
                                    }
                                }
                            },
                            {
                                key: "inGenesis",
                                value: function(e) {
                                    if (!this.bloom_buffer)
                                        throw new Error("Call init() first");
                                    for (var t = 0; t < 3; t++) {
                                        var n = r.hash.sha256(t + ":" + e),
                                            a =
                                                parseInt(
                                                    n.slice(-3).toString("hex"),
                                                    16
                                                ) % this.bits_in_filter,
                                            o = a >> 3,
                                            i = 1 << (7 & a);
                                        if (0 == (this.bloom_buffer[o] & i))
                                            return !1;
                                    }
                                    return !0;
                                }
                            },
                            {
                                key: "filter",
                                value: function(e, t) {
                                    var n = this;
                                    if (!this.isAvailable())
                                        return (
                                            console.log(
                                                "WARN: Missing bloom filter for CTS 0.9.x wallets"
                                            ),
                                            void t({error: "missing_bloom"})
                                        );
                                    var a = !0;
                                    t({initalizing: a}),
                                        this.init(function() {
                                            try {
                                                t({initalizing: (a = !1)});
                                                for (
                                                    var o = 1, i = 0;
                                                    i < e.length;
                                                    i++
                                                ) {
                                                    var c = 0,
                                                        l = 0,
                                                        s = e[i],
                                                        u =
                                                            s
                                                                .encrypted_private_keys
                                                                .length;
                                                    t({
                                                        importing: !0,
                                                        account_name:
                                                            s.account_name,
                                                        count: l,
                                                        total: u
                                                    });
                                                    for (
                                                        var f =
                                                            s
                                                                .encrypted_private_keys
                                                                .length - 1;
                                                        f >= 0;
                                                        f--
                                                    ) {
                                                        if (
                                                            (++l % o == 0 &&
                                                                ((o = 47),
                                                                t({
                                                                    importing: !0,
                                                                    account_name:
                                                                        s.account_name,
                                                                    count: l,
                                                                    total: u
                                                                })),
                                                            !s.public_keys)
                                                        )
                                                            return void t({
                                                                error:
                                                                    "missing_public_keys"
                                                            });
                                                        var p =
                                                            s.public_keys[f];
                                                        if (
                                                            (/^CTS/.test(p) &&
                                                                (p =
                                                                    "CTS" +
                                                                    p.substring(
                                                                        3
                                                                    )),
                                                            !n.inGenesis(p))
                                                        ) {
                                                            for (
                                                                var m = r.key.addresses(
                                                                        p,
                                                                        "CTS"
                                                                    ),
                                                                    y = !1,
                                                                    h = 0;
                                                                h < m.length;
                                                                h++
                                                            )
                                                                if (
                                                                    n.inGenesis(
                                                                        m[h]
                                                                    )
                                                                ) {
                                                                    y = !0;
                                                                    break;
                                                                }
                                                            y ||
                                                                (delete s
                                                                    .encrypted_private_keys[
                                                                    f
                                                                ],
                                                                delete s
                                                                    .public_keys[
                                                                    f
                                                                ],
                                                                c++);
                                                        }
                                                    }
                                                    var _ = [],
                                                        d = [];
                                                    for (
                                                        f =
                                                            s
                                                                .encrypted_private_keys
                                                                .length - 1;
                                                        f >= 0;
                                                        f--
                                                    )
                                                        s
                                                            .encrypted_private_keys[
                                                            f
                                                        ] &&
                                                            (_.push(
                                                                s
                                                                    .encrypted_private_keys[
                                                                    f
                                                                ]
                                                            ),
                                                            d.push(
                                                                s.public_keys[f]
                                                            ));
                                                    (s.encrypted_private_keys = _),
                                                        t({
                                                            importing: !1,
                                                            account_name:
                                                                s.account_name,
                                                            count: l - c,
                                                            total: u
                                                        }),
                                                        (s.public_keys = d);
                                                }
                                                t({success: !0});
                                            } finally {
                                                a && t({initalizing: (a = !1)});
                                            }
                                        });
                                }
                            }
                        ]),
                        n
                    );
                })();
                n.a = l;
            }.call(this, a(120).Buffer));
        },
        2301: function(e, t, n) {
            e.exports = n.p + "bts_genesiskeys_bloom_3cee441.dat";
        },
        2302: function(e, t, n) {},
        2304: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(2305),
                i = n(31),
                c = n(80),
                l = n(2052),
                s = n(2),
                u = n.n(s),
                f = n(2319),
                p = n(2306),
                m = n(586),
                y = n(11),
                h = n.n(y),
                _ = n(3),
                d = n.n(_),
                b = n(29),
                v = (function() {
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
            var g = (function() {
                    function e() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e);
                    }
                    return (
                        v(e, [
                            {
                                key: "setBrainkey",
                                value: function(e) {
                                    return e;
                                }
                            }
                        ]),
                        e
                    );
                })(),
                k = b.a.createActions(g),
                E = n(5),
                w = n(92),
                O = (function() {
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
            function C(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            var S = (function() {
                function e() {
                    C(this, e);
                }
                return (
                    O(e, null, [
                        {
                            key: "getInstance",
                            value: function(t) {
                                var n = e.instances.get(t);
                                n ||
                                    ((n = b.a.createStore(x, "BrainkeyStore")),
                                    e.instances.set(t, n));
                                var a = t + " subscribed_instance";
                                if (!e.instances.get(a)) {
                                    var r = n.chainStoreUpdate.bind(n);
                                    E.ChainStore.subscribe(r),
                                        e.instances.set(a, r);
                                }
                                return n;
                            }
                        },
                        {
                            key: "closeInstance",
                            value: function(t) {
                                var n = e.instances.get(t);
                                if (!n)
                                    throw new Error("unknown instance " + t);
                                var a = t + " subscribed_instance",
                                    r = e.instances.get(a);
                                e.instances.delete(a),
                                    E.ChainStore.unsubscribe(r),
                                    n.clearCache();
                            }
                        }
                    ]),
                    e
                );
            })();
            S.instances = new Map();
            var j = S,
                x = (function(e) {
                    function t() {
                        C(this, t);
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
                            e.clearCache(),
                            e.bindListeners({onSetBrainkey: k.setBrainkey}),
                            e._export(
                                "inSync",
                                "chainStoreUpdate",
                                "clearCache"
                            ),
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
                        })(t, w["a"]),
                        O(t, [
                            {
                                key: "clearCache",
                                value: function() {
                                    (this.state = {
                                        brnkey: "",
                                        account_ids: h.a.Set()
                                    }),
                                        (this.derived_keys = new Array()),
                                        (this.account_ids_by_key = null);
                                }
                            },
                            {
                                key: "onSetBrainkey",
                                value: function(e) {
                                    this.clearCache(),
                                        this.setState({brnkey: e}),
                                        this.deriveKeys(e),
                                        this.chainStoreUpdate();
                                }
                            },
                            {
                                key: "inSync",
                                value: function() {
                                    return (
                                        this.derived_keys.forEach(function(e) {
                                            if (P(e)) return !1;
                                        }),
                                        !0
                                    );
                                }
                            },
                            {
                                key: "chainStoreUpdate",
                                value: function() {
                                    this.derived_keys.length &&
                                        this.account_ids_by_key !==
                                            E.ChainStore.account_ids_by_key &&
                                        ((this.account_ids_by_key =
                                            E.ChainStore.account_ids_by_key),
                                        this.updateAccountIds());
                                }
                            },
                            {
                                key: "deriveKeys",
                                value: function() {
                                    var e =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : this.state.brnkey,
                                        t = this.derived_keys.length,
                                        n = (function(e) {
                                            var t = e
                                                .toPublicKey()
                                                .toPublicKeyString();
                                            return {
                                                private_key: e,
                                                public_string: t
                                            };
                                        })(E.key.get_brainPrivateKey(e, t));
                                    this.derived_keys.push(n),
                                        this.derived_keys.length < 10 &&
                                            this.deriveKeys(e);
                                }
                            },
                            {
                                key: "updateAccountIds",
                                value: function() {
                                    var e = this,
                                        t = h.a
                                            .Set()
                                            .withMutations(function(t) {
                                                e.derived_keys.forEach(function(
                                                    e
                                                ) {
                                                    return (function(e) {
                                                        var n = E.ChainStore.getAccountRefsOfKey(
                                                            e
                                                        );
                                                        n &&
                                                            n.forEach(function(
                                                                e
                                                            ) {
                                                                t.add(e);
                                                            });
                                                    })(e.public_string);
                                                });
                                            });
                                    t.equals(this.state.account_ids) ||
                                        ((this.state.account_ids = t),
                                        this.setState({account_ids: t}));
                                }
                            }
                        ]),
                        t
                    );
                })();
            var P = function(e) {
                    return (
                        void 0 ===
                        E.ChainStore.getAccountRefsOfKey(e.public_string)
                    );
                },
                N = n(49),
                A = n(42),
                T = n(783),
                B = n(351),
                I = n(356),
                K = n(24),
                R = n(2322),
                z = (function() {
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
            var W = (function(e) {
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
                    z(t, [
                        {
                            key: "onCardClick",
                            value: function(e) {
                                e.preventDefault();
                                var t = this.props.account.get("name");
                                this.props.history.push("/account/" + t);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = null,
                                    t = null,
                                    n = !1;
                                if (this.props.account) {
                                    e = this.props.account.get("name");
                                    var a = this.props.account.get("balances");
                                    a &&
                                        (t = a
                                            .map(function(e) {
                                                return E.ChainStore.getObject(
                                                    e
                                                ).get("balance")
                                                    ? r.a.createElement(
                                                          "li",
                                                          {key: e},
                                                          r.a.createElement(
                                                              B.a,
                                                              {balance: e}
                                                          )
                                                      )
                                                    : null;
                                            })
                                            .toArray()),
                                        (n = K.a.isMyAccount(
                                            this.props.account
                                        ));
                                }
                                return r.a.createElement(
                                    "div",
                                    {
                                        className: "grid-content account-card",
                                        onClick: this.onCardClick.bind(this)
                                    },
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "card" +
                                                (n ? " my-account" : "")
                                        },
                                        r.a.createElement(
                                            "h4",
                                            {className: "text-center"},
                                            e
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "card-content clearfix"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "float-left"},
                                                r.a.createElement(I.a, {
                                                    account: e,
                                                    size: {
                                                        height: 64,
                                                        width: 64
                                                    }
                                                })
                                            ),
                                            r.a.createElement(
                                                "ul",
                                                {className: "balances"},
                                                t
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
            (W.propTypes = {account: A.a.ChainAccount.isRequired}),
                (W = Object(N.a)(W));
            var M = Object(R.a)(W),
                D = (function() {
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
            function q(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function L(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function U(e, t) {
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
            var J = {
                    listenTo: function() {
                        return [j.getInstance("wmc")];
                    },
                    getProps: function() {
                        return j.getInstance("wmc").getState();
                    }
                },
                F = (function(e) {
                    function t() {
                        return (
                            q(this, t),
                            L(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        U(t, a["Component"]),
                        D(t, [
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    j.closeInstance("wmc");
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        "span",
                                        null,
                                        r.a.createElement(
                                            "h3",
                                            null,
                                            r.a.createElement(u.a, {
                                                content: "wallet.brainkey"
                                            })
                                        ),
                                        r.a.createElement(
                                            Y,
                                            null,
                                            r.a.createElement(H, null)
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                G = (F = Object(i.a)(F, J)),
                H = (function(e) {
                    function t() {
                        return (
                            q(this, t),
                            L(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        U(t, a["Component"]),
                        D(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.brnkey.substring(0, 10);
                                    return r.a.createElement(
                                        "span",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "span",
                                                {className: ""},
                                                e
                                            ),
                                            "…"
                                        ),
                                        r.a.createElement("p", null),
                                        this.props.account_ids.size
                                            ? r.a.createElement(X, {
                                                  accounts: h.a.List(
                                                      this.props.account_ids.toArray()
                                                  )
                                              })
                                            : r.a.createElement(
                                                  "h5",
                                                  null,
                                                  r.a.createElement(u.a, {
                                                      content:
                                                          "wallet.no_accounts"
                                                  })
                                              )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            H = Object(i.a)(H, J);
            var X = (function(e) {
                function t() {
                    return (
                        q(this, t),
                        L(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    U(t, r.a.Component),
                    D(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = Object(m.a)(this.props.accounts)
                                    .filter(function(e) {
                                        return !!e[1];
                                    })
                                    .map(function(e) {
                                        return e[1].get("name");
                                    })
                                    .sort()
                                    .map(function(e) {
                                        return r.a.createElement(M, {
                                            key: e,
                                            account: e
                                        });
                                    });
                                return r.a.createElement("span", null, e);
                            }
                        }
                    ]),
                    t
                );
            })();
            (X.propTypes = {accounts: A.a.ChainAccountsList.isRequired}),
                (X = Object(N.a)(X));
            var Y = (function(e) {
                    function t() {
                        q(this, t);
                        var e = L(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (e.state = {brnkey: "", accept: !1}), e;
                    }
                    return (
                        U(t, a["Component"]),
                        D(t, [
                            {
                                key: "render",
                                value: function() {
                                    if (this.state.accept)
                                        return r.a.createElement(
                                            "span",
                                            null,
                                            this.props.children
                                        );
                                    var e =
                                        this.state.brnkey &&
                                        "" !== this.state.brnkey;
                                    return r.a.createElement(
                                        "span",
                                        {className: "grid-container"},
                                        r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(T.a, {
                                                onChange: this.onBrainkeyChange.bind(
                                                    this
                                                )
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className: d()(
                                                    "button success",
                                                    {disabled: !e}
                                                ),
                                                onClick: this.onAccept.bind(
                                                    this
                                                )
                                            },
                                            r.a.createElement(u.a, {
                                                content: "wallet.accept"
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "onBrainkeyChange",
                                value: function(e) {
                                    this.setState({brnkey: e});
                                }
                            },
                            {
                                key: "onAccept",
                                value: function() {
                                    this.setState({accept: !0}),
                                        k.setBrainkey(this.state.brnkey);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                Z = n(2068),
                Q = n(355),
                V = n(41);
            n.d(t, "ExistingAccountOptions", function() {
                return oe;
            });
            var $ = (function() {
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
            function ee(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function te(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function ne(e, t) {
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
            var ae = {
                    listenTo: function() {
                        return [c.a];
                    },
                    getProps: function() {
                        return {wallet: c.a.getState()};
                    }
                },
                re = (function(e) {
                    function t() {
                        return (
                            ee(this, t),
                            te(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        ne(t, a["Component"]),
                        $(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e =
                                        0 !=
                                        this.props.wallet.wallet_names.count();
                                    return r.a.createElement(
                                        "div",
                                        {className: "grid-container"},
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-content"},
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "content-block center-content"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {className: "page-header"},
                                                    r.a.createElement(
                                                        "h1",
                                                        null,
                                                        r.a.createElement(u.a, {
                                                            content:
                                                                "account.welcome",
                                                            wallet_name: Object(
                                                                V.l
                                                            )()
                                                        })
                                                    ),
                                                    e
                                                        ? r.a.createElement(
                                                              "h3",
                                                              null,
                                                              r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      content:
                                                                          "wallet.setup_wallet"
                                                                  }
                                                              )
                                                          )
                                                        : r.a.createElement(
                                                              "h3",
                                                              null,
                                                              r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      content:
                                                                          "wallet.create_wallet_backup"
                                                                  }
                                                              )
                                                          )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "content-block"
                                                    },
                                                    r.a.createElement(
                                                        f.a,
                                                        null,
                                                        r.a.createElement(p.a, {
                                                            exact: !0,
                                                            path:
                                                                "/existing-account",
                                                            component: Q.b
                                                        }),
                                                        r.a.createElement(p.a, {
                                                            exact: !0,
                                                            path:
                                                                "/existing-account/import-backup",
                                                            component: oe
                                                        }),
                                                        r.a.createElement(p.a, {
                                                            exact: !0,
                                                            path:
                                                                "/existing-account/import-keys",
                                                            component: Z.a
                                                        }),
                                                        r.a.createElement(p.a, {
                                                            exact: !0,
                                                            path:
                                                                "/existing-account/brainkey",
                                                            component: G
                                                        }),
                                                        r.a.createElement(p.a, {
                                                            exact: !0,
                                                            path:
                                                                "/existing-account/balance-claim",
                                                            component: l.a
                                                        })
                                                    ),
                                                    this.props.children
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
            re = Object(i.a)(re, ae);
            var oe = (function(e) {
                function t() {
                    return (
                        ee(this, t),
                        te(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    ne(t, a["Component"]),
                    $(t, [
                        {
                            key: "render",
                            value: function() {
                                var e =
                                    0 != this.props.wallet.wallet_names.count();
                                return r.a.createElement(
                                    "span",
                                    null,
                                    e
                                        ? null
                                        : r.a.createElement(
                                              "div",
                                              null,
                                              r.a.createElement(
                                                  o.a,
                                                  {
                                                      to:
                                                          "existing-account/import-backup"
                                                  },
                                                  r.a.createElement(u.a, {
                                                      content:
                                                          "wallet.import_backup",
                                                      wallet_name: Object(V.l)()
                                                  })
                                              ),
                                              r.a.createElement("br", null),
                                              r.a.createElement("br", null),
                                              r.a.createElement(
                                                  o.a,
                                                  {
                                                      to:
                                                          "existing-account/import-keys"
                                                  },
                                                  r.a.createElement(u.a, {
                                                      content:
                                                          "wallet.import_bts1"
                                                  })
                                              ),
                                              r.a.createElement("br", null),
                                              r.a.createElement("br", null),
                                              r.a.createElement(
                                                  o.a,
                                                  {
                                                      to:
                                                          "existing-account/import-keys"
                                                  },
                                                  r.a.createElement(u.a, {
                                                      content:
                                                          "wallet.create_wallet"
                                                  })
                                              ),
                                              r.a.createElement("br", null),
                                              r.a.createElement("hr", null)
                                          ),
                                    e ? r.a.createElement(l.a, null) : null,
                                    e
                                        ? r.a.createElement(
                                              "span",
                                              null,
                                              r.a.createElement(
                                                  o.a,
                                                  {to: "dashboard"},
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "button outline"
                                                      },
                                                      r.a.createElement(u.a, {
                                                          component: "span",
                                                          content:
                                                              "header.dashboard"
                                                      })
                                                  )
                                              ),
                                              r.a.createElement(
                                                  o.a,
                                                  {to: "wallet"},
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "button outline"
                                                      },
                                                      r.a.createElement(u.a, {
                                                          content:
                                                              "settings.wallets"
                                                      })
                                                  )
                                              )
                                          )
                                        : null
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            oe = Object(i.a)(oe, ae);
            t.default = re;
        }
    }
]);
//# sourceMappingURL=existing-account.js.map
