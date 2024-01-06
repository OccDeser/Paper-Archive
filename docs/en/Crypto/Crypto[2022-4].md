# Crypto[2022-4]
## Sharing Transformation and Dishonest Majority MPC with Packed Secret Sharing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#sharing-transformation-and-dishonest-majority-mpc-with-packed-secret-sharing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#sharing-transformation-and-dishonest-majority-mpc-with-packed-secret-sharing)
### Authors
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, PA, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, PA, USA
* Vipul Goyal, NTT Research, Sunnyvale, CA, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York, NY, USA
### Abstract
> In the last few years, the efficiency of secure multi-party computation (MPC) in the dishonest majority setting has increased by several orders of magnitudes starting with the SPDZ protocol family which offers a speedy information-theoretic online phase in the prepossessing model. However, state-of-the-art n-party MPC protocols in the dishonest majority setting incur online communication complexity per multiplication gate which is linear in the number of parties, i.e. O(n), per gate across all parties. In this work, we construct the first MPC protocols in the preprocessing model for dishonest majority with sub-linear communication complexity per gate in the number of parties n. To achieve our results, we extend the use of packed secret sharing to the dishonest majority setting. For a constant fraction of corrupted parties (i.e. if 99 percent of the parties are corrupt), we can achieve a communication complexity of O(1) field elements per multiplication gate across all parties.
> 
> At the crux of our techniques lies a new technique called sharing transformation. The sharing transformation technique allows us to transform shares under one type of linear secret sharing scheme into another, and even perform arbitrary linear maps on the secrets of (packed) secret sharing schemes with optimal communication complexity. This technique can be of independent interest since transferring shares from one type of scheme into another (e.g., for degree reduction) is ubiquitous in MPC. Furthermore, we introduce what we call sparsely packed Shamir sharing which allows us to address the issue of network routing efficiently, and packed Beaver triples which is an extension of the widely used technique of Beaver triples for packed secret sharing (for dishonest majority).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_1](https://doi.org/10.1007/978-3-031-15985-5_1)
## Verifiable Relation Sharing and Multi-verifier Zero-Knowledge in Two Rounds: Trading NIZKs with Honest Majority - (Extended Abstract).
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#verifiable-relation-sharing-and-multi-verifier-zero-knowledge-in-two-rounds-trading-nizks-with-honest-majority-extended-abstract)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#verifiable-relation-sharing-and-multi-verifier-zero-knowledge-in-two-rounds-trading-nizks-with-honest-majority-extended-abstract)
### Authors
* Benny Applebaum, Tel-Aviv University, Tel-Aviv, Israel
* Eliran Kachlon, Tel-Aviv University, Tel-Aviv, Israel
* Arpita Patra, Indian Institute of Science, Bangalore, India
### Abstract
> We introduce the problem of Verifiable Relation Sharing (VRS) where a client (prover) wishes to share a vector of secret data items among k servers (the verifiers) while proving in zero-knowledge that the shared data satisfies some properties. This combined task of sharing and proving generalizes notions like verifiable secret sharing and zero-knowledge proofs over secret-shared data. We study VRS from a theoretical perspective and focus on its round complexity.
> 
> As our main contribution, we show that every efficiently-computable relation can be realized by a VRS with an optimal round complexity of two rounds where the first round is input-independent (offline round). The protocol achieves full UC-security against an active adversary that is allowed to corrupt any t-subset of the parties that may include the client together with some of the verifiers. For a small (logarithmic) number of parties, we achieve an optimal resiliency threshold of \(t<0.5(k+1)\), and for a large (polynomial) number of parties, we achieve an almost-optimal resiliency threshold of \(t<0.5(k+1)(1-\epsilon )\) for an arbitrarily small constant \(\epsilon >0\). Both protocols can be based on sub-exponentially hard injective one-way functions. If the parties have an access to a collision resistance hash function, we can derive statistical everlasting security, i.e., the protocols are secure against adversaries that are computationally bounded during the protocol execution and become computationally unbounded after the protocol execution.
> 
> Previous 2-round solutions achieve smaller resiliency thresholds and weaker security notions regardless of the underlying assumptions. As a special case, our protocols give rise to 2-round offline/online constructions of multi-verifier zero-knowledge proofs (MVZK). Such constructions were previously obtained under the same type of assumptions that are needed for NIZK, i.e., public-key assumptions or random-oracle type assumptions (Abe et al., Asiacrypt 2002; Groth and Ostrovsky, Crypto 2007; Boneh et al., Crypto 2019; Yang, and Wang, Eprint 2022). Our work shows, for the first time, that in the presence of an honest majority these assumptions can be replaced with more conservative “Minicrypt”-type assumptions like injective one-way functions and collision-resistance hash functions. Indeed, our MVZK protocols provide a round-efficient substitute for NIZK in settings where honest-majority is present. Additional applications are also presented.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_2](https://doi.org/10.1007/978-3-031-15985-5_2)
## Authenticated Garbling from Simple Correlations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#authenticated-garbling-from-simple-correlations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#authenticated-garbling-from-simple-correlations)
### Authors
* Samuel Dittmer, Stealth Software Technologies, Inc., Los Angeles, USA
* Steve Lu, Stealth Software Technologies, Inc., Los Angeles, USA
* Rafail Ostrovsky, Stealth Software Technologies, Inc., Los Angeles, USA
* Yuval Ishai, Technion - Israel Institute of Technology, Haifa, Israel
* Rafail Ostrovsky, University of California, Los Angeles, Los Angeles, USA
### Abstract
> We revisit the problem of constant-round malicious secure two-party computation by considering the use of simple correlations, namely sources of correlated randomness that can be securely generated with sublinear communication complexity and good concrete efficiency. The current state-of-the-art protocol of Katz et al. (Crypto 2018) achieves malicious security by realizing a variant of the authenticated garbling functionality of Wang et al. (CCS 2017). Given oblivious transfer correlations, the communication cost of this protocol (with 40 bits of statistical security) is comparable to roughly 10 garbled circuits (GCs). This protocol inherently requires more than 2 rounds of interaction.
> 
> In this work, we use other kinds of simple correlations to realize the authenticated garbling functionality with better efficiency. Concretely, we get the following reduced costs in the random oracle model:
> 
> Using variants of both vector oblivious linear evaluation (VOLE) and multiplication triples (MT), we reduce the cost to 1.31 GCs.
> 
> Using only variants of VOLE, we reduce the cost to 2.25 GCs.
> 
> Using only variants of MT, we obtain a non-interactive (i.e., 2-message) protocol with cost comparable to 8 GCs.
> 
> Finally, we show that by using recent constructions of pseudorandom correlation generators (Boyle et al., CCS 2018, Crypto 2019, 2020), the simple correlations consumed by our protocols can be securely realized without forming an efficiency bottleneck.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_3](https://doi.org/10.1007/978-3-031-15985-5_3)
## Dynamic Local Searchable Symmetric Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#dynamic-local-searchable-symmetric-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#dynamic-local-searchable-symmetric-encryption)
### Authors
* Brice Minaud, DIENS, École normale supérieure, PSL University, CNRS, INRIA, 75005, Paris, France
* Michael Reichle, DIENS, École normale supérieure, PSL University, CNRS, INRIA, 75005, Paris, France
### Abstract
> In this article, we tackle for the first time the problem of dynamic memory-efficient Searchable Symmetric Encryption (SSE). In the term “memory-efficient” SSE, we encompass both the goals of local SSE, and page-efficient SSE. The centerpiece of our approach is a novel connection between those two goals. We introduce a map, called the Generic Local Transform, which takes as input a page-efficient SSE scheme with certain special features, and outputs an SSE scheme with strong locality properties. We obtain several results. (1) First, for page-efficient SSE with page size p, we build a dynamic scheme with storage efficiency \(\mathcal {O}({1})\) and page efficiency \(\widetilde{\mathcal {O}}\left( {\textrm{log}\, \textrm{log}\, (N/p)}\right) \), called \(\textsf{LayeredSSE}\). The main technical innovation behind \(\textsf{LayeredSSE}\) is a novel weighted extension of the two-choice allocation process, of independent interest. (2) Second, we introduce the Generic Local Transform, and combine it with \(\textsf{LayeredSSE}\) to build a dynamic SSE scheme with storage efficiency \(\mathcal {O}({1})\), locality \(\mathcal {O}({1})\), and read efficiency \(\widetilde{\mathcal {O}}\left( {\textrm{log}\,\textrm{log}\, N}\right) \), under the condition that the longest list is of size \(\mathcal {O}({N^{1-1/\textrm{log}\, \textrm{log}\, \lambda }})\). This matches, in every respect, the purely static construction of Asharov et al. presented at STOC 2016: dynamism comes at no extra cost. (3) Finally, by applying the Generic Local Transform to a variant of the Tethys scheme by Bossuat et al. from Crypto 2021, we build an unconditional static SSE with storage efficiency \(\mathcal {O}({1})\), locality \(\mathcal {O}({1})\), and read efficiency \(\mathcal {O}({\textrm{log}^\varepsilon N})\), for an arbitrarily small constant \(\varepsilon > 0\). To our knowledge, this is the construction that comes closest to the lower bound presented by Cash and Tessaro at Eurocrypt 2014.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_4](https://doi.org/10.1007/978-3-031-15985-5_4)
## Programmable Distributed Point Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#programmable-distributed-point-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#programmable-distributed-point-functions)
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Niv Gilboa, Ben-Gurion University, Be’er Sheva, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Victor I. Kolobov, Technion, Haifa, Israel
### Abstract
> A distributed point function (DPF) is a cryptographic primitive that enables compressed additive sharing of a secret unit vector across two or more parties. Despite growing ubiquity within applications and notable research efforts, the best 2-party DPF construction to date remains the tree-based construction from (Boyle et al., CCS’16), with no significantly new approaches since.
> 
> We present a new framework for 2-party DPF construction, which applies in the setting of feasible (polynomial-size) domains. This captures in particular all DPF applications in which the keys are expanded to the full domain. Our approach is motivated by a strengthened notion we put forth, of programmable DPF (PDPF): in which a short, input-independent “offline” key can be reused for sharing many point functions.
> 
> PDPF from OWF. We construct a PDPF for feasible domains from the minimal assumption that one-way functions exist, where the second “online” key size is polylogarithmic in the domain size N.
> 
> Our approach offers multiple new efficiency features and applications:
> 
> Privately puncturable PRFs. Our PDPF gives the first OWF-based privately puncturable PRFs (for feasible domains) with sublinear keys.
> 
> O(1)-round distributed DPF Gen. We obtain a (standard) DPF with polylog-size keys that admits an analog of Doerner-shelat (CCS’17) distributed key generation, requiring only O(1) rounds (versus \(\log N\)).
> 
> PCG with 1 short key. Compressing useful correlations for secure computation, where one key is of minimal size. This provides up to exponential communication savings in some application scenarios.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_5](https://doi.org/10.1007/978-3-031-15985-5_5)
## Snapshot-Oblivious RAMs: Sub-logarithmic Efficiency for Short Transcripts.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#snapshot-oblivious-rams-sub-logarithmic-efficiency-for-short-transcripts)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#snapshot-oblivious-rams-sub-logarithmic-efficiency-for-short-transcripts)
### Authors
* Yang Du, University of Michigan, Ann Arbor, USA
* Paul Grubbs, University of Michigan, Ann Arbor, USA
* Daniel Genkin, Georgia Tech, Atlanta, USA
### Abstract
> Oblivious RAM (ORAM) is a powerful technique to prevent harmful data breaches. Despite tremendous progress in improving the concrete performance of ORAM, it remains too slow for use in many practical settings; recent breakthroughs in lower bounds indicate this inefficiency is inherent for ORAM and even some natural relaxations.
> 
> This work introduces snapshot-oblivious RAMs, a new secure memory access primitive. Snapshot-oblivious RAMs bypass lower bounds by providing security only for transcripts whose length (call it \(c\)) is fixed and known ahead of time. Intuitively, snapshot-oblivious RAMs provide strong security for attacks of short duration, such as the snapshot attacks targeted by many encrypted databases.
> 
> We give an ORAM-style definition of this new primitive, and present several constructions. The underlying design principle of our constructions is to store the history of recent operations in a data structure that can be accessed obliviously. We instantiate this paradigm with data structures that remain on the client, giving a snapshot-oblivious RAM with constant bandwidth overhead. We also show how these data structures can be stored on the server and accessed using oblivious memory primitives. Our most efficient instantiation achieves \(\mathcal{O}(\log c)\) bandwidth overhead. By extending recent ORAM lower bounds, we show this performance is asymptotically optimal. Along the way, we define a new hash queue data structure—essentially, a dictionary whose elements can be modified in a first-in-first-out fashion—which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_6](https://doi.org/10.1007/978-3-031-15985-5_6)
## Tight Preimage Resistance of the Sponge Construction.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#tight-preimage-resistance-of-the-sponge-construction)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#tight-preimage-resistance-of-the-sponge-construction)
### Authors
* Charlotte Lefevre, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### Abstract
> The cryptographic sponge is a popular method for hash function design. The construction is in the ideal permutation model proven to be indifferentiable from a random oracle up to the birthday bound in the capacity of the sponge. This result in particular implies that, as long as the attack complexity does not exceed this bound, the sponge construction achieves a comparable level of collision, preimage, and second preimage resistance as a random oracle. We investigate these state-of-the-art bounds in detail, and observe that while the collision and second preimage security bounds are tight, the preimage bound is not tight. We derive an improved and tight preimage security bound for the cryptographic sponge construction.
> 
> The result has direct implications for various lightweight cryptographic hash functions. For example, the NIST Lightweight Cryptography finalist Ascon-Hash does not generically achieve \(2^{128}\) preimage security as claimed, but even \(2^{192}\) preimage security. Comparable improvements are obtained for the modes of Spongent, PHOTON, ACE, Subterranean 2.0, and QUARK, among others.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_7](https://doi.org/10.1007/978-3-031-15985-5_7)
## Block-Cipher-Based Tree Hashing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#block-cipher-based-tree-hashing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#block-cipher-based-tree-hashing)
### Authors
* Aldo Gunsing, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### Abstract
> First of all we take a thorough look at an error in a paper by Daemen et al. (ToSC 2018) which looks at minimal requirements for tree-based hashing based on multiple primitives, including block ciphers. This reveals that the error is more fundamental than previously shown by Gunsing et al. (ToSC 2020), which is mainly interested in its effect on the security bounds. It turns out that the cause for the error is due to an essential oversight in the interaction between the different oracles used in the indifferentiability proofs. In essence, it reduces the claim from the normal indifferentiability setting to the weaker sequential indifferentiability one. As a matter of fact, this error appeared in multiple earlier indifferentiability papers, including the optimal indifferentiability of the sum of permutations (EUROCRYPT 2018) and the recent \(\textrm{ABR}^+\) construction (EUROCRYPT 2021). We discuss in detail how this oversight is caused and how it can be avoided.
> 
> We next demonstrate how the negative effects on the security bound of the construction by Daemen et al. can be resolved. Instead of only allowing a truncated output, we generalize the construction to allow for any finalization function and investigate the security of this for five different types of finalization. Our findings, among others, show that the security of the SHA-2 mode does not degrade if the feed-forward is dropped and that the modern BLAKE3 construction is secure in principle but that its use of the extendable output requires its counter used for random access to be public. Finally, we introduce the tree sponge, a generalization of the sequential sponge construction with parallel absorbing and squeezing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_8](https://doi.org/10.1007/978-3-031-15985-5_8)
## Provably Secure Reflection Ciphers.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#provably-secure-reflection-ciphers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#provably-secure-reflection-ciphers)
### Authors
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> This paper provides the first analysis of reflection ciphers such as Prince from a provable security viewpoint.
> 
> As a first contribution, we initiate the study of key-alternating reflection ciphers in the ideal permutation model. Specifically, we prove the security of the two-round case and give matching attacks. The resulting security bound takes form \(\mathcal {O}(qp^2/2^{2n}+q^2/2^n)\), where \(q\) is the number of construction evaluations and \(p\) is the number of direct adversarial queries to the underlying permutation. Since the two-round construction already achieves an interesting security lower bound, this result can also be of interest for the construction of reflection ciphers based on a single public permutation.
> 
> Our second contribution is a generic key-length extension method for reflection ciphers. It provides an attractive alternative to the FX construction, which is used by Prince and other concrete key-alternating reflection ciphers. We show that our construction leads to better security with minimal changes to existing designs. The security proof is in the ideal cipher model and relies on a reduction to the two-round Even-Mansour cipher with a single round key. In order to obtain the desired result, we sharpen the bad-transcript analysis and consequently improve the best-known bounds for the single-key Even-Mansour cipher with two rounds. This improvement is enabled by a new sum-capture theorem that is of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_9](https://doi.org/10.1007/978-3-031-15985-5_9)
## Overloading the Nonce: Rugged PRPs, Nonce-Set AEAD, and Order-Resilient Channels.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#overloading-the-nonce-rugged-prps-nonce-set-aead-and-order-resilient-channels)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#overloading-the-nonce-rugged-prps-nonce-set-aead-and-order-resilient-channels)
### Authors
* Jean Paul Degabriele, Technology Innovation Institute, Abu Dhabi, UAE
* Jean Paul Degabriele, Technische Universität Darmstadt, Darmstadt, Germany
* Vukašin Karadžić, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> We introduce a new security notion that lies right in between pseudorandom permutations (PRPs) and strong pseudorandom permutations (SPRPs). We call this new security notion and any (tweakable) cipher that satisfies it a rugged pseudorandom permutation (RPRP). Rugged pseudorandom permutations lend themselves to some interesting applications, have practical benefits, and lead to novel cryptographic constructions. Our focus is on variable-length tweakable RPRPs, and analogous to the encode-then-encipher paradigm of Bellare and Rogaway, we can generically transform any such cipher into different AEAD schemes with varying security properties. However, the benefit of RPRPs is that they can be constructed more efficiently as they are weaker primitives than SPRPs (the notion traditionally required by the encode-then-encipher paradigm). We can construct RPRPs using only two layers of processing, whereas SPRPs typically require three layers of processing over the input data. We also identify a new transformation that yields RUP-secure AEAD schemes with more compact ciphertexts than previously known. Further extending this approach, we arrive at a new generalized notion of authenticated encryption and a matching construction, which we refer to as nonce-set AEAD. Nonce-set AEAD is particularly well-suited in the context of secure channels, like QUIC and DTLS, that operate over unreliable transports and employ a window mechanism at the receiver’s end of the channel. We conclude by presenting a generic construction for transforming a nonce-set AEAD scheme into an order-resilient secure channel. Our channel construction sheds new light on order-resilient channels and additionally leads to more compact ciphertexts when instantiated from RPRPs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_10](https://doi.org/10.1007/978-3-031-15985-5_10)
## Orion: Zero Knowledge Proof with Linear Prover Time.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#orion-zero-knowledge-proof-with-linear-prover-time)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#orion-zero-knowledge-proof-with-linear-prover-time)
### Authors
* Tiancheng Xie, University of California, Berkeley, Berkeley, USA
* Dawn Song, University of California, Berkeley, Berkeley, USA
* Yupeng Zhang, Texas A &M University, College Station, USA
### Abstract
> Zero-knowledge proof is a powerful cryptographic primitive that has found various applications in the real world. However, existing schemes with succinct proof size suffer from a high overhead on the proof generation time that is super-linear in the size of the statement represented as an arithmetic circuit, limiting their efficiency and scalability in practice. In this paper, we present Orion, a new zero-knowledge argument system that achieves O(N) prover time of field operations and hash functions and \(O(\log ^2 N)\) proof size. Orion is concretely efficient and our implementation shows that the prover time is 3.09 s and the proof size is 1.5 MB for a circuit with \(2^{20}\) multiplication gates. The prover time is the fastest among all existing succinct proof systems, and the proof size is an order of magnitude smaller than a recent scheme proposed in Golovnev et al. 2021.
> 
> In particular, we develop two new techniques leading to the efficiency improvement. (1) We propose a new algorithm to test whether a random bipartite graph is a lossless expander graph or not based on the densest subgraph algorithm. It allows us to sample lossless expanders with an overwhelming probability. The technique improves the efficiency and/or security of all existing zero-knowledge argument schemes with a linear prover time. The testing algorithm based on densest subgraph may be of independent interest for other applications of expander graphs. (2) We develop an efficient proof composition scheme, code switching, to reduce the proof size from square root to polylogarithmic in the size of the computation. The scheme is built on the encoding circuit of a linear code and shows that the witness of a second zero-knowledge argument is the same as the message in the linear code. The proof composition only introduces a small overhead on the prover time.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_11](https://doi.org/10.1007/978-3-031-15985-5_11)
## Moz$\mathbb {Z}_{2^k}$arella: Efficient Vector-OLE and Zero-Knowledge Proofs over $\mathbb {Z}_{2^k}$.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#moz-mathbb-z-2-k-arella-efficient-vector-ole-and-zero-knowledge-proofs-over-mathbb-z-2-k)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#moz-mathbb-z-2-k-arella-efficient-vector-ole-and-zero-knowledge-proofs-over-mathbb-z-2-k)
### Authors
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Lennart Braun, Aarhus University, Aarhus, Denmark
* Alexander Munch-Hansen, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> Zero-knowledge proof systems are usually designed to support computations for circuits over \(\mathbb {F}_2\) or \(\mathbb {F}_p\) for large p, but not for computations over \(\mathbb {Z}_{2^k}\), which all modern CPUs operate on. Although \(\mathbb {Z}_{2^k}\)-arithmetic can be emulated using prime moduli, this comes with an unavoidable overhead. Recently, Baum et al. (CCS 2021) suggested a candidate construction for a designated-verifier zero-knowledge proof system that natively runs over \(\mathbb {Z}_{2^k}\). Unfortunately, their construction requires preprocessed random vector oblivious linear evaluation (VOLE) to be instantiated over \(\mathbb {Z}_{2^k}\). Currently, it is not known how to efficiently generate such random VOLE in large quantities.
> 
> In this work, we present a maliciously secure, VOLE extension protocol that can turn a short seed-VOLE over \(\mathbb {Z}_{2^k}\) into a much longer, pseudorandom VOLE over the same ring. Our construction borrows ideas from recent protocols over finite fields, which we non-trivially adapt to work over \(\mathbb {Z}_{2^k}\). Moreover, we show that the approach taken by the QuickSilver zero-knowledge proof system (Yang et al. CCS 2021) can be generalized to support computations over \(\mathbb {Z}_{2^k}\). This new VOLE-based proof system, which we call QuarkSilver, yields better efficiency than the previous zero-knowledge protocols suggested by Baum et al. Furthermore, we implement both our VOLE extension and our zero-knowledge proof system, and show that they can generate 13–50 million VOLEs per second for \({64}\,{\textrm{bit}}\) to \({256}\,{\textrm{bit}}\) rings, and evaluate \({1.3}\,\textrm{million}\) \({64}\,{\textrm{bit}}\) multiplications per second in zero-knowledge.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_12](https://doi.org/10.1007/978-3-031-15985-5_12)
## Nova: Recursive Zero-Knowledge Arguments from Folding Schemes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#nova-recursive-zero-knowledge-arguments-from-folding-schemes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#nova-recursive-zero-knowledge-arguments-from-folding-schemes)
### Authors
* Abhiram Kothapalli, Carnegie Mellon University, Pittsburgh, USA
* Srinath Setty, Microsoft Research, Redmond, USA
* Ioanna Tzialla, New York University, New York, USA
### Abstract
> We introduce a new approach to realize incrementally verifiable computation (IVC), in which the prover recursively proves the correct execution of incremental computations of the form \(y=F^{(\ell )}(x)\), where F is a (potentially non-deterministic) computation, x is the input, y is the output, and \(\ell > 0\). Unlike prior approaches to realize IVC, our approach avoids succinct non-interactive arguments of knowledge (SNARKs) entirely and arguments of knowledge in general. Instead, we introduce and employ folding schemes, a weaker, simpler, and more efficiently-realizable primitive, which reduces the task of checking two instances in some relation to the task of checking a single instance. We construct a folding scheme for a characterization of NP and show that it implies an IVC scheme with improved efficiency characteristics: (1) the “recursion overhead” (i.e., the number of steps that the prover proves in addition to proving the execution of F) is a constant and it is dominated by two group scalar multiplications expressed as a circuit (this is the smallest recursion overhead in the literature), and (2) the prover’s work at each step is dominated by two multiexponentiations of size O(|F|), providing the fastest prover in the literature. The size of a proof is O(|F|) group elements, but we show that using a variant of an existing zkSNARK, the prover can prove the knowledge of a valid proof succinctly and in zero-knowledge with \(O(\log {|F|})\) group elements. Finally, our approach neither requires a trusted setup nor FFTs, so it can be instantiated efficiently with any cycles of elliptic curves where DLOG is hard.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_13](https://doi.org/10.1007/978-3-031-15985-5_13)
## A New Approach to Efficient Non-Malleable Zero-Knowledge.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#a-new-approach-to-efficient-non-malleable-zero-knowledge)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#a-new-approach-to-efficient-non-malleable-zero-knowledge)
### Authors
* Allen Kim, Stony Brook University, Stony Brook, USA
* Xiao Liang, Stony Brook University, Stony Brook, USA
* Omkant Pandey, Stony Brook University, Stony Brook, USA
### Abstract
> Non-malleable zero-knowledge, originally introduced in the context of man-in-the-middle attacks, serves as an important building block to protect against concurrent attacks where different protocols may coexist and interleave. While this primitive admits almost optimal constructions in the plain model, they are several orders of magnitude slower in practice than standalone zero-knowledge. This is in sharp contrast to non-malleable commitments where practical constructions (under the DDH assumption) have been known for a while.
> 
> We present a new approach for constructing efficient non-malleable zero-knowledge for all languages in \(\mathcal{N}\mathcal{P}\), based on a new primitive called instance-based non-malleable commitment (\(\textsf{IB}\text {-}\textsf{NMC}\)). We show how to construct practical \(\textsf{IB}\text {-}\textsf{NMC}\) by leveraging the fact that simulators of sub-linear zero-knowledge protocols can be much faster than the honest prover algorithm. With an efficient implementation of \(\textsf{IB}\text {-}\textsf{NMC}\), our approach yields the first general-purpose non-malleable zero-knowledge protocol that achieves practical efficiency in the plain model.
> 
> All of our protocols can be instantiated from symmetric primitives such as block-ciphers and collision-resistant hash functions, have reasonable efficiency in practice, and are general-purpose. Our techniques also yield the first efficient non-malleable commitment scheme without public-key assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_14](https://doi.org/10.1007/978-3-031-15985-5_14)
## An Algebraic Framework for Silent Preprocessing with Trustless Setup and Active Security.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#an-algebraic-framework-for-silent-preprocessing-with-trustless-setup-and-active-security)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#an-algebraic-framework-for-silent-preprocessing-with-trustless-setup-and-active-security)
### Authors
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> Recently, number-theoretic assumptions including DDH, DCR and QR have been used to build powerful tools for secure computation, in the form of homomorphic secret-sharing (HSS), which leads to secure two-party computation protocols with succinct communication, and pseudorandom correlation functions (PCFs), which allow non-interactive generation of a large quantity of correlated randomness. In this work, we present a group-theoretic framework for these classes of constructions, which unifies their approach to computing distributed discrete logarithms in various groups. We cast existing constructions in our framework, and also present new constructions, including one based on class groups of imaginary quadratic fields. This leads to the first construction of two-party homomorphic secret sharing for branching programs from class group assumptions.
> 
> Using our framework, we also obtain pseudorandom correlation functions for generating oblivious transfer and vector-OLE correlations from number-theoretic assumptions. These have a trustless, public-key setup when instantiating our framework using class groups. Previously, such constructions either needed a trusted setup in the form of an RSA modulus with unknown factorisation, or relied on multi-key fully homomorphic encryption from the learning with errors assumption.
> 
> We also show how to upgrade our constructions to achieve active security using appropriate zero-knowledge proofs. In the random oracle model, this leads to a one-round, actively secure protocol for setting up the PCF, as well as a 3-round, actively secure HSS-based protocol for secure two-party computation of branching programs with succinct communication.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_15](https://doi.org/10.1007/978-3-031-15985-5_15)
## Quadratic Multiparty Randomized Encodings Beyond Honest Majority and Their Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#quadratic-multiparty-randomized-encodings-beyond-honest-majority-and-their-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#quadratic-multiparty-randomized-encodings-beyond-honest-majority-and-their-applications)
### Authors
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Or Karni, Tel Aviv University, Tel Aviv, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Arpita Patra, Indian Institute of Science, Bangalore, India
### Abstract
> Multiparty randomized encodings (Applebaum, Brakerski, and Tsabary, SICOMP 2021) reduce the task of securely computing a complicated multiparty functionality f to the task of securely computing a simpler functionality g. The reduction is non-interactive and preserves information-theoretic security against a passive (semi-honest) adversary, also referred to as privacy. The special case of a degree-2 encoding g (2MPRE) has recently found several applications to secure multiparty computation (MPC) with either information-theoretic security or making black-box access to cryptographic primitives. Unfortunately, as all known constructions are based on information-theoretic MPC protocols in the plain model, they can only be private with an honest majority.
> 
> In this paper, we break the honest-majority barrier and present the first construction of general 2MPRE that remains secure in the presence of a dishonest majority. Our construction encodes every n-party functionality f by a 2MPRE that tolerates at most \(t=\lfloor 2n/3\rfloor \) passive corruptions.
> 
> We derive several applications including: (1) The first non-interactive client-server MPC protocol with perfect privacy against any coalition of a minority of the servers and up to t of the n clients; (2) Completeness of 3-party functionalities under non-interactive t-private reductions; and (3) A single-round t-private reduction from general-MPC to an ideal oblivious transfer (OT). These positive results partially resolve open questions that were posed in several previous works. We also show that t-private 2MPREs are necessary for solving (2) and (3), thus establishing new equivalence theorems between these three notions.
> 
> Finally, we present a new approach for constructing fully-private 2MPREs based on multi-round protocols in the OT-hybrid model that achieve perfect privacy against active attacks. Moreover, by slightly restricting the power of the active adversary, we derive an equivalence between these notions. This forms a surprising, and quite unique, connection between a non-interactive passively-private primitive to an interactive actively-private primitive.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_16](https://doi.org/10.1007/978-3-031-15985-5_16)
## Tight Bounds on the Randomness Complexity of Secure Multiparty Computation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#tight-bounds-on-the-randomness-complexity-of-secure-multiparty-computation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#tight-bounds-on-the-randomness-complexity-of-secure-multiparty-computation)
### Authors
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Yuval Ishai, Technion, Haifa, Israel
### Abstract
> We revisit the question of minimizing the randomness complexity of protocols for secure multiparty computation (MPC) in the setting of perfect information-theoretic security. Kushilevitz and Mansour (SIAM J. Discret. Math., 1997) studied the case of n-party semi-honest MPC for the XOR function with security threshold \(t<n\), showing that \(O(t^2\log (n/t))\) random bits are sufficient and \(\varOmega (t)\) random bits are necessary. Their positive result was obtained via a non-explicit protocol, whose existence was proved using the probabilistic method.
> 
> We essentially close the question by proving an \(\varOmega (t^2)\) lower bound on the randomness complexity of XOR, matching the previous upper bound up to a logarithmic factor (or constant factor when \(t=\varOmega (n)\)). We also obtain an explicit protocol that uses \(O(t^2\cdot \log ^2n)\) random bits, matching our lower bound up to a polylogarithmic factor. We extend these results from XOR to general symmetric Boolean functions and to addition over a finite Abelian group, showing how to amortize the randomness complexity over multiple additions.
> 
> Finally, combining our techniques with recent randomness-efficient constructions of private circuits, we obtain an explicit protocol for evaluating a general circuit C using only \(O(t^2\cdot \log |C|)\) random bits, by employing additional “helper parties” who do not contribute any inputs. This upper bound too matches our lower bound up to a logarithmic factor.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_17](https://doi.org/10.1007/978-3-031-15985-5_17)
## Better than Advertised Security for Non-interactive Threshold Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#better-than-advertised-security-for-non-interactive-threshold-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#better-than-advertised-security-for-non-interactive-threshold-signatures)
### Authors
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, La Jolla, USA
* Elizabeth Crites, University of Edinburgh, Edinburgh, UK
* Chelsea Komlo, University of Waterloo, Zcash Foundation, Waterloo, Canada
* Mary Maller, Ethereum Foundation, London, UK
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> We give a unified syntax, and a hierarchy of definitions of security of increasing strength, for non-interactive threshold signature schemes. These are schemes having a single-round signing protocol, possibly with one prior round of message-independent pre-processing. We fit FROST1 and BLS, which are leading practical schemes, into our hierarchy, in particular showing they meet stronger security definitions than they have been shown to meet so far. We also fit in our hierarchy a more efficient version FROST2 of FROST1 that we give. These definitions and results, for simplicity, all assume trusted key generation. Finally, we prove the security of FROST2 with key generation performed by an efficient distributed key generation protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_18](https://doi.org/10.1007/978-3-031-15985-5_18)
## Threshold Signatures with Private Accountability.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-4].md#threshold-signatures-with-private-accountability)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#threshold-signatures-with-private-accountability)
### Authors
* Dan Boneh, Stanford University, Stanford, USA
* Chelsea Komlo, University of Waterloo, Waterloo, Canada
### Abstract
> Existing threshold signature schemes come in two flavors: (i) fully private, where the signature reveals nothing about the set of signers that generated the signature, and (ii) accountable, where the signature completely identifies the set of signers. In this paper we propose a new type of threshold signature, called TAPS, that is a hybrid of privacy and accountability. A TAPS signature is fully private from the public’s point of view. However, an entity that has a secret tracing key can trace a signature to the threshold of signers that generated it. A TAPS makes it possible for an organization to keep its inner workings private, while ensuring that signers are accountable for their actions. We construct a number of TAPS schemes. First, we present a generic construction that builds a TAPS from any accountable threshold signature. This generic construction is not efficient, and we next focus on efficient schemes based on standard assumptions. We build two efficient TAPS schemes (in the random oracle model) based on the Schnorr signature scheme. We conclude with a number of open problems relating to efficient TAPS.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_19](https://doi.org/10.1007/978-3-031-15985-5_19)
