# Crypto 22-4
## Sharing Transformation and Dishonest Majority MPC with Packed Secret Sharing.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#sharing-transformation-and-dishonest-majority-mpc-with-packed-secret-sharing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#sharing-transformation-and-dishonest-majority-mpc-with-packed-secret-sharing)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, PA, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, PA, USA
* Vipul Goyal, NTT Research, Sunnyvale, CA, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York, NY, USA
### 摘要
> In the last few years, the efficiency of secure multi-party computation (MPC) in the dishonest majority setting has increased by several orders of magnitudes starting with the SPDZ protocol family which offers a speedy information-theoretic online phase in the prepossessing model. However, state-of-the-art n-party MPC protocols in the dishonest majority setting incur online communication complexity per multiplication gate which is linear in the number of parties, i.e. O(n), per gate across all parties. In this work, we construct the first MPC protocols in the preprocessing model for dishonest majority with sub-linear communication complexity per gate in the number of parties n. To achieve our results, we extend the use of packed secret sharing to the dishonest majority setting. For a constant fraction of corrupted parties (i.e. if 99 percent of the parties are corrupt), we can achieve a communication complexity of O(1) field elements per multiplication gate across all parties.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_1](https://doi.org/10.1007/978-3-031-15985-5_1)
## Verifiable Relation Sharing and Multi-verifier Zero-Knowledge in Two Rounds: Trading NIZKs with Honest Majority - (Extended Abstract).
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#verifiable-relation-sharing-and-multi-verifier-zero-knowledge-in-two-rounds-trading-nizks-with-honest-majority-extended-abstract) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#verifiable-relation-sharing-and-multi-verifier-zero-knowledge-in-two-rounds-trading-nizks-with-honest-majority-extended-abstract)**
### 作者
* Benny Applebaum, Tel-Aviv University, Tel-Aviv, Israel
* Eliran Kachlon, Tel-Aviv University, Tel-Aviv, Israel
* Arpita Patra, Indian Institute of Science, Bangalore, India
### 摘要
> We introduce the problem of Verifiable Relation Sharing (VRS) where a client (prover) wishes to share a vector of secret data items among k servers (the verifiers) while proving in zero-knowledge that the shared data satisfies some properties. This combined task of sharing and proving generalizes notions like verifiable secret sharing and zero-knowledge proofs over secret-shared data. We study VRS from a theoretical perspective and focus on its round complexity.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_2](https://doi.org/10.1007/978-3-031-15985-5_2)
## Authenticated Garbling from Simple Correlations.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#authenticated-garbling-from-simple-correlations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#authenticated-garbling-from-simple-correlations)**
### 作者
* Samuel Dittmer, Stealth Software Technologies, Inc., Los Angeles, USA
* Steve Lu, Stealth Software Technologies, Inc., Los Angeles, USA
* Rafail Ostrovsky, Stealth Software Technologies, Inc., Los Angeles, USA
* Yuval Ishai, Technion - Israel Institute of Technology, Haifa, Israel
* Rafail Ostrovsky, University of California, Los Angeles, Los Angeles, USA
### 摘要
> We revisit the problem of constant-round malicious secure two-party computation by considering the use of simple correlations, namely sources of correlated randomness that can be securely generated with sublinear communication complexity and good concrete efficiency. The current state-of-the-art protocol of Katz et al. (Crypto 2018) achieves malicious security by realizing a variant of the authenticated garbling functionality of Wang et al. (CCS 2017). Given oblivious transfer correlations, the communication cost of this protocol (with 40 bits of statistical security) is comparable to roughly 10 garbled circuits (GCs). This protocol inherently requires more than 2 rounds of interaction.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_3](https://doi.org/10.1007/978-3-031-15985-5_3)
## Dynamic Local Searchable Symmetric Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#dynamic-local-searchable-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#dynamic-local-searchable-symmetric-encryption)**
### 作者
* Brice Minaud, DIENS, École normale supérieure, PSL University, CNRS, INRIA, 75005, Paris, France
* Michael Reichle, DIENS, École normale supérieure, PSL University, CNRS, INRIA, 75005, Paris, France
### 摘要
> In this article, we tackle for the first time the problem of dynamic memory-efficient Searchable Symmetric Encryption (SSE). In the term “memory-efficient” SSE, we encompass both the goals of local SSE, and page-efficient SSE. The centerpiece of our approach is a novel connection between those two goals. We introduce a map, called the Generic Local Transform, which takes as input a page-efficient SSE scheme with certain special features, and outputs an SSE scheme with strong locality properties. We obtain several results. (1) First, for page-efficient SSE with page size p, we build a dynamic scheme with storage efficiency \(\mathcal {O}({1})\) and page efficiency \(\widetilde{\mathcal {O}}\left( {\textrm{log}\, \textrm{log}\, (N/p)}\right) \), called \(\textsf{LayeredSSE}\). The main technical innovation behind \(\textsf{LayeredSSE}\) is a novel weighted extension of the two-choice allocation process, of independent interest. (2) Second, we introduce the Generic Local Transform, and combine it with \(\textsf{LayeredSSE}\) to build a dynamic SSE scheme with storage efficiency \(\mathcal {O}({1})\), locality \(\mathcal {O}({1})\), and read efficiency \(\widetilde{\mathcal {O}}\left( {\textrm{log}\,\textrm{log}\, N}\right) \), under the condition that the longest list is of size \(\mathcal {O}({N^{1-1/\textrm{log}\, \textrm{log}\, \lambda }})\). This matches, in every respect, the purely static construction of Asharov et al. presented at STOC 2016: dynamism comes at no extra cost. (3) Finally, by applying the Generic Local Transform to a variant of the Tethys scheme by Bossuat et al. from Crypto 2021, we build an unconditional static SSE with storage efficiency \(\mathcal {O}({1})\), locality \(\mathcal {O}({1})\), and read efficiency \(\mathcal {O}({\textrm{log}^\varepsilon N})\), for an arbitrarily small constant \(\varepsilon > 0\). To our knowledge, this is the construction that comes closest to the lower bound presented by Cash and Tessaro at Eurocrypt 2014.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_4](https://doi.org/10.1007/978-3-031-15985-5_4)
## Programmable Distributed Point Functions.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#programmable-distributed-point-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#programmable-distributed-point-functions)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Niv Gilboa, Ben-Gurion University, Be’er Sheva, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Victor I. Kolobov, Technion, Haifa, Israel
### 摘要
> A distributed point function (DPF) is a cryptographic primitive that enables compressed additive sharing of a secret unit vector across two or more parties. Despite growing ubiquity within applications and notable research efforts, the best 2-party DPF construction to date remains the tree-based construction from (Boyle et al., CCS’16), with no significantly new approaches since.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_5](https://doi.org/10.1007/978-3-031-15985-5_5)
## Snapshot-Oblivious RAMs: Sub-logarithmic Efficiency for Short Transcripts.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#snapshot-oblivious-rams-sub-logarithmic-efficiency-for-short-transcripts) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#snapshot-oblivious-rams-sub-logarithmic-efficiency-for-short-transcripts)**
### 作者
* Yang Du, University of Michigan, Ann Arbor, USA
* Paul Grubbs, University of Michigan, Ann Arbor, USA
* Daniel Genkin, Georgia Tech, Atlanta, USA
### 摘要
> Oblivious RAM (ORAM) is a powerful technique to prevent harmful data breaches. Despite tremendous progress in improving the concrete performance of ORAM, it remains too slow for use in many practical settings; recent breakthroughs in lower bounds indicate this inefficiency is inherent for ORAM and even some natural relaxations.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_6](https://doi.org/10.1007/978-3-031-15985-5_6)
## Tight Preimage Resistance of the Sponge Construction.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#tight-preimage-resistance-of-the-sponge-construction) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#tight-preimage-resistance-of-the-sponge-construction)**
### 作者
* Charlotte Lefevre, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> The cryptographic sponge is a popular method for hash function design. The construction is in the ideal permutation model proven to be indifferentiable from a random oracle up to the birthday bound in the capacity of the sponge. This result in particular implies that, as long as the attack complexity does not exceed this bound, the sponge construction achieves a comparable level of collision, preimage, and second preimage resistance as a random oracle. We investigate these state-of-the-art bounds in detail, and observe that while the collision and second preimage security bounds are tight, the preimage bound is not tight. We derive an improved and tight preimage security bound for the cryptographic sponge construction.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_7](https://doi.org/10.1007/978-3-031-15985-5_7)
## Block-Cipher-Based Tree Hashing.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#block-cipher-based-tree-hashing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#block-cipher-based-tree-hashing)**
### 作者
* Aldo Gunsing, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> First of all we take a thorough look at an error in a paper by Daemen et al. (ToSC 2018) which looks at minimal requirements for tree-based hashing based on multiple primitives, including block ciphers. This reveals that the error is more fundamental than previously shown by Gunsing et al. (ToSC 2020), which is mainly interested in its effect on the security bounds. It turns out that the cause for the error is due to an essential oversight in the interaction between the different oracles used in the indifferentiability proofs. In essence, it reduces the claim from the normal indifferentiability setting to the weaker sequential indifferentiability one. As a matter of fact, this error appeared in multiple earlier indifferentiability papers, including the optimal indifferentiability of the sum of permutations (EUROCRYPT 2018) and the recent \(\textrm{ABR}^+\) construction (EUROCRYPT 2021). We discuss in detail how this oversight is caused and how it can be avoided.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_8](https://doi.org/10.1007/978-3-031-15985-5_8)
## Provably Secure Reflection Ciphers.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#provably-secure-reflection-ciphers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#provably-secure-reflection-ciphers)**
### 作者
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> This paper provides the first analysis of reflection ciphers such as Prince from a provable security viewpoint.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_9](https://doi.org/10.1007/978-3-031-15985-5_9)
## Overloading the Nonce: Rugged PRPs, Nonce-Set AEAD, and Order-Resilient Channels.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#overloading-the-nonce-rugged-prps-nonce-set-aead-and-order-resilient-channels) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#overloading-the-nonce-rugged-prps-nonce-set-aead-and-order-resilient-channels)**
### 作者
* Jean Paul Degabriele, Technology Innovation Institute, Abu Dhabi, UAE
* Jean Paul Degabriele, Technische Universität Darmstadt, Darmstadt, Germany
* Vukašin Karadžić, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> We introduce a new security notion that lies right in between pseudorandom permutations (PRPs) and strong pseudorandom permutations (SPRPs). We call this new security notion and any (tweakable) cipher that satisfies it a rugged pseudorandom permutation (RPRP). Rugged pseudorandom permutations lend themselves to some interesting applications, have practical benefits, and lead to novel cryptographic constructions. Our focus is on variable-length tweakable RPRPs, and analogous to the encode-then-encipher paradigm of Bellare and Rogaway, we can generically transform any such cipher into different AEAD schemes with varying security properties. However, the benefit of RPRPs is that they can be constructed more efficiently as they are weaker primitives than SPRPs (the notion traditionally required by the encode-then-encipher paradigm). We can construct RPRPs using only two layers of processing, whereas SPRPs typically require three layers of processing over the input data. We also identify a new transformation that yields RUP-secure AEAD schemes with more compact ciphertexts than previously known. Further extending this approach, we arrive at a new generalized notion of authenticated encryption and a matching construction, which we refer to as nonce-set AEAD. Nonce-set AEAD is particularly well-suited in the context of secure channels, like QUIC and DTLS, that operate over unreliable transports and employ a window mechanism at the receiver’s end of the channel. We conclude by presenting a generic construction for transforming a nonce-set AEAD scheme into an order-resilient secure channel. Our channel construction sheds new light on order-resilient channels and additionally leads to more compact ciphertexts when instantiated from RPRPs.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_10](https://doi.org/10.1007/978-3-031-15985-5_10)
## Orion: Zero Knowledge Proof with Linear Prover Time.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#orion-zero-knowledge-proof-with-linear-prover-time) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#orion-zero-knowledge-proof-with-linear-prover-time)**
### 作者
* Tiancheng Xie, University of California, Berkeley, Berkeley, USA
* Dawn Song, University of California, Berkeley, Berkeley, USA
* Yupeng Zhang, Texas A &M University, College Station, USA
### 摘要
> Zero-knowledge proof is a powerful cryptographic primitive that has found various applications in the real world. However, existing schemes with succinct proof size suffer from a high overhead on the proof generation time that is super-linear in the size of the statement represented as an arithmetic circuit, limiting their efficiency and scalability in practice. In this paper, we present Orion, a new zero-knowledge argument system that achieves O(N) prover time of field operations and hash functions and \(O(\log ^2 N)\) proof size. Orion is concretely efficient and our implementation shows that the prover time is 3.09 s and the proof size is 1.5 MB for a circuit with \(2^{20}\) multiplication gates. The prover time is the fastest among all existing succinct proof systems, and the proof size is an order of magnitude smaller than a recent scheme proposed in Golovnev et al. 2021.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_11](https://doi.org/10.1007/978-3-031-15985-5_11)
## Moz$\mathbb {Z}_{2^k}$arella: Efficient Vector-OLE and Zero-Knowledge Proofs over $\mathbb {Z}_{2^k}$.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#moz-mathbb-z-2-k-arella-efficient-vector-ole-and-zero-knowledge-proofs-over-mathbb-z-2-k) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#moz-mathbb-z-2-k-arella-efficient-vector-ole-and-zero-knowledge-proofs-over-mathbb-z-2-k)**
### 作者
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Lennart Braun, Aarhus University, Aarhus, Denmark
* Alexander Munch-Hansen, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> Zero-knowledge proof systems are usually designed to support computations for circuits over \(\mathbb {F}_2\) or \(\mathbb {F}_p\) for large p, but not for computations over \(\mathbb {Z}_{2^k}\), which all modern CPUs operate on. Although \(\mathbb {Z}_{2^k}\)-arithmetic can be emulated using prime moduli, this comes with an unavoidable overhead. Recently, Baum et al. (CCS 2021) suggested a candidate construction for a designated-verifier zero-knowledge proof system that natively runs over \(\mathbb {Z}_{2^k}\). Unfortunately, their construction requires preprocessed random vector oblivious linear evaluation (VOLE) to be instantiated over \(\mathbb {Z}_{2^k}\). Currently, it is not known how to efficiently generate such random VOLE in large quantities.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_12](https://doi.org/10.1007/978-3-031-15985-5_12)
## Nova: Recursive Zero-Knowledge Arguments from Folding Schemes.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#nova-recursive-zero-knowledge-arguments-from-folding-schemes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#nova-recursive-zero-knowledge-arguments-from-folding-schemes)**
### 作者
* Abhiram Kothapalli, Carnegie Mellon University, Pittsburgh, USA
* Srinath Setty, Microsoft Research, Redmond, USA
* Ioanna Tzialla, New York University, New York, USA
### 摘要
> We introduce a new approach to realize incrementally verifiable computation (IVC), in which the prover recursively proves the correct execution of incremental computations of the form \(y=F^{(\ell )}(x)\), where F is a (potentially non-deterministic) computation, x is the input, y is the output, and \(\ell > 0\). Unlike prior approaches to realize IVC, our approach avoids succinct non-interactive arguments of knowledge (SNARKs) entirely and arguments of knowledge in general. Instead, we introduce and employ folding schemes, a weaker, simpler, and more efficiently-realizable primitive, which reduces the task of checking two instances in some relation to the task of checking a single instance. We construct a folding scheme for a characterization of NP and show that it implies an IVC scheme with improved efficiency characteristics: (1) the “recursion overhead” (i.e., the number of steps that the prover proves in addition to proving the execution of F) is a constant and it is dominated by two group scalar multiplications expressed as a circuit (this is the smallest recursion overhead in the literature), and (2) the prover’s work at each step is dominated by two multiexponentiations of size O(|F|), providing the fastest prover in the literature. The size of a proof is O(|F|) group elements, but we show that using a variant of an existing zkSNARK, the prover can prove the knowledge of a valid proof succinctly and in zero-knowledge with \(O(\log {|F|})\) group elements. Finally, our approach neither requires a trusted setup nor FFTs, so it can be instantiated efficiently with any cycles of elliptic curves where DLOG is hard.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_13](https://doi.org/10.1007/978-3-031-15985-5_13)
## A New Approach to Efficient Non-Malleable Zero-Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#a-new-approach-to-efficient-non-malleable-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#a-new-approach-to-efficient-non-malleable-zero-knowledge)**
### 作者
* Allen Kim, Stony Brook University, Stony Brook, USA
* Xiao Liang, Stony Brook University, Stony Brook, USA
* Omkant Pandey, Stony Brook University, Stony Brook, USA
### 摘要
> Non-malleable zero-knowledge, originally introduced in the context of man-in-the-middle attacks, serves as an important building block to protect against concurrent attacks where different protocols may coexist and interleave. While this primitive admits almost optimal constructions in the plain model, they are several orders of magnitude slower in practice than standalone zero-knowledge. This is in sharp contrast to non-malleable commitments where practical constructions (under the DDH assumption) have been known for a while.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_14](https://doi.org/10.1007/978-3-031-15985-5_14)
## An Algebraic Framework for Silent Preprocessing with Trustless Setup and Active Security.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#an-algebraic-framework-for-silent-preprocessing-with-trustless-setup-and-active-security) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#an-algebraic-framework-for-silent-preprocessing-with-trustless-setup-and-active-security)**
### 作者
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> Recently, number-theoretic assumptions including DDH, DCR and QR have been used to build powerful tools for secure computation, in the form of homomorphic secret-sharing (HSS), which leads to secure two-party computation protocols with succinct communication, and pseudorandom correlation functions (PCFs), which allow non-interactive generation of a large quantity of correlated randomness. In this work, we present a group-theoretic framework for these classes of constructions, which unifies their approach to computing distributed discrete logarithms in various groups. We cast existing constructions in our framework, and also present new constructions, including one based on class groups of imaginary quadratic fields. This leads to the first construction of two-party homomorphic secret sharing for branching programs from class group assumptions.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_15](https://doi.org/10.1007/978-3-031-15985-5_15)
## Quadratic Multiparty Randomized Encodings Beyond Honest Majority and Their Applications.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#quadratic-multiparty-randomized-encodings-beyond-honest-majority-and-their-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#quadratic-multiparty-randomized-encodings-beyond-honest-majority-and-their-applications)**
### 作者
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Or Karni, Tel Aviv University, Tel Aviv, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Arpita Patra, Indian Institute of Science, Bangalore, India
### 摘要
> Multiparty randomized encodings (Applebaum, Brakerski, and Tsabary, SICOMP 2021) reduce the task of securely computing a complicated multiparty functionality f to the task of securely computing a simpler functionality g. The reduction is non-interactive and preserves information-theoretic security against a passive (semi-honest) adversary, also referred to as privacy. The special case of a degree-2 encoding g (2MPRE) has recently found several applications to secure multiparty computation (MPC) with either information-theoretic security or making black-box access to cryptographic primitives. Unfortunately, as all known constructions are based on information-theoretic MPC protocols in the plain model, they can only be private with an honest majority.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_16](https://doi.org/10.1007/978-3-031-15985-5_16)
## Tight Bounds on the Randomness Complexity of Secure Multiparty Computation.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#tight-bounds-on-the-randomness-complexity-of-secure-multiparty-computation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#tight-bounds-on-the-randomness-complexity-of-secure-multiparty-computation)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Yuval Ishai, Technion, Haifa, Israel
### 摘要
> We revisit the question of minimizing the randomness complexity of protocols for secure multiparty computation (MPC) in the setting of perfect information-theoretic security. Kushilevitz and Mansour (SIAM J. Discret. Math., 1997) studied the case of n-party semi-honest MPC for the XOR function with security threshold \(t<n\), showing that \(O(t^2\log (n/t))\) random bits are sufficient and \(\varOmega (t)\) random bits are necessary. Their positive result was obtained via a non-explicit protocol, whose existence was proved using the probabilistic method.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_17](https://doi.org/10.1007/978-3-031-15985-5_17)
## Better than Advertised Security for Non-interactive Threshold Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#better-than-advertised-security-for-non-interactive-threshold-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#better-than-advertised-security-for-non-interactive-threshold-signatures)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, La Jolla, USA
* Elizabeth Crites, University of Edinburgh, Edinburgh, UK
* Chelsea Komlo, University of Waterloo, Zcash Foundation, Waterloo, Canada
* Mary Maller, Ethereum Foundation, London, UK
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> We give a unified syntax, and a hierarchy of definitions of security of increasing strength, for non-interactive threshold signature schemes. These are schemes having a single-round signing protocol, possibly with one prior round of message-independent pre-processing. We fit FROST1 and BLS, which are leading practical schemes, into our hierarchy, in particular showing they meet stronger security definitions than they have been shown to meet so far. We also fit in our hierarchy a more efficient version FROST2 of FROST1 that we give. These definitions and results, for simplicity, all assume trusted key generation. Finally, we prove the security of FROST2 with key generation performed by an efficient distributed key generation protocol.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_18](https://doi.org/10.1007/978-3-031-15985-5_18)
## Threshold Signatures with Private Accountability.
🌍 [English](../../../docs/en/Crypto/Crypto%2022-4.md#threshold-signatures-with-private-accountability) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-4.md#threshold-signatures-with-private-accountability)**
### 作者
* Dan Boneh, Stanford University, Stanford, USA
* Chelsea Komlo, University of Waterloo, Waterloo, Canada
### 摘要
> Existing threshold signature schemes come in two flavors: (i) fully private, where the signature reveals nothing about the set of signers that generated the signature, and (ii) accountable, where the signature completely identifies the set of signers. In this paper we propose a new type of threshold signature, called TAPS, that is a hybrid of privacy and accountability. A TAPS signature is fully private from the public’s point of view. However, an entity that has a secret tracing key can trace a signature to the threshold of signers that generated it. A TAPS makes it possible for an organization to keep its inner workings private, while ensuring that signers are accountable for their actions. We construct a number of TAPS schemes. First, we present a generic construction that builds a TAPS from any accountable threshold signature. This generic construction is not efficient, and we next focus on efficient schemes based on standard assumptions. We build two efficient TAPS schemes (in the random oracle model) based on the Schnorr signature scheme. We conclude with a number of open problems relating to efficient TAPS.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_19](https://doi.org/10.1007/978-3-031-15985-5_19)
