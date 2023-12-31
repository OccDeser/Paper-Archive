# Crypto[2023-2]
## Revisiting Cycles of Pairing-Friendly Elliptic Curves.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#revisiting-cycles-of-pairing-friendly-elliptic-curves)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#revisiting-cycles-of-pairing-friendly-elliptic-curves)
### Authors
* Marta Bellés-Muñoz, Dusk Network, Amsterdam, The Netherlands
* Javier Silva, Dusk Network, Amsterdam, The Netherlands
* Marta Bellés-Muñoz, Pompeu Fabra University, Barcelona, Spain
* Jorge Jiménez Urroz, Polytechnic University of Catalonia, Barcelona, Spain
* Jorge Jiménez Urroz, Technical University of Madrid, Madrid, Spain
### Abstract
> A recent area of interest in cryptography is recursive composition of proof systems. One of the approaches to make recursive composition efficient involves cycles of pairing-friendly elliptic curves of prime order. However, known constructions have very low embedding degrees. This entails large parameter sizes, which makes the overall system inefficient. In this paper, we explore 2-cycles composed of curves from families parameterized by polynomials, and show that such cycles do not exist unless a strong condition holds. As a consequence, we prove that no 2-cycles can arise from the known families, except for those cycles already known. Additionally, we show some general properties about cycles, and provide a detailed computation on the density of pairing-friendly cycles among all cycles.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_1](https://doi.org/10.1007/978-3-031-38545-2_1)
## Non-interactive Zero-Knowledge from Non-interactive Batch Arguments.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#non-interactive-zero-knowledge-from-non-interactive-batch-arguments)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#non-interactive-zero-knowledge-from-non-interactive-batch-arguments)
### Authors
* Jeffrey Champion, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
### Abstract
> Zero-knowledge and succinctness are two important properties that arise in the study of non-interactive arguments. Previously, Kitagawa et al. (TCC 2020) showed how to obtain a non-interactive zero-knowledge (NIZK) argument for \(\textsf{NP}\) from a succinct non-interactive argument (SNARG) for \(\textsf{NP}\). In particular, their work demonstrates how to leverage the succinctness property from an argument system and transform it into a zero-knowledge property.
> 
> In this work, we study a similar question of leveraging succinctness for zero-knowledge. Our starting point is a batch argument for \(\textsf{NP}\), a primitive that allows a prover to convince a verifier of T \(\textsf{NP}\) statements \(x_1, \ldots , x_T\) with a proof whose size scales sublinearly with T. Unlike SNARGs for \(\textsf{NP}\), batch arguments for \(\textsf{NP}\) can be built from group-based assumptions in both pairing and pairing-free groups and from lattice-based assumptions. The challenge with batch arguments is that the proof size is only amortized over the number of instances, but can still encode full information about the witness to a small number of instances.
> 
> We show how to combine a batch argument for \(\textsf{NP}\) with a local pseudorandom generator (i.e., a pseudorandom generator where each output bit only depends on a small number of input bits) and a dual-mode commitment scheme to obtain a NIZK for \(\textsf{NP}\). Our work provides a new generic approach of realizing zero-knowledge from succinctness and highlights a new connection between succinctness and zero-knowledge.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_2](https://doi.org/10.1007/978-3-031-38545-2_2)
## Lattice-Based Succinct Arguments from Vanishing Polynomials - (Extended Abstract).
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#lattice-based-succinct-arguments-from-vanishing-polynomials-extended-abstract)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#lattice-based-succinct-arguments-from-vanishing-polynomials-extended-abstract)
### Authors
* Valerio Cini, AIT Austrian Institute of Technology, Vienna, Austria
* Russell W. F. Lai, Aalto University, Espoo, Finland
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> Succinct arguments allow a prover to convince a verifier of the validity of any statement in a language, with minimal communication and verifier’s work. Among other approaches, lattice-based protocols offer solid theoretical foundations, post-quantum security, and a rich algebraic structure. In this work, we present some new approaches to constructing efficient lattice-based succinct arguments. Our main technical ingredient is a new commitment scheme based on vanishing polynomials, a notion borrowed from algebraic geometry. We analyse the security of such a commitment scheme, and show how to take advantage of the additional algebraic structure to build new lattice-based succinct arguments. A few highlights amongst our results are:
> 
> (i) The first recursive folding (i.e. Bulletproofs-like) protocol for linear relations with polylogarithmic verifier runtime. Traditionally, the verifier runtime has been the efficiency bottleneck for such protocols (regardless of the underlying assumptions).
> 
> (ii) The first verifiable delay function (VDF) based on lattices, building on a recently introduced sequential relation.
> 
> (iii) The first lattice-based linear-time prover succinct argument for NP, in the preprocessing model. The soundness of the scheme is based on (knowledge)-k-R-ISIS assumption [Albrecht et al., CRYPTO’22].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_3](https://doi.org/10.1007/978-3-031-38545-2_3)
## Orbweaver: Succinct Linear Functional Commitments from Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#orbweaver-succinct-linear-functional-commitments-from-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#orbweaver-succinct-linear-functional-commitments-from-lattices)
### Authors
* Ben Fisch, Yale University, New Haven, USA
* Zeyu Liu, Yale University, New Haven, USA
* Psi Vesely, Yale University, New Haven, USA
### Abstract
> We present Orbweaver, the first plausibly post-quantum functional commitment to achieve quasilinear prover time together with \(O(\log n)\) proof size and \(O(\log n \log \log n)\) verifier time. Orbweaver enables evaluation of linear maps on committed vectors over cyclotomic rings or the integers. It is extractable, preprocessing, non-interactive, structure-preserving, amenable to recursive composition, and supports logarithmic public proof aggregation. The security of our scheme is based on the k-R-ISIS assumption (and its knowledge counterpart), whereby we require a trusted setup to generate a universal structured reference string. We additionally use Orbweaver to construct a succinct polynomial commitment for integer polynomials.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_4](https://doi.org/10.1007/978-3-031-38545-2_4)
## Non-interactive Universal Arguments.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#non-interactive-universal-arguments)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#non-interactive-universal-arguments)
### Authors
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Dana Shamir, Tel Aviv University, Tel Aviv, Israel
* Tomer Solomon, Tel Aviv University, Tel Aviv, Israel
### Abstract
> In 2002, Barak and Goldreich introduced the notion of a universal argument and constructed an interactive universal argument for non-deterministic computations based on polynomially hard collision-resistant hash functions. Since then, and especially in recent years, there have been tremendous developments in the construction of non-interactive succinct arguments for deterministic computations under standard hardness assumptions. However, the constructed succinct arguments can be proven universal only under sub-exponential assumptions.
> 
> Assuming polynomially hard fully homomorphic encryption and a widely believed worst-case complexity assumption, we prove a general lifting theorem showing that all existing non-interactive succinct arguments can be made universal. The required complexity assumption is that non-uniformity does not allow arbitrary polynomial speedup. In the setting of uniform adversaries, this extra assumption is not needed.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_5](https://doi.org/10.1007/978-3-031-38545-2_5)
## Succinct Arguments for RAM Programs via Projection Codes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#succinct-arguments-for-ram-programs-via-projection-codes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#succinct-arguments-for-ram-programs-via-projection-codes)
### Authors
* Yuval Ishai, Technion - Israel Institute of Technology, Haifa, Israel
* Rafail Ostrovsky, University of California Los Angeles, Los Angeles, USA
* Akash Shah, University of California Los Angeles, Los Angeles, USA
### Abstract
> Motivated by the goal of proving statements that involve small subsets of a big database, we introduce and study the notion of projection codes. A standard error-correcting code allows one to encode a message \(\textbf{x}\) into a codeword \(\textbf{X}\), such that even if a constant fraction of \(\textbf{X}\) is corrupted, the message \(\textbf{x}\) can still be recovered. A projection code extends this guarantee to any subset of the bits of \(\textbf{x}\). Concretely, for every projection of \(\textbf{x}\) to a subset \(\textbf{s}\) of its coordinates, there is a subset \(\textbf{S}\) of comparable size such that the projected encoding \(\textbf{X}|_\textbf{S}\) forms a robust encoding of the projected message \(\textbf{x}|_\textbf{s}\).
> 
> Our first main result is a construction of projection codes with a near-optimal increase in the length of \(\textbf{x}\) and size of \(\textbf{s}\). We then apply this to obtain our second main result: succinct arguments for the computation of a RAM program on a (big) committed database, where the communication and the run-time of both the prover and the verifier are close to optimal even when the RAM program run-time is much smaller than the database size. Our solution makes only a black-box use of a collision-resistant hash function, providing the first black-box alternative to previous non-black-box constructions with similar asymptotic efficiency.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_6](https://doi.org/10.1007/978-3-031-38545-2_6)
## Brakedown: Linear-Time and Field-Agnostic SNARKs for R1CS.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#brakedown-linear-time-and-field-agnostic-snarks-for-r1cs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#brakedown-linear-time-and-field-agnostic-snarks-for-r1cs)
### Authors
* Alexander Golovnev, Georgetown University, Washington, D.C., USA
* Justin Thaler, Georgetown University, Washington, D.C., USA
* Jonathan Lee, Nanotronics, New York, USA
* Srinath Setty, Microsoft Research, Cambridge, USA
* Riad S. Wahby, Stanford University, Stanford, USA
### Abstract
> This paper introduces a SNARK called Brakedown. Brakedown targets R1CS, a popular NP-complete problem that generalizes circuit-satisfiability. It is the first built system that provides a linear-time prover, meaning the prover incurs O(N) finite field operations to prove the satisfiability of an N-sized R1CS instance. Brakedown ’s prover is faster, both concretely and asymptotically, than prior SNARK implementations. It does not require a trusted setup and may be post-quantum secure. Furthermore, it is compatible with arbitrary finite fields of sufficient size; this property is new among built proof systems with sublinear proof sizes. To design Brakedown, we observe that recent work of Bootle, Chiesa, and Groth (BCG, TCC 2020) provides a polynomial commitment scheme that, when combined with the linear-time interactive proof system of Spartan (CRYPTO 2020), yields linear-time IOPs and SNARKs for R1CS (a similar theoretical result was previously established by BCG, but our approach is conceptually simpler, and crucial for achieving high-speed SNARKs). A core ingredient in the polynomial commitment scheme that we distill from BCG is a linear-time encodable code. Existing constructions of such codes are believed to be impractical. Nonetheless, we design and engineer a new one that is practical in our context.
> 
> We also implement a variant of Brakedown that uses Reed-Solomon codes instead of our linear-time encodable codes; we refer to this variant as Shockwave. Shockwave is not a linear-time SNARK, but it provides shorter proofs and lower verification times than Brakedown, and also provides a faster prover than prior plausibly post-quantum SNARKs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_7](https://doi.org/10.1007/978-3-031-38545-2_7)
## Lattice-Based Succinct Arguments for NP with Polylogarithmic-Time Verification.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#lattice-based-succinct-arguments-for-np-with-polylogarithmic-time-verification)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#lattice-based-succinct-arguments-for-np-with-polylogarithmic-time-verification)
### Authors
* Jonathan Bootle, IBM Research Europe, Zurich, Switzerland
* Alessandro Chiesa, EPFL, Lausanne, Switzerland
* Katerina Sotiraki, UC Berkeley, Berkeley, USA
### Abstract
> Succinct arguments that rely on the Merkle-tree paradigm introduced by Kilian (STOC 92) suffer from larger proof sizes in practice due to the use of generic cryptographic primitives. In contrast, succinct arguments with the smallest proof sizes in practice exploit homomorphic commitments. However these latter are quantum insecure, unlike succinct arguments based on the Merkle-tree paradigm.
> 
> A recent line of works seeks to address this limitation, by constructing quantum-safe succinct arguments that exploit lattice-based commitments. The eventual goal is smaller proof sizes than those achieved via the Merkle-tree paradigm. Alas, known constructions lack succinct verification.
> 
> In this paper, we construct the first interactive argument system for NP with succinct verification that, departing from the Merkle-tree paradigm, exploits the homomorphic properties of lattice-based commitments. For an arithmetic circuit with N gates, our construction achieves verification time \(\textsf{polylog}(N)\) based on the hardness of the Ring Short-Integer-Solution (RSIS) problem.
> 
> The core technique in our construction is a delegation protocol built from commitment schemes based on leveled bilinear modules, a new notion that we deem of independent interest. We show that leveled bilinear modules can be realized from pre-quantum and from post-quantum cryptographic assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_8](https://doi.org/10.1007/978-3-031-38545-2_8)
## SNARGs for Monotone Policy Batch NP.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#snargs-for-monotone-policy-batch-np)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#snargs-for-monotone-policy-batch-np)
### Authors
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Maya Farber Brodsky, Tel Aviv University, Tel Aviv, Israel
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Yael Tauman Kalai, Microsoft Research and MIT, Cambridge, USA
* Alex Lombardi, Simons Institute and UC Berkeley, Berkeley, USA
### Abstract
> We construct a succinct non-interactive argument (\(\textsf{SNARG} \)) for the class of monotone policy batch \(\textsf{NP} \) languages, under the Learning with Errors (\(\textsf{LWE} \)) assumption. This class is a subclass of \(\textsf{NP} \) that is associated with a monotone function \(f:\{0,1\}^k\rightarrow \{0,1\}\) and an \(\textsf{NP} \) language \(\mathcal {L} \), and contains instances \((x_1,\ldots ,x_k)\) such that \(f(b_1,\ldots ,b_k)=1\) where \(b_j=1\) if and only if \(x_j\in \mathcal {L} \). Our \(\textsf{SNARG} \)s are arguments of knowledge in the non-adaptive setting, and satisfy a new notion of somewhere extractability against adaptive adversaries.
> 
> This is the first \(\textsf{SNARG} \) under standard hardness assumptions for a sub-class of \(\textsf{NP} \) that is not known to have a (computational) non-signaling \(\textsf{PCP} \) with parameters compatible with the standard framework for constructing \(\textsf{SNARG} \)s dating back to [Kalai-Raz-Rothblum, STOC ’13]. Indeed, our approach necessarily departs from this framework.
> 
> Our construction combines existing quasi-arguments for \(\textsf{NP} \) (based on batch arguments for \(\textsf{NP}\)) with a new type of cryptographic encoding of the instance and a new analysis going from local to global soundness. The main novel ingredient used in our encoding is a predicate-extractable hash (\(\textsf{PEHash}\)) family, which is a primitive that generalizes the notion of a somewhere extractable hash. Whereas a somewhere extractable hash allows to extract a single input coordinate, our \(\textsf{PEHash}\) extracts a global property of the input. We view this primitive to be of independent interest, and believe that it will find other applications.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_9](https://doi.org/10.1007/978-3-031-38545-2_9)
## TreePIR: Sublinear-Time and Polylog-Bandwidth Private Information Retrieval from DDH.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#treepir-sublinear-time-and-polylog-bandwidth-private-information-retrieval-from-ddh)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#treepir-sublinear-time-and-polylog-bandwidth-private-information-retrieval-from-ddh)
### Authors
* Arthur Lazzaretti, Yale University, New Haven, USA
* Charalampos Papamanthou, Yale University, New Haven, USA
### Abstract
> In Private Information Retrieval (PIR), a client wishes to retrieve the value of an index i from a public database of N values without leaking any information about i. In their recent seminal work, Corrigan-Gibbs and Kogan (EUROCRYPT 2020) introduced the first two-server PIR protocol with sublinear amortized server time and sublinear \(O(\sqrt{N} \log N)\) bandwidth. In a followup work, Shi et al. (CRYPTO 2021) reduced the bandwidth to polylogarithmic by proposing a construction based on privately puncturable pseudorandom functions, a primitive whose only construction known to date is based on heavy cryptographic primitives such as LWE. Partly because of this, their PIR protocol does not achieve concrete efficiency. In this paper we propose TreePIR, a two-server PIR protocol with sublinear amortized server time and polylogarithmic bandwidth whose security can be based on just the DDH assumption. TreePIR can be partitioned in two phases that are both sublinear: The first phase is remarkably simple and only requires pseudorandom generators. The second phase is a single-server PIR protocol on only \(\sqrt{N}\) indices, for which we can use the protocol by Döttling et al. (CRYPTO 2019) based on DDH, or, for practical purposes, the most concretely efficient single-server PIR protocol. Not only does TreePIR achieve better asymptotics than previous approaches while resting on weaker cryptographic assumptions, it also outperforms existing two-server PIR protocols in practice. The crux of our protocol is a new cryptographic primitive that we call weak privately puncturable pseudorandom functions, which we believe can have further applications.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_10](https://doi.org/10.1007/978-3-031-38545-2_10)
## Multi-party Homomorphic Secret Sharing and Sublinear MPC from Sparse LPN.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#multi-party-homomorphic-secret-sharing-and-sublinear-mpc-from-sparse-lpn)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#multi-party-homomorphic-secret-sharing-and-sublinear-mpc-from-sparse-lpn)
### Authors
* Quang Dao, Carnegie Mellon University, Pittsburgh, USA
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Yuval Ishai, Technion, Haifa, Israel
* Huijia Lin, University of Washington, Seattle, USA
### Abstract
> Over the past few years, homomorphic secret sharing (HSS) emerged as a compelling alternative to fully homomorphic encryption (FHE), due to its feasibility from an array of standard assumptions and its potential efficiency benefits. However, all known HSS schemes, with the exception of schemes built from FHE or indistinguishability obfuscation (iO), can only support two parties.
> 
> In this work, we give the first construction of a multi-party HSS scheme for a non-trivial function class, from an assumption not known to imply FHE. In particular, we construct an HSS scheme for an arbitrary number of parties with an arbitrary corruption threshold, supporting evaluations of multivariate polynomials of degree \(\log / \log \log \) over arbitrary finite fields. As a consequence, we obtain a secure multiparty computation (MPC) protocol for any number of parties, with (slightly) sub-linear per-party communication of roughly \(O(S/\log \log S)\) bits when evaluating a layered Boolean circuit of size S.
> 
> Our HSS scheme relies on the sparse Learning Parity with Noise (LPN) assumption, a standard variant of LPN with a sparse public matrix that has been studied and used in prior works. Thanks to this assumption, our construction enjoys several unique benefits. In particular, it can be built on top of any linear secret sharing scheme, producing noisy output shares that can be error-corrected by the decoder. This yields HSS for low-degree polynomials with optimal download rate. Unlike prior works, our scheme also has a low computation overhead in that the per-party computation of a constant degree polynomial takes O(M) work, where M is the number of monomials.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_11](https://doi.org/10.1007/978-3-031-38545-2_11)
## Lattice Signature with Efficient Protocols, Application to Anonymous Credentials.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#lattice-signature-with-efficient-protocols-application-to-anonymous-credentials)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#lattice-signature-with-efficient-protocols-application-to-anonymous-credentials)
### Authors
* Corentin Jeudy, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* Olivier Sanders, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* Corentin Jeudy, Univ Rennes, CNRS, IRISA, Rennes, France
* Adeline Roux-Langlois, Normandie Univ, UNICAEN, ENSICAEN, CNRS, GREYC, 14000, Caen, France
### Abstract
> Digital signature is an essential primitive in cryptography, which can be used as the digital analogue of handwritten signatures but also as a building block for more complex systems. In the latter case, signatures with specific features are needed, so as to smoothly interact with the other components of the systems, such as zero-knowledge proofs. This has given rise to so-called signatures with efficient protocols, a versatile tool that has been used in countless applications. Designing such signatures is however quite difficult, in particular if one wishes to withstand quantum computing. We are indeed aware of only one post-quantum construction, proposed by Libert et al. at Asiacrypt’16, yielding very large signatures and proofs.
> 
> In this paper, we propose a new construction that can be instantiated in both standard lattices and structured ones, resulting in each case in dramatic performance improvements. In particular, the size of a proof of message-signature possession, which is one of the main metrics for such schemes, can be brought down to less than 650 KB. As our construction retains all the features expected from signatures with efficient protocols, it can be used as a drop-in replacement in all systems using them, which mechanically improves their own performance, and has thus a direct impact on many applications. It can also be used to easily design new privacy-preserving mechanisms. As an example, we provide the first lattice-based anonymous credentials system.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_12](https://doi.org/10.1007/978-3-031-38545-2_12)
## A Framework for Practical Anonymous Credentials from Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#a-framework-for-practical-anonymous-credentials-from-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#a-framework-for-practical-anonymous-credentials-from-lattices)
### Authors
* Jonathan Bootle, IBM Research Europe, Zurich, Switzerland
* Vadim Lyubashevsky, IBM Research Europe, Zurich, Switzerland
* Alessandro Sorniotti, IBM Research Europe, Zurich, Switzerland
* Ngoc Khanh Nguyen, EPFL, Lausanne, Switzerland
### Abstract
> We present a framework for building practical anonymous credential schemes based on the hardness of lattice problems. The running time of the prover and verifier is independent of the number of users and linear in the number of attributes. The scheme is also compact in practice, with the proofs being as small as a few dozen kilobytes for arbitrarily large (say up to \(2^{128}\)) numbers of users with each user having several attributes. The security of our scheme is based on a new family of lattice assumptions which roughly states that given short pre-images of random elements in some set S, it is hard to create a pre-image for a fresh element in such a set. We show that if the set admits efficient zero-knowledge proofs of knowledge of a commitment to a set element and its pre-image, then this yields practically-efficient privacy-preserving primitives such as blind signatures, anonymous credentials, and group signatures. We propose a candidate instantiation of a function from this family which allows for such proofs and thus yields practical lattice-based primitives.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_13](https://doi.org/10.1007/978-3-031-38545-2_13)
## Anonymous Tokens with Stronger Metadata Bit Hiding from Algebraic MACs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#anonymous-tokens-with-stronger-metadata-bit-hiding-from-algebraic-macs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#anonymous-tokens-with-stronger-metadata-bit-hiding-from-algebraic-macs)
### Authors
* Melissa Chase, Microsoft Research, Redmond, WA, USA
* F. Betül Durak, Microsoft Research, Redmond, WA, USA
* Serge Vaudenay, EPFL, Lausanne, Switzerland
### Abstract
> On the one hand, the web needs to be secured from malicious activities such as bots or DoS attacks; on the other hand, such needs ideally should not justify services tracking people’s activities on the web. Anonymous tokens provide a nice tradeoff between allowing an issuer to ensure that a user has been vetted and protecting the users’ privacy. However, in some cases, whether or not a token is issued reveals a lot of information to an adversary about the strategies used to distinguish honest users from bots or attackers.
> 
> In this work, we focus on designing an anonymous token protocol between a client and an issuer (also a verifier) that enables the issuer to support its fraud detection mechanisms while preserving users’ privacy. This is done by allowing the issuer to embed a hidden (from the client) metadata bit into the tokens. We first study an existing protocol from CRYPTO 2020 which is an extension of Privacy Pass from PoPETs 2018; that protocol aimed to provide support for a hidden metadata bit, but provided a somewhat restricted security notion. We demonstrate a new attack, showing that this is a weakness of the protocol, not just the definition. In particular, the metadata bit hiding is weak in the setting where the attacker can redeem some tokens and get feedback on whether the bit extraction succeeded.
> 
> We then revisit the formalism of anonymous tokens with private metadata bit, consider the more natural notion, and design a scheme which achieves it. In order to design this new secure protocol, we base our construction on algebraic MACs instead of PRFs. Our security definitions capture a realistic threat model where adversaries could, through direct feedback or side channels, learn the embedded bit when the token is redeemed. Finally, we compare our protocol with one of the CRYPTO 2020 protocols. We obtain 20% more efficient performance.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_14](https://doi.org/10.1007/978-3-031-38545-2_14)
## Revisiting Time-Space Tradeoffs for Function Inversion.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#revisiting-time-space-tradeoffs-for-function-inversion)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#revisiting-time-space-tradeoffs-for-function-inversion)
### Authors
* Alexander Golovnev, Georgetown University, Georgetown, USA
* Siyao Guo, NYU Shanghai, Shanghai, China
* Spencer Peters, Cornell University, Ithaca, USA
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
### Abstract
> We study the black-box function inversion problem, which is the problem of finding \(x \in [N]\) such that \(f(x) = y\), given as input some challenge point y in the image of a function \(f : [N] \rightarrow [N]\), using T oracle queries to f and preprocessed advice \(\sigma \in \{0,1\}^S\) depending on f. We prove a number of new results about this problem, as follows.
> 
> 1. We show an algorithm that works for any T and S satisfying
> 
> In the important setting when \(S < T\), this improves on the celebrated algorithm of Fiat and Naor [STOC, 1991], which requires \(T S^3 \gtrsim N^3\). E.g., Fiat and Naor’s algorithm is only non-trivial for \(S \gg N^{2/3}\), while our algorithm gives a non-trivial tradeoff for any \(S \gg N^{1/2}\). (Our algorithm and analysis are quite simple. As a consequence of this, we also give a self-contained and simple proof of Fiat and Naor’s original result, with certain optimizations left out for simplicity.)
> 
> 2. We observe that there is a very simple non-adaptive algorithm (i.e., an algorithm whose ith query \(x_i\) is chosen based entirely on \(\sigma \) and y, and not on the \(f(x_1),\ldots , f(x_{i-1})\)) that improves slightly on the trivial algorithm. It works for any T and S satisfying \( S = \varTheta (N \log (N/T))\), for example, \(T = N /\mathrm {poly\,log}(N)\), \(S = \varTheta (N/\log \log N)\). This answers a question due to Corrigan-Gibbs and Kogan [TCC, 2019], who asked whether non-trivial non-adaptive algorithms exist; namely, algorithms that work with parameters T and S satisfying \(T + S/\log N < o(N)\). We also observe that our non-adaptive algorithm is what we call a guess-and-check algorithm, that is, it is non-adaptive and its final output is always one of the oracle queries \(x_1,\ldots , x_T\).
> 
> For guess-and-check algorithms, we prove a matching lower bound, therefore completely characterizing the achievable parameters (S, T) for this natural class of algorithms. (Corrigan-Gibbs and Kogan showed that any such lower bound for arbitrary non-adaptive algorithms would imply new circuit lower bounds.)
> 
> 3. We show equivalence between function inversion and a natural decision version of the problem in both the worst case and the average case, and similarly for functions \(f : [N] \rightarrow [M]\) with different ranges. Some of these equivalence results are deferred to the full version [ECCC, 2022].
> 
> All of the above results are most naturally described in a model with shared randomness (i.e., random coins shared between the preprocessing algorithm and the online algorithm). However, as an additional contribution, we show (using a technique from communication complexity due to Newman [IPL, 1991]) how to generically convert any algorithm that uses shared randomness into one that does not.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_15](https://doi.org/10.1007/978-3-031-38545-2_15)
## The Query-Complexity of Preprocessing Attacks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#the-query-complexity-of-preprocessing-attacks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#the-query-complexity-of-preprocessing-attacks)
### Authors
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
### Abstract
> A large number of works prove lower bounds on space-time trade-offs in preprocessing attacks, i.e., trade-offs between the size of the advice and the time needed to break a scheme given such advice. We contend that the question of how much time is needed to produce this advice is equally important, and often highly non-trivial. However, this question has received significantly less attention. In this paper, we present lower bounds on the complexity of preprocessing attacks that depend on both offline and online time. As in the case of space-time trade-offs, we focus in particular on settings with ideal primitives, where both the offline and online time-complexities are approximated by the number of queries to the given primitive. We give generic results that highlight the benefits of salting to generically increase the offline costs of preprocessing attacks. The majority of our paper presents several results focusing on salted hash functions. In particular, we provide a fairly involved analysis of the pre-image- and collision-resistance security of the (two-block) Merkle-Damgård construction in our model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_16](https://doi.org/10.1007/978-3-031-38545-2_16)
## Random Oracle Combiners: Breaking the Concatenation Barrier for Collision-Resistance.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#random-oracle-combiners-breaking-the-concatenation-barrier-for-collision-resistance)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#random-oracle-combiners-breaking-the-concatenation-barrier-for-collision-resistance)
### Authors
* Yevgeniy Dodis, New York University, New York, USA
* Eli Goldin, New York University, New York, USA
* Peter Hall, New York University, New York, USA
* Niels Ferguson, Microsoft, Redmond, USA
* Krzysztof Pietrzak, IST, Klosterneuburg, Austria
### Abstract
> Suppose we have two hash functions \(h_1\) and \(h_2\), but we trust the security of only one of them. To mitigate this worry, we wish to build a hash combiner \(C^{h_1, h_2}\) which is secure so long as one of the underlying hash functions is. This question has been well-studied in the regime of collision resistance. In this case, concatenating the two hash function outputs clearly works. Unfortunately, a long series of works (Boneh and Boyen, CRYPTO’06; Pietrzak, Eurocrypt’07; Pietrzak, CRYPTO’08) showed no (noticeably) shorter combiner for collision resistance is possible.
> 
> In this work, we revisit this pessimistic state of affairs, motivated by the observation that collision-resistance is insufficient for many interesting applications of cryptographic hash functions anyway. We argue the right formulation of the “hash combiner” is to build what we call random oracle (RO) combiners, utilizing stronger assumptions for stronger constructions.
> 
> Indeed, we circumvent the previous lower bounds for collision resistance by constructing a simple length-preserving RO combiner
> 
> where \(\mathcal {Z}_1, \mathcal {Z}_2\) are random salts of appropriate length. We show that this extra randomness is necessary for RO combiners, and indeed our construction is somewhat tight with this lower bound.
> 
> On the negative side, we show that one cannot generically apply the composition theorem to further replace “monolithic” hash functions \(h_1\) and \(h_2\) by some simpler indifferentiable construction (such as the Merkle-Damgård transformation) from smaller components, such as fixed-length compression functions. Finally, despite this issue, we directly prove collision resistance of the Merkle-Damgård variant of our combiner, where \(h_1\) and \(h_2\) are replaced by iterative Merkle-Damgård hashes applied to a fixed-length compression function. Thus, we can still subvert the concatenation barrier for collision-resistance combiners while utilizing practically small fixed-length components underneath.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_17](https://doi.org/10.1007/978-3-031-38545-2_17)
## Individual Cryptography.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#individual-cryptography)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#individual-cryptography)
### Authors
* Stefan Dziembowski, University of Warsaw, Warsaw, Poland
* Tomasz Lizurej, University of Warsaw, Warsaw, Poland
* Stefan Dziembowski, IDEAS NCBR, Warsaw, Poland
* Tomasz Lizurej, IDEAS NCBR, Warsaw, Poland
* Sebastian Faust, TU Darmstadt, Darmstadt, Germany
### Abstract
> We initiate a formal study of individual cryptography. Informally speaking, an algorithm \(\textsf{Alg}\) is individual if, in every implementation of \(\textsf{Alg}\), there always exists an individual user with full knowledge of the cryptographic data S used by \(\textsf{Alg}\). In particular, it should be infeasible to design implementations of this algorithm that would hide S by distributing it between a group of parties using an MPC protocol or outsourcing it to a trusted execution environment.
> 
> We define and construct two primitives in this model. The first one, called proofs of individual knowledge, is a tool for proving that a given message is fully known to a single (“individual”) machine on the Internet, i.e., it cannot be shared between a group of parties. The second one, dubbed individual secret sharing, is a scheme for sharing a secret S between a group of parties so that the parties have no knowledge of S as long as they do not reconstruct it. The reconstruction ensures that if the shareholders attempt to collude, one of them will learn the secret entirely. Individual secret sharing has applications for preventing collusion in secret sharing. A central technique for constructing individual cryptographic primitives is the concept of MPC hardness. MPC hardness precludes an adversary from completing a cryptographic task in a distributed fashion within a specific time frame.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_18](https://doi.org/10.1007/978-3-031-38545-2_18)
## Extractors: Low Entropy Requirements Colliding with Non-malleability.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#extractors-low-entropy-requirements-colliding-with-non-malleability)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#extractors-low-entropy-requirements-colliding-with-non-malleability)
### Authors
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Eldon Chung, Centre for Quantum Technologies, Singapore, Singapore
### Abstract
> Two-source extractors are deterministic functions that, given two independent weak sources of randomness, output a (close to) uniformly random string of bits. Cheraghchi and Guruswami (TCC 2015) introduced two-source non-malleable extractors that combine the properties of randomness extraction with tamper resilience. Two-source non-malleable extractors have since then attracted a lot of attention, and have very quickly become fundamental objects in cryptosystems involving communication channels that cannot be fully trusted. Various applications of two-source non-malleable extractors include in particular non-malleable codes, non-malleable commitments, non-malleable secret sharing, network extraction, and privacy amplification with tamperable memory.
> 
> The best known constructions of two-source non-malleable extractors are due to Chattopadhyay, Goyal, and Li (STOC 2016), Li (STOC 2017), and Li (CCC 2019). All of these constructions require both sources to have min-entropy at least 0.99n, where n is the bit-length of each source.
> 
> In this work, we introduce collision-resistant randomness extractors. This allows us to design a compiler that, given a two-source non-malleable extractor, and a collision-resistant extractor, outputs a two-source non-malleable extractor that inherits the non-malleability property from the non-malleable extractor, and the entropy requirement from the collision-resistant extractor. Nested application of this compiler leads to a dramatic improvement of the state-of-the-art mentioned above. We obtain a construction of a two-source non-malleable extractor where one source is required to have min-entropy greater than 0.8n, and the other source is required to have only \(\text {polylog} (n)\) min-entropy. Moreover, the other parameters of our construction, i.e., the output length, and the error remain comparable to prior constructions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_19](https://doi.org/10.1007/978-3-031-38545-2_19)
## PAC Privacy: Automatic Privacy Measurement and Control of Data Processing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#pac-privacy-automatic-privacy-measurement-and-control-of-data-processing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#pac-privacy-automatic-privacy-measurement-and-control-of-data-processing)
### Authors
* Hanshen Xiao, MIT, Cambridge, USA
* Srinivas Devadas, MIT, Cambridge, USA
### Abstract
> We propose and study a new privacy definition, termed Probably Approximately Correct (PAC) Privacy. PAC Privacy characterizes the information-theoretic hardness to recover sensitive data given arbitrary information disclosure/leakage during/after any processing. Unlike the classic cryptographic definition and Differential Privacy (DP), which consider the adversarial (input-independent) worst case, PAC Privacy is a simulatable metric that quantifies the instance-based impossibility of inference. A fully automatic analysis and proof generation framework is proposed: security parameters can be produced with arbitrarily high confidence via Monte-Carlo simulation for any black-box data processing oracle. This appealing automation property enables analysis of complicated data processing, where the worst-case proof in the classic privacy regime could be loose or even intractable. Moreover, we show that the produced PAC Privacy guarantees enjoy simple composition bounds and the automatic analysis framework can be implemented in an online fashion to analyze the composite PAC Privacy loss even under correlated randomness. On the utility side, the magnitude of (necessary) perturbation required in PAC Privacy is not lower bounded by \({\varTheta }(\sqrt{d})\) for a d-dimensional release but could be O(1) for many practical data processing tasks, which is in contrast to the input-independent worst-case information-theoretic lower bound. Example applications of PAC Privacy are included with comparisons to existing works.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_20](https://doi.org/10.1007/978-3-031-38545-2_20)
## One-Way Functions and the Hardness of (Probabilistic) Time-Bounded Kolmogorov Complexity w.r.t. Samplable Distributions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#one-way-functions-and-the-hardness-of-probabilistic-time-bounded-kolmogorov-complexity-w-r-t-samplable-distributions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#one-way-functions-and-the-hardness-of-probabilistic-time-bounded-kolmogorov-complexity-w-r-t-samplable-distributions)
### Authors
* Yanyi Liu, Cornell Tech, New York, USA
* Rafael Pass, Tel-Aviv University & Cornell Tech, Tel Aviv, Israel
### Abstract
> Consider the recently introduced notion of probabilistic time-bounded Kolmogorov Complexity, \(pK^t\) (Goldberg et al., CCC’22), and let \(\textsf{MpK}^t\textsf{P}\) denote the language of pairs (x, k) such that \(pK^t(x) \le k\). We show the equivalence of the following:
> 
> \(\textsf{MpK}^\textsf{poly}\textsf{P}\) is (mildly) hard-on-average w.r.t. any samplable distribution \(\mathcal {D}\);
> 
> \(\textsf{MpK}^\textsf{poly}\textsf{P}\) is (mildly) hard-on-average w.r.t. the uniform distribution;
> 
> existence of one-way functions.
> 
> As far as we know, this yields the first natural class of problems where hardness with respect to any samplable distribution is equivalent to hardness with respect to the uniform distribution.
> 
> Under standard derandomization assumptions, we can show the same result also w.r.t. the standard notion of time-bounded Kolmogorov complexity, \(K^t\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_21](https://doi.org/10.1007/978-3-031-38545-2_21)
## Universal Amplification of KDM Security: From 1-Key Circular to Multi-Key KDM.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#universal-amplification-of-kdm-security-from-1-key-circular-to-multi-key-kdm)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#universal-amplification-of-kdm-security-from-1-key-circular-to-multi-key-kdm)
### Authors
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
* Daniel Wichs, NTT Research, Sunnyvale, CA, USA
* Daniel Wichs, Northeastern University, Boston, MA, USA
### Abstract
> An encryption scheme is Key Dependent Message (KDM) secure if it is safe to encrypt messages that can arbitrarily depend on the secret keys themselves. In this work, we show how to upgrade essentially the weakest form of KDM security into the strongest one. In particular, we assume the existence of a symmetric-key bit-encryption that is circular-secure in the 1-key setting, meaning that it maintains security even if one can encrypt individual bits of a single secret key under itself. We also rely on a standard CPA-secure public-key encryption. We construct a public-key encryption scheme that is KDM secure for general functions (of a-priori bounded circuit size) in the multi-key setting, meaning that it maintains security even if one can encrypt arbitrary functions of arbitrarily many secret keys under each of the public keys. As a special case, the latter guarantees security in the presence of arbitrary length key cycles. Prior work already showed how to amplify n-key circular to n-key KDM security for general functions. Therefore, the main novelty of our work is to upgrade from 1-key to n-key security for arbitrary n.
> 
> As an independently interesting feature of our result, our construction does not need to know the actual specification of the underlying 1-key circular secure scheme, and we only rely on the existence of some such scheme in the proof of security. In particular, we present a universal construction of a multi-key KDM-secure encryption that is secure as long as some 1-key circular-secure scheme exists. While this feature is similar in spirit to Levin’s universal construction of one-way functions, the way we achieve it is quite different technically, and does not come with the same “galactic inefficiency”.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_22](https://doi.org/10.1007/978-3-031-38545-2_22)
## Improved Multi-user Security Using the Squared-Ratio Method.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#improved-multi-user-security-using-the-squared-ratio-method)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#improved-multi-user-security-using-the-squared-ratio-method)
### Authors
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
* Wonseok Choi, Purdue University, West Lafayette, IN, USA
* Changmin Lee, KIAS, Seoul, Korea
### Abstract
> Proving security bounds in contexts with a large number of users is one of the central problems in symmetric-key cryptography today. This paper introduces a new method for information-theoretic multi-user security proofs, called “the Squared-Ratio method”. At its core, the method requires the expectation of the square of the ratio of observing the so-called good transcripts (from Patarin’s H-coefficient technique) in the real and the ideal world. Central to the method is the observation that for information-theoretic adversaries, the KL-divergence for the multi-user security bound can be written as a summation of the KL-divergence of every single user.
> 
> We showcase the Squared-Ratio method on three examples: the Xor of two Permutations by Bellare et al. (EUROCRYPT ’98) and Hall et al. (CRYPTO ’98), the Encrypted Davies-Mayer by Cogliati and Seurin (CRYPTO ’16), and the two permutation variant of the nEHtM MAC algorithm by Dutta et al. (EUROCRYPT ’19). With this new tool, we provide improved bounds for the multi-user security of these constructions. Our approach is modular in the sense that the multi-user security can be obtained directly from single-user results.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_23](https://doi.org/10.1007/978-3-031-38545-2_23)
## The Power of Undirected Rewindings for Adaptive Security.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#the-power-of-undirected-rewindings-for-adaptive-security)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#the-power-of-undirected-rewindings-for-adaptive-security)
### Authors
* Dennis Hofheinz, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Julia Kastner, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Karen Klein, Department of Computer Science, ETH Zurich, Zürich, Switzerland
### Abstract
> Existing proofs of adaptive security (e.g., in settings in which decryption keys are adaptively revealed) often rely on guessing arguments. Such guessing arguments can be simple (and, e.g., just involve guessing which keys are revealed), or more complex “partitioning” arguments. Since guessing directly and negatively impacts the loss of the corresponding security reduction, this leads to black-box lower bounds for a number of cryptographic scenarios that involve adaptive security.
> 
> In this work, we provide an alternative to such guessing arguments: instead of guessing in a security reduction which adaptive choices an adversary \(\mathcal {A} \) makes, we rewind \(\mathcal {A} \) many times until we can successfully embed a given computational challenge. The main benefit of using rewindings is that these rewindings can be arranged sequentially, and the corresponding reduction loss only accumulates additively (instead of multiplicatively, as with guessing). The main technical challenge is to show that \(\mathcal {A} \)’s success is not negatively affected after (potentially many) rewindings. To this end, we develop a machinery for “undirected ” rewindings that preserve \(\mathcal {A} \)’s success across (potentially many) rewindings.
> 
> We use this strategy to show
> 
> security of the “Logical Key Hierarchy” protocol underlying the popular TreeKEM key management protocol, and
> 
> security of the Goldreich-Goldwasser-Micali (GGM) pseudorandom function (PRF) as a prefix-constrained PRF.
> 
> In both cases, we provide the first polynomial reductions to standard assumptions (i.e., to IND-CPA and PRG security, respectively), and in case of the GGM PRF, we also circumvent an existing lower bound.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_24](https://doi.org/10.1007/978-3-031-38545-2_24)
## Anamorphic Signatures: Secrecy from a Dictator Who Only Permits Authentication!
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-2].md#anamorphic-signatures-secrecy-from-a-dictator-who-only-permits-authentication)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#anamorphic-signatures-secrecy-from-a-dictator-who-only-permits-authentication)
### Authors
* Mirosław Kutyłowski, Wrocław University of Science and Technology, Wrocław, Poland
* Marcin Zawada, Wrocław University of Science and Technology, Wrocław, Poland
* Giuseppe Persiano, Università di Salerno, Fisciano, Italy
* Giuseppe Persiano, Google LLC, New York City, USA
* Moti Yung, Google LLC, New York City, USA
* Duong Hieu Phan, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Moti Yung, Columbia University, New York, USA
* Mirosław Kutyłowski, NASK -National Research Institute, Warsaw, Poland
### Abstract
> The goal of this research is to raise technical doubts regarding the usefulness of the repeated attempts by governments to curb Cryptography (aka the “Crypto Wars”), and argue that they, in fact, cause more damage than adding effective control. The notion of Anamorphic Encryption was presented in Eurocrypt’22 for a similar aim. There, despite the presence of a Dictator who possesses all keys and knows all messages, parties can arrange a hidden “anamorphic” message in an otherwise indistinguishable from regular ciphertexts (wrt the Dictator).
> 
> In this work, we postulate a stronger cryptographic control setting where encryption does not exist (or is neutralized) since all communication is passed through the Dictator in, essentially, cleartext mode (or otherwise, when secure channels to and from the Dictator are the only confidentiality mechanism). Messages are only authenticated to assure recipients of the identity of the sender. We ask whether security against the Dictator still exists, even under such a strict regime which allows only authentication (i.e., authenticated/ signed messages) to pass end-to-end, and where received messages are determined by/ known to the Dictator, and the Dictator also eventually gets all keys to verify compliance of past signing. To frustrate the Dictator, this authenticated message setting gives rise to the possible notion of anamorphic channels inside signature and authentication schemes, where parties attempt to send undetectable secure messages (or other values) using signature tags which are indistinguishable from regular tags. We define and present implementation of schemes for anamorphic signature and authentication; these are applicable to existing and standardized signature and authentication schemes which were designed independently of the notion of anamorphic messages. Further, some cornerstone constructions of the foundations of signatures, in fact, introduce anamorphism.
> 
> The extended version of this paper, including extra results and proofs, is available as [17].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_25](https://doi.org/10.1007/978-3-031-38545-2_25)
