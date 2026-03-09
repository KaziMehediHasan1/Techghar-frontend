import { BreadcrumbBasic } from "@/components/Breadcrumb";
import HelpersCard from "@/components/cards/HelpersCard";
import Wrapper from "@/components/layout/Wrapper";
import { useLocation } from "react-router-dom";

const TermsAndCondition = () => {
  const location = useLocation();
  console.log(location, "pathname");
  return (
    <div>
      <Wrapper>
        <div className="py-6 md:py-10">
          {/* BREADCRUMB & MAIN TITLE */}
          <header className="mb-8 space-y-3">
            <BreadcrumbBasic />
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900">
              Shop Terms & Conditions
            </h1>
          </header>

          {/* MAIN CONTENT GRID */}
          <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT SIDE: GENERAL TERMS TITLE */}
            <div className="lg:col-span-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight uppercase">
                General Terms and Conditions for Sale of Products and Services
              </h2>
              <div className="mt-6 text-slate-600 leading-relaxed space-y-4">
                {/* Definition */}
                <section>
                  <h1 className="text-lg sm:text-xl font-bold">
                    Definitions & Interpretation
                  </h1>
                  <p className="text-sm sm:text-lg -tracking-tighter">
                    In the following Terms and Conditions of sale, unless the
                    context requires otherwise
                  </p>
                  <div className="">
                    <ul className="space-y-1 text-sm sm:text-base text-slate-700 leading-relaxed">
                      <li className="flex gap-2">
                        <span className="font-semibold">(a)</span>
                        <p>
                          <span className="font-bold text-slate-900">
                            "Shop"
                          </span>{" "}
                          means Shop Pty Ltd ABN 11 222 333 444.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold">(b)</span>
                        <p>
                          <span className="font-bold text-slate-900">
                            "Customer"
                          </span>{" "}
                          means the person or corporation placing an order for
                          the purchase of goods or services from Shop.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold">(c)</span>
                        <p>
                          <span className="font-bold text-slate-900">
                            "Products"
                          </span>{" "}
                          means any goods, materials, equipment or services
                          provided to the Customer by Shop.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold">(d)</span>
                        <p>
                          If the Customer comprises more than one person, each
                          of those person’s liability is joint and several.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold">(e)</span>
                        <p>
                          References to a party or a person includes any form of
                          entity and their respective successors, assigns and
                          representatives.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold">(f)</span>
                        <p>
                          For all periods and times specified in clauses 5 and
                          11,{" "}
                          <span className="italic">time is of the essence</span>
                          .
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold">(g)</span>
                        <p>
                          All references to currency are references to{" "}
                          <span className="font-semibold">
                            Australian dollars
                          </span>
                          .
                        </p>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* General */}
                <section>
                  <h1 className="text-lg sm:text-xl font-bold">General</h1>
                  <p>
                    By ordering the Products and/or accepting delivery of the
                    Products from Shop, the Customer agrees that it is bound by
                    these Terms and Conditions of sale. Customer orders,
                    including orders placed via the internet, are subject to
                    acceptance by Shop. The acceptance of the Customer's order
                    by Shop is expressly made conditional upon the Customer's
                    assent to these Terms and Conditions which will prevail
                    notwithstanding anything that may be stated to the contrary
                    on the Customer's order. Shop reserves the right to vary any
                    of these terms at any time and any subsequent orders placed
                    by the Customer will constitute an acceptance of the terms
                    as varied. Once a Customer order has been placed and
                    accepted by Shop, the Customer agrees that the Customer has
                    no right to cancel or vary the order at any time, unless
                    agreed upon in writing by both parties.
                  </p>
                </section>

                {/* Quotations */}
                <section>
                  {/* General */}
                  <h1 className="text-lg sm:text-xl font-bold">Quotations</h1>
                  <p>
                    Any quotation by Shop to the Customer will be open for
                    acceptance by the Customer within the period stated in the
                    quotation or, where no period is stated, within seven (7)
                    days from the date of the quotation. Thereafter, prices
                    stated in the quotation may be varied by Shop without notice
                    to the Customer.
                  </p>
                </section>

                {/* Prices / Taxes */}
                <section>
                  {/* General */}
                  <h1 className="text-lg sm:text-xl font-bold">
                    Prices / Taxes
                  </h1>
                  <p>
                    The prices charged by and payable to Shop will be the ruling
                    prices applicable at the time of order placement, provided
                    that the Products are accepted for delivery within a
                    reasonable time. Prices are subject to change without
                    notice. Recommended retail prices are provided for
                    indicative purposes only and there is no obligation for Shop
                    to comply with that recommendation. It as agreed that should
                    the Customer fail for any reason to acquire the quantity of
                    Products sold then without limiting Shop' other rights and
                    remedies the unit price charged for the goods sold may be
                    amended to take into account any variation in the total
                    quantity purchased by the Customer. Prices include GST, but
                    do not include any other tax or duty, which is in addition
                    to the price and is to be paid by the Customer at the time
                    of payment for the Products.
                  </p>
                </section>

                {/* Terms of Payment */}
                <section>
                  {/* General */}
                  <h1 className="text-lg sm:text-xl font-bold">
                    Prices / Taxes
                  </h1>
                  <div className="space-y-4">
                    <p>
                      Credit Card Payments may attract a surcharge, and Shop
                      will inform the Customer if this is to be the case before
                      processing the transaction.
                    </p>
                    <p>
                      Unless otherwise agreed in writing by Shop, where Shop has
                      not agreed in writing to provide commercial credit to the
                      Customer, the total purchase price for Products supplied
                      will be due for payment in cash prior to delivery.
                    </p>
                    <p>
                      Where Shop has agreed in writing to provide commercial
                      credit to the Customer, the Customer must make payments in
                      accordance with the payment terms provided by Shop.
                    </p>
                    <p>
                      Where Shop has approved the provision of a commercial
                      credit arrangement with the Customer but has not provided
                      notice of the payment terms to the Customer, the Customer
                      must pay the total purchase price for Products supplied
                      within seven days of the statement date.
                    </p>
                    <p>
                      Credit Card Payment at an Invoice or transaction level may
                      also be offered to the Customer as a stand-alone payment
                      method, or in conjunction with Credit Card Direct Debit
                      Authorisation.
                    </p>
                  </div>
                </section>

                {/* Credit Accounts */}
                <section>
                  {/* General */}
                  <h1 className="text-lg sm:text-xl font-bold">
                    Credit Accounts
                  </h1>
                  <p>
                    Any commercial credit arrangements that are provided to the
                    Customer by Shop will continue until terminated by Shop at
                    it sole discretion. In the event that Shop terminates the
                    Customer's commercial credit arrangement, the Customer will
                    be notified in writing and termination will take effect upon
                    receipt of that notification by the Customer.
                  </p>
                </section>

                {/* Change of Ownership */}
                <section>
                  {/* General */}
                  <h1 className="text-lg sm:text-xl font-bold">
                    Change of Ownership
                  </h1>
                  <div className="space-y-4">
                    <p>
                      Trading accounts are approved by Shop based on the
                      information supplied and the representations made by the
                      Customer. In the event that there is a change in ownership
                      of the Customer, whether total or partial, the Customer
                      must immediately provide written notice to Shop informing
                      Shop of these changes. Until Shop receives written notice
                      from the Customer of a change in ownership, the Customer
                      (including where it is a company or trustee, each of the
                      Directors thereof) holds Shop indemnified against any and
                      all losses, unpaid accounts, interest, damages, costs,
                      charges, fees and expenses incurred or suffered by Shop in
                      trading with any person, company (including the same
                      company but with a different shareholder or shareholders)
                      or other entity (including a trust) which may have
                      purchased the Customer's business or any interest in the
                      Customer's business or any of the shares in the Customer
                      and used the Customer's previously approved account for
                      trading.
                    </p>
                    <p>
                      Where a Customer has been authorised by Shop to make
                      payments through Credit Card Direct Debit, the Customer
                      must provide notice in writing at least five (5) days
                      prior to any change in ownership of the business to allow
                      Shop sufficient time to contact the new owner to obtain
                      and confirm new Credit Card information if applicable.
                    </p>
                  </div>
                </section>

                {/* Information on the Products supplied */}
                <section>
                  <h1 className="text-lg sm:text-xl font-bold">
                    Information on the Products supplied
                  </h1>

                  <p>
                    All descriptive specifications, illustrations, drawings,
                    data, dimensions and weights furnished by Shop or otherwise
                    contained in catalogues or other advertising material are
                    approximate only and are intended to be merely a general
                    description of the goods, are not incorporated within this
                    agreement and no not form part of the description of the
                    goods sold under this or any other agreement unless
                    otherwise agreed to in writing by Shop in which case such
                    information will be subject to recognised trade tolerances.
                  </p>
                </section>

                {/* Delivery */}
                <section>
                  <h1 className="text-lg sm:text-xl font-bold">Delivery</h1>
                  <div>
                    <p>
                      The means of delivering the Products to the Customer will
                      be at Shop' discretion. Shop reserves the right to deliver
                      Products in part deliveries. In the event that Shop incurs
                      additional costs for meeting special (i.e. Tasmania /
                      Northern Territory Deliveries) or urgent delivery
                      arrangements, these additional costs may be charged to the
                      Customer and may include the cost of airfreight where it
                      is not the normal method of delivery. The Customer agrees
                      to accept delivery of the Products sold at any time during
                      normal business hours.
                    </p>
                    <p>
                      All descriptive specifications, illustrations, drawings,
                      data, dimensions and weights furnished by Shop or
                      otherwise contained in catalogues or other advertising
                      material are approximate only and are intended to be
                      merely a general description of the goods, are not
                      incorporated within this agreement and no not form part of
                      the description of the goods sold under this or any other
                      agreement unless otherwise agreed to in writing by Shop in
                      which case such information will be subject to recognised
                      trade tolerances.
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* RIGHT SIDE: QUICK NAVIGATION / INDEX CARD */}
            <aside className="hidden lg:block lg:col-span-4 bg-[#F5F7FF] p-6 rounded-md">
              <h3 className="text-lg font-bold text-blue-900 mb-4 border-b border-blue-200 pb-2">
                Definitions & Interpretation
              </h3>
              <nav className="flex flex-col space-y-3 text-sm md:text-base text-slate-700">
                <a href="#" className="hover:text-blue-600 transition-colors">
                  General
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Quotations
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Prices / Taxes
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Terms of Payment
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Credit Accounts
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Change of Ownership
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Information on Products
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Delivery
                </a>
              </nav>
            </aside>
          </main>

          {/* support */}
        </div>
      </Wrapper>
      <div className="bg-[#F5F7FF] py-5">
        <HelpersCard />
      </div>
    </div>
  );
};

export default TermsAndCondition;
