# Eurocrypt 20-3
## (One) Failure Is Not an Option: Bootstrapping the Search for Failures in Lattice-Based Encryption Schemes.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#one-failure-is-not-an-option-bootstrapping-the-search-for-failures-in-lattice-based-encryption-schemes)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#one-failure-is-not-an-option-bootstrapping-the-search-for-failures-in-lattice-based-encryption-schemes)
### Authors
* Jan-Pieter D’Anvers, imec-COSIC, KU Leuven, Leuven, Belgium
* Mélissa Rossi, ANSSI, Paris, France
* Mélissa Rossi, ENS Paris, CNRS, PSL University, Paris, France
* Mélissa Rossi, Thales, Gennevilliers, France
* Mélissa Rossi, Inria, Paris, France
* Fernando Virdia, Information Security Group, Royal Holloway, University of London, Egham, UK
### Abstract
> Lattice-based encryption schemes are often subject to the possibility of decryption failures, in which valid encryptions are decrypted incorrectly. Such failures, in large number, leak information about the secret key, enabling an attack strategy alternative to pure lattice reduction. Extending the “failure boosting” technique of D’Anvers et al. in PKC 2019, we propose an approach that we call “directional failure boosting” that uses previously found “failing ciphertexts” to accelerate the search for new ones. We analyse in detail the case where the lattice is defined over polynomial ring modules quotiented by \(\langle X^{N} + 1 \rangle \) and demonstrate it on a simple Mod-LWE-based scheme parametrized à la Kyber768/Saber. We show that for a given secret key (single-target setting), the cost of searching for additional failing ciphertexts after one or more have already been found, can be sped up dramatically. We thus demonstrate that, in this single-target model, these schemes should be designed so that it is hard to even obtain one decryption failure. Besides, in a wider security model where there are many target secret keys (multi-target setting), our attack greatly improves over the state of the art.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_1](https://doi.org/10.1007/978-3-030-45727-3_1)
## Key Recovery from Gram-Schmidt Norm Leakage in Hash-and-Sign Signatures over NTRU Lattices.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#key-recovery-from-gram-schmidt-norm-leakage-in-hash-and-sign-signatures-over-ntru-lattices)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#key-recovery-from-gram-schmidt-norm-leakage-in-hash-and-sign-signatures-over-ntru-lattices)
### Authors
* Pierre-Alain Fouque, Univ Rennes, CNRS, IRISA, Rennes, France
* Paul Kirchner, Univ Rennes, CNRS, IRISA, Rennes, France
* Yang Yu, Univ Rennes, CNRS, IRISA, Rennes, France
* Mehdi Tibouchi, NTT Corporation, Tokyo, Japan
* Alexandre Wallet, NTT Corporation, Tokyo, Japan
### Abstract
> In this paper, we initiate the study of side-channel leakage in hash-and-sign lattice-based signatures, with particular emphasis on the two efficient implementations of the original GPV lattice-trapdoor paradigm for signatures, namely NIST second-round candidate Falcon and its simpler predecessor DLP. Both of these schemes implement the GPV signature scheme over NTRU lattices, achieving great speed-ups over the general lattice case. Our results are mainly threefold.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_2](https://doi.org/10.1007/978-3-030-45727-3_2)
## An Algebraic Attack on Rank Metric Code-Based Cryptosystems.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#an-algebraic-attack-on-rank-metric-code-based-cryptosystems)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#an-algebraic-attack-on-rank-metric-code-based-cryptosystems)
### Authors
* Magali Bardet, LITIS, University of Rouen Normandie, Mont-Saint-Aignan, France
* Magali Bardet, Inria, 2 rue Simone Iff, 75012, Paris, France
* Pierre Briaud, Inria, 2 rue Simone Iff, 75012, Paris, France
* Jean-Pierre Tillich, Inria, 2 rue Simone Iff, 75012, Paris, France
* Maxime Bros, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
* Philippe Gaborit, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
* Vincent Neiger, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
* Olivier Ruatta, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
### Abstract
> The Rank metric decoding problem is the main problem considered in cryptography based on codes in the rank metric. Very efficient schemes based on this problem or quasi-cyclic versions of it have been proposed recently, such as those in the submissions ROLLO and RQC currently at the second round of the NIST Post-Quantum Cryptography Standardization Process. While combinatorial attacks on this problem have been extensively studied and seem now well understood, the situation is not as satisfactory for algebraic attacks, for which previous work essentially suggested that they were ineffective for cryptographic parameters. In this paper, starting from Ourivski and Johansson’s algebraic modelling of the problem into a system of polynomial equations, we show how to augment this system with easily computed equations so that the augmented system is solved much faster via Gröbner bases. This happens because the augmented system has solving degree r, \(r+1\) or \(r+2\) depending on the parameters, where r is the rank weight, which we show by extending results from Verbel et al. (PQCrypto 2019) on systems arising from the MinRank problem; with target rank r, Verbel et al. lower the solving degree to \(r+2\), and even less for some favorable instances that they call “superdetermined”. We give complexity bounds for this approach as well as practical timings of an implementation using magma. This improves upon the previously known complexity estimates for both Gröbner basis and (non-quantum) combinatorial approaches, and for example leads to an attack in 200 bits on ROLLO-I-256 whose claimed security was 256 bits.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_3](https://doi.org/10.1007/978-3-030-45727-3_3)
## Low Weight Discrete Logarithm and Subset Sum in 20.65n with Polynomial Memory.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#low-weight-discrete-logarithm-and-subset-sum-in-20-65n-with-polynomial-memory)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#low-weight-discrete-logarithm-and-subset-sum-in-20-65n-with-polynomial-memory)
### Authors
* Andre Esser, Ruhr University Bochum, Bochum, Germany
* Alexander May, Ruhr University Bochum, Bochum, Germany
### Abstract
> We propose two heuristic polynomial memory collision finding algorithms for the low Hamming weight discrete logarithm problem in any abelian group G. The first one is a direct adaptation of the Becker-Coron-Joux (BCJ) algorithm for subset sum to the discrete logarithm setting. The second one significantly improves on this adaptation for all possible weights using a more involved application of the representation technique together with some new Markov chain analysis. In contrast to other low weight discrete logarithm algorithms, our second algorithm’s time complexity interpolates to Pollard’s \(|G|^{\frac{1}{2}}\) bound for general discrete logarithm instances.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_4](https://doi.org/10.1007/978-3-030-45727-3_4)
## Continuous Verifiable Delay Functions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#continuous-verifiable-delay-functions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#continuous-verifiable-delay-functions)
### Authors
* Naomi Ephraim, Cornell Tech, New York, NY, 10044, USA
* Cody Freitag, Cornell Tech, New York, NY, 10044, USA
* Rafael Pass, Cornell Tech, New York, NY, 10044, USA
* Ilan Komargodski, NTT Research, Palo Alto, CA, 94303, USA
### Abstract
> We introduce the notion of a continuous verifiable delay function (cVDF): a function g which is (a) iteratively sequential—meaning that evaluating the iteration \(g^{(t)}\) of g (on a random input) takes time roughly t times the time to evaluate g, even with many parallel processors, and (b) (iteratively) verifiable—the output of \(g^{(t)}\) can be efficiently verified (in time that is essentially independent of t). In other words, the iterated function \(g^{(t)}\) is a verifiable delay function (VDF) (Boneh et al., CRYPTO ’18), having the property that intermediate steps of the computation (i.e., \(g^{(t')}\) for \(t'<t\)) are publicly and continuously verifiable.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_5](https://doi.org/10.1007/978-3-030-45727-3_5)
## Generic-Group Delay Functions Require Hidden-Order Groups.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#generic-group-delay-functions-require-hidden-order-groups)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#generic-group-delay-functions-require-hidden-order-groups)
### Authors
* Lior Rotem, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ido Shahaf, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
### Abstract
> Despite the fundamental importance of delay functions, underlying both the classic notion of a time-lock puzzle and the more recent notion of a verifiable delay function, the only known delay function that offers both sufficient structure for realizing these two notions and a realistic level of practicality is the “iterated squaring” construction of Rivest, Shamir and Wagner. This construction, however, is based on rather strong assumptions in groups of hidden orders, such as the RSA group (which requires a trusted setup) or the class group of an imaginary quadratic number field (which is still somewhat insufficiently explored from the cryptographic perspective). For more than two decades, the challenge of constructing delay functions in groups of known orders, admitting a variety of well-studied instantiations, has eluded the cryptography community.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_6](https://doi.org/10.1007/978-3-030-45727-3_6)
## Sigma Protocols for MQ, PKP and SIS, and Fishy Signature Schemes.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#sigma-protocols-for-mq-pkp-and-sis-and-fishy-signature-schemes)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#sigma-protocols-for-mq-pkp-and-sis-and-fishy-signature-schemes)
### Authors
* Ward Beullens, imec-COSIC KU Leuven, Kasteelpark Arenberg 10 - bus 2452, 3001, Heverlee, Belgium
### Abstract
> This work presents sigma protocols to prove knowledge of:

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_7](https://doi.org/10.1007/978-3-030-45727-3_7)
## Signatures from Sequential-OR Proofs.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#signatures-from-sequential-or-proofs)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#signatures-from-sequential-or-proofs)
### Authors
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Patrick Harasser, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Christian Janson, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> OR-proofs enable a prover to show that it knows the witness for one of many statements, or that one out of many statements is true. OR-proofs are a remarkably versatile tool, used to strengthen security properties, design group and ring signature schemes, and achieve tight security. The common technique to build OR-proofs is based on an approach introduced by Cramer, Damgård, and Schoenmakers (CRYPTO’94), where the prover splits the verifier’s challenge into random shares and computes proofs for each statement in parallel.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_8](https://doi.org/10.1007/978-3-030-45727-3_8)
## Compact Adaptively Secure ABE from k-Lin: Beyond NC1 and Towards NL.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#compact-adaptively-secure-abe-from-k-lin-beyond-nc1-and-towards-nl)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#compact-adaptively-secure-abe-from-k-lin-beyond-nc1-and-towards-nl)
### Authors
* Huijia Lin, University of Washington, Seattle, USA
* Ji Luo, University of Washington, Seattle, USA
### Abstract
> We present a new general framework for constructing compact and adaptively secure attribute-based encryption (ABE) schemes from k-Lin in asymmetric bilinear pairing groups. Previously, the only construction [Kowalczyk and Wee, Eurocrypt ’19] that simultaneously achieves compactness and adaptive security from static assumptions supports policies represented by Boolean formulae. Our framework enables supporting more expressive policies represented by arithmetic branching programs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_9](https://doi.org/10.1007/978-3-030-45727-3_9)
## Adaptively Secure ABE for DFA from k-Lin and More.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#adaptively-secure-abe-for-dfa-from-k-lin-and-more)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#adaptively-secure-abe-for-dfa-from-k-lin-and-more)
### Authors
* Junqing Gong, East China Normal University, Shanghai, China
* Junqing Gong, CNRS, ENS and PSL, Paris, France
* Hoeteck Wee, CNRS, ENS and PSL, Paris, France
### Abstract
> In this work, we present:

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_10](https://doi.org/10.1007/978-3-030-45727-3_10)
## Tornado: Automatic Generation of Probing-Secure Masked Bitsliced Implementations.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#tornado-automatic-generation-of-probing-secure-masked-bitsliced-implementations)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#tornado-automatic-generation-of-probing-secure-masked-bitsliced-implementations)
### Authors
* Sonia Belaïd, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Raphaël Wintersdorff, CryptoExperts, Paris, France
* Pierre-Évariste Dagand, Sorbonne Université, Paris, France
* Darius Mercadier, Sorbonne Université, Paris, France
### Abstract
> Cryptographic implementations deployed in real world devices often aim at (provable) security against the powerful class of side-channel attacks while keeping reasonable performances. Last year at Asiacrypt, a new formal verification tool named tightPROVE was put forward to exactly determine whether a masked implementation is secure in the well-deployed probing security model for any given security order t. Also recently, a compiler named Usuba was proposed to automatically generate bitsliced implementations of cryptographic primitives.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_11](https://doi.org/10.1007/978-3-030-45727-3_11)
## Side-Channel Masking with Pseudo-Random Generator.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#side-channel-masking-with-pseudo-random-generator)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#side-channel-masking-with-pseudo-random-generator)
### Authors
* Jean-Sébastien Coron, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Aurélien Greuet, IDEMIA, Courbevoie, France
* Rina Zeitoun, IDEMIA, Courbevoie, France
### Abstract
> High-order masking countermeasures against side-channel attacks usually require plenty of randomness during their execution. For security against t probes, the classical ISW countermeasure requires \(\mathcal{O}(t^2 s)\) random bits, where s is the circuit size. However running a True Random Number Generator (TRNG) can be costly in practice and become a bottleneck on embedded devices. In [IKL+13] the authors introduced the notion of robust pseudo-random number generator (PRG), which must remain secure even against an adversary who can probe at most t wires. They showed that when embedding a robust PRG within a private circuit, the number of random bits can be reduced to \(\mathcal{\tilde{O}}(t^{4})\), that is independent of the circuit size s (up to a logarithmic factor). Using bipartite expander graphs, this can be further reduced to \(\mathcal{\tilde{O}}(t^{3+\varepsilon })\); however the resulting construction is impractical.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_12](https://doi.org/10.1007/978-3-030-45727-3_12)
## Compact NIZKs from Standard Assumptions on Bilinear Maps.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#compact-nizks-from-standard-assumptions-on-bilinear-maps)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#compact-nizks-from-standard-assumptions-on-bilinear-maps)
### Authors
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### Abstract
> A non-interactive zero-knowledge (NIZK) protocol enables a prover to convince a verifier of the truth of a statement without leaking any other information by sending a single message. The main focus of this work is on exploring short pairing-based NIZKs for all \(\mathbf{NP} \) languages based on standard assumptions. In this regime, the seminal work of Groth, Ostrovsky, and Sahai (J.ACM’12) (GOS-NIZK) is still considered to be the state-of-the-art. Although fairly efficient, one drawback of GOS-NIZK is that the proof size is multiplicative in the circuit size computing the \(\mathbf{NP} \) relation. That is, the proof size grows by \(O(|C|\kappa )\), where C is the circuit for the \(\mathbf{NP} \) relation and \(\kappa \) is the security parameter. By now, there have been numerous follow-up works focusing on shortening the proof size of pairing-based NIZKs, however, thus far, all works come at the cost of relying either on a non-standard knowledge-type assumption or a non-static q-type assumption. Specifically, improving the proof size of the original GOS-NIZK under the same standard assumption has remained as an open problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_13](https://doi.org/10.1007/978-3-030-45727-3_13)
## New Constructions of Statistical NIZKs: Dual-Mode DV-NIZKs and More.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#new-constructions-of-statistical-nizks-dual-mode-dv-nizks-and-more)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#new-constructions-of-statistical-nizks-dual-mode-dv-nizks-and-more)
### Authors
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, Inria, Paris, France
* Hoeteck Wee, CNRS, ENS, PSL, Paris, France
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### Abstract
> Non-interactive zero-knowledge proofs (NIZKs) are important primitives in cryptography. A major challenge since the early works on NIZKs has been to construct NIZKs with a statistical zero-knowledge guarantee against unbounded verifiers. In the common reference string (CRS) model, such “statistical NIZK arguments” are currently known from \(k\text {-}\mathsf {Lin} \) in a pairing-group and from \(\mathsf {LWE}\). In the (reusable) designated-verifier model (DV-NIZK), where a trusted setup algorithm generates a reusable verification key for checking proofs, we also have a construction from \(\mathsf {DCR}\). If we relax our requirements to computational zero-knowledge, we additionally have NIZKs from factoring and \(\mathsf {CDH}\) in a pairing group in the CRS model, and from nearly all assumptions that imply public-key encryption (e.g., \(\mathsf {CDH}\), \(\mathsf {LPN}\), \(\mathsf {LWE}\)) in the designated-verifier model. Thus, there still remains a gap in our understanding of statistical NIZKs in both the CRS and the designated-verifier models.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_14](https://doi.org/10.1007/978-3-030-45727-3_14)
## Non-interactive Zero-Knowledge in Pairing-Free Groups from Weaker Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#non-interactive-zero-knowledge-in-pairing-free-groups-from-weaker-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#non-interactive-zero-knowledge-in-pairing-free-groups-from-weaker-assumptions)
### Authors
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Shuichi Katsumata, AIST, Tokyo, Japan
* Bogdan Ursu, ETH Zürich, Zürich, Switzerland
### Abstract
> We provide new constructions of non-interactive zero-knowledge arguments (\(\textsf {NIZKs}\)) for NP from discrete-logarithm-style assumptions over cyclic groups, without relying on pairings. A previous construction from (Canetti et al., Eurocrypt’18) achieves such \(\textsf {NIZKs}\) under the assumption that no efficient adversary can break the key-dependent message (KDM) security of (additive) ElGamal with respect to all (even inefficient) functions over groups of size \(2^\lambda \), with probability better than \(\mathsf {poly} (\lambda )/2^{\lambda }\). This is an extremely strong, non-falsifiable assumption. In particular, even mild (polynomial) improvements over the current best known attacks on the discrete logarithm problem would already contradict this assumption. (Canetti et al. STOC’19) describe how to improve the assumption to rely only on KDM security with respect to all efficient functions, therefore obtaining an assumption that is (in spirit) falsifiable.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_15](https://doi.org/10.1007/978-3-030-45727-3_15)
## Everybody's a Target: Scalability in Public-Key Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#everybodys-a-target-scalability-in-public-key-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#everybodys-a-target-scalability-in-public-key-encryption)
### Authors
* Benedikt Auerbach, IST Austria, Klosterneuburg, Austria
* Federico Giacon, Gnosis Service GmbH, Berlin, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
### Abstract
> For \(1\le m \le n\), we consider a natural m-out-of-n multi-instance scenario for a public-key encryption (PKE) scheme. An adversary, given n independent instances of PKE, wins if he breaks at least m out of the n instances. In this work, we are interested in the scaling factor of PKE schemes, \(\mathrm {SF}\), which measures how well the difficulty of breaking m out of the n instances scales in m. That is, a scaling factor \(\mathrm {SF}=\ell \) indicates that breaking m out of n instances is at least \(\ell \) times more difficult than breaking one single instance. A PKE scheme with small scaling factor hence provides an ideal target for mass surveillance. In fact, the Logjam attack (CCS 2015) implicitly exploited, among other things, an almost constant scaling factor of ElGamal over finite fields (with shared group parameters).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_16](https://doi.org/10.1007/978-3-030-45727-3_16)
## Security Under Message-Derived Keys: Signcryption in iMessage.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#security-under-message-derived-keys-signcryption-in-imessage)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#security-under-message-derived-keys-signcryption-in-imessage)
### Authors
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Igors Stepanovs, Department of Computer Science, ETH Zürich, Zürich, Switzerland
### Abstract
> At the core of Apple’s iMessage is a signcryption scheme that involves symmetric encryption of a message under a key that is derived from the message itself. This motivates us to formalize a primitive we call Encryption under Message-Derived Keys (EMDK). We prove security of the EMDK scheme underlying iMessage. We use this to prove security of the signcryption scheme itself, with respect to definitions of signcryption we give that enhance prior ones to cover issues peculiar to messaging protocols. Our provable-security results are quantitative, and we discuss the practical implications for iMessage.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_17](https://doi.org/10.1007/978-3-030-45727-3_17)
## Double-Base Chains for Scalar Multiplications on Elliptic Curves.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#double-base-chains-for-scalar-multiplications-on-elliptic-curves)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#double-base-chains-for-scalar-multiplications-on-elliptic-curves)
### Authors
* Wei Yu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Bao Li, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Wei Yu, Data Assurance and Communications Security Research Center, Chinese Academy of Sciences, Beijing, 100093, China
* Saud Al Musa, College of Computer Science and Engineering, Taibah University, Medina, Saudi Arabia
* Bao Li, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### Abstract
> Double-base chains (DBCs) are widely used to speed up scalar multiplications on elliptic curves. We present three results of DBCs. First, we display a structure of the set containing all DBCs and propose an iterative algorithm to compute the number of DBCs for a positive integer. This is the first polynomial time algorithm to compute the number of DBCs for positive integers. Secondly, we present an asymptotic lower bound on average Hamming weights of DBCs \(\frac{\log n}{8.25}\) for a positive integer n. This result answers an open question about the Hamming weights of DBCs. Thirdly, we propose a new algorithm to generate an optimal DBC for any positive integer. The time complexity of this algorithm is \(\mathscr {O}\left( \left( \log n\right) ^2 \log \log n\right) \) bit operations and the space complexity is \(\mathscr {O}\left( \left( \log n\right) ^{2}\right) \) bits of memory. This algorithm accelerates the recoding procedure by more than 6 times compared to the state-of-the-art Bernstein, Chuengsatiansup, and Lange’s work. The Hamming weights of optimal DBCs are over 60% smaller than those of NAFs. Scalar multiplication using our optimal DBC is about 13% faster than that using non-adjacent form on elliptic curves over large prime fields.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_18](https://doi.org/10.1007/978-3-030-45727-3_18)
## Stacked Garbling for Disjunctive Zero-Knowledge Proofs.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#stacked-garbling-for-disjunctive-zero-knowledge-proofs)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#stacked-garbling-for-disjunctive-zero-knowledge-proofs)
### Authors
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> Zero-knowledge (ZK) proofs (ZKP) have received wide attention, focusing on non-interactivity, short proof size, and fast verification time. We focus on the fastest total proof time, in particular for large Boolean circuits. Under this metric, Garbled Circuit (GC)-based ZKP (Jawurek et al., [JKO], CCS 2013) remained the state-of-the-art technique due to the low-constant linear scaling of computing the garbling.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_19](https://doi.org/10.1007/978-3-030-45727-3_19)
## Which Languages Have 4-Round Fully Black-Box Zero-Knowledge Arguments from One-Way Functions?
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#which-languages-have-4-round-fully-black-box-zero-knowledge-arguments-from-one-way-functions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#which-languages-have-4-round-fully-black-box-zero-knowledge-arguments-from-one-way-functions)
### Authors
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Rafael Pass, Cornell Tech, New York, USA
* Muthuramakrishnan Venkitasubramaniam, University of Rochester, Rochester, USA
### Abstract
> We prove that if a language \(\mathcal{L}\) has a 4-round fully black-box zero-knowledge argument with negligible soundness based on one-way functions, then \(\overline{\mathcal{L}} \in \mathsf {MA}\). Since \(\mathsf {coNP}\subseteq \mathsf {MA}\) implies that the polynomial hierarchy collapses, our result implies that \(\mathsf {NP}\)-complete languages are unlikely to have 4-round fully black-box zero-knowledge arguments based on one-way functions. In TCC 2018, Hazay and Venkitasubramaniam, and Khurana, Ostrovsky, and Srinivasan demonstrated 4-round fully black-box zero-knowledge arguments for all languages in \(\mathsf {NP}\) based on injective one-way functions. Their results also imply a 5-round protocol based on one-way functions. In essence, our result resolves the round complexity of fully black-box zero-knowledge arguments based on one-way functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_20](https://doi.org/10.1007/978-3-030-45727-3_20)
## Statistical ZAPR Arguments from Bilinear Maps.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#statistical-zapr-arguments-from-bilinear-maps)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#statistical-zapr-arguments-from-bilinear-maps)
### Authors
* Alex Lombardi, MIT, Cambridge, MA, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
* Daniel Wichs, Northeastern University, Boston, MA, USA
* Daniel Wichs, NTT Research Inc., Palo Alto, CA, USA
### Abstract
> Dwork and Naor (FOCS ’00) defined ZAPs as 2-message witness-indistinguishable proofs that are public-coin. We relax this to ZAPs with private randomness (ZAPRs), where the verifier can use private coins to sample the first message (independently of the statement being proved), but the proof must remain publicly verifiable given only the protocol transcript. In particular, ZAPRs are reusable, meaning that the first message can be reused for multiple proofs without compromising security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_21](https://doi.org/10.1007/978-3-030-45727-3_21)
## Statistical ZAP Arguments.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#statistical-zap-arguments)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#statistical-zap-arguments)
### Authors
* Saikrishna Badrinarayanan, VISA Research, Palo Alto, USA
* Rex Fernando, UCLA, Los Angeles, USA
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, USA
### Abstract
> Dwork and Naor (FOCS’00) first introduced and constructed two message public coin witness indistinguishable proofs (ZAPs) for NP based on trapdoor permutations. Since then, ZAPs have also been obtained based on the decisional linear assumption on bilinear maps, and indistinguishability obfuscation, and have proven extremely useful in the design of several cryptographic primitives.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_22](https://doi.org/10.1007/978-3-030-45727-3_22)
## Statistical Zaps and New Oblivious Transfer Protocols.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#statistical-zaps-and-new-oblivious-transfer-protocols)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#statistical-zaps-and-new-oblivious-transfer-protocols)
### Authors
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, PA, USA
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, PA, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, MD, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, MD, USA
* Giulio Malavolta, UC Berkeley, Berkeley, USA
### Abstract
> We study the problem of achieving statistical privacy in interactive proof systems and oblivious transfer – two of the most well studied two-party protocols – when limited rounds of interaction are available.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_23](https://doi.org/10.1007/978-3-030-45727-3_23)
## Measure-Rewind-Measure: Tighter Quantum Random Oracle Model Proofs for One-Way to Hiding and CCA Security.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#measure-rewind-measure-tighter-quantum-random-oracle-model-proofs-for-one-way-to-hiding-and-cca-security)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#measure-rewind-measure-tighter-quantum-random-oracle-model-proofs-for-one-way-to-hiding-and-cca-security)
### Authors
* Veronika Kuchta, Faculty of Information Technology, Monash University, Melbourne, Australia
* Amin Sakzad, Faculty of Information Technology, Monash University, Melbourne, Australia
* Ron Steinfeld, Faculty of Information Technology, Monash University, Melbourne, Australia
* Shi-Feng Sun, Faculty of Information Technology, Monash University, Melbourne, Australia
* Damien Stehlé, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
* Shi-Feng Sun, Data61, CSIRO, Canberra, Australia
### Abstract
> We introduce a new technique called ‘Measure-Rewind-Measure’ (MRM) to achieve tighter security proofs in the quantum random oracle model (QROM). We first apply our MRM technique to derive a new security proof for a variant of the ‘double-sided’ quantum One-Way to Hiding Lemma (O2H) of Bindel et al. [TCC 2019] which, for the first time, avoids the square-root advantage loss in the security proof. In particular, it bypasses a previous ‘impossibility result’ of Jiang, Zhang and Ma [IACR eprint 2019]. We then apply our new O2H Lemma to give a new tighter security proof for the Fujisaki-Okamoto transform for constructing a strong (\({\mathsf {IND}}{\text {-}}{\mathsf {CCA}}\)) Key Encapsulation Mechanism (KEM) from a weak (\({\mathsf {IND}}{\text {-}}{\mathsf {CPA}}\)) public-key encryption scheme satisfying a mild injectivity assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_24](https://doi.org/10.1007/978-3-030-45727-3_24)
## Secure Multi-party Quantum Computation with a Dishonest Majority.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#secure-multi-party-quantum-computation-with-a-dishonest-majority)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#secure-multi-party-quantum-computation-with-a-dishonest-majority)
### Authors
* Yfke Dulek, QuSoft, Amsterdam, The Netherlands
* Alex B. Grilo, QuSoft, Amsterdam, The Netherlands
* Stacey Jeffery, QuSoft, Amsterdam, The Netherlands
* Christian Majenz, QuSoft, Amsterdam, The Netherlands
* Christian Schaffner, QuSoft, Amsterdam, The Netherlands
* Yfke Dulek, University of Amsterdam, Amsterdam, The Netherlands
* Christian Schaffner, University of Amsterdam, Amsterdam, The Netherlands
* Alex B. Grilo, Centrum voor Wiskunde en Informatica, Amsterdam, The Netherlands
* Stacey Jeffery, Centrum voor Wiskunde en Informatica, Amsterdam, The Netherlands
* Christian Majenz, Centrum voor Wiskunde en Informatica, Amsterdam, The Netherlands
### Abstract
> The cryptographic task of secure multi-party (classical) computation has received a lot of attention in the last decades. Even in the extreme case where a computation is performed between k mutually distrustful players, and security is required even for the single honest player if all other players are colluding adversaries, secure protocols are known. For quantum computation, on the other hand, protocols allowing arbitrary dishonest majority have only been proven for \(k=2\). In this work, we generalize the approach taken by Dupuis, Nielsen and Salvail (CRYPTO 2012) in the two-party setting to devise a secure, efficient protocol for multi-party quantum computation for any number of players k, and prove security against up to \(k-1\) colluding adversaries. The quantum round complexity of the protocol for computing a quantum circuit of \(\{\mathsf {CNOT}, \mathsf {T} \}\) depth d is \(O(k \cdot (d + \log n))\), where n is the security parameter. To achieve efficiency, we develop a novel public verification protocol for the Clifford authentication code, and a testing protocol for magic-state inputs, both using classical multi-party computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_25](https://doi.org/10.1007/978-3-030-45727-3_25)
## Efficient Simulation of Random States and Random Unitaries.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#efficient-simulation-of-random-states-and-random-unitaries)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#efficient-simulation-of-random-states-and-random-unitaries)
### Authors
* Gorjan Alagic, QuICS, University of Maryland, College Park, MD, USA
* Gorjan Alagic, NIST, Gaithersburg, MD, USA
* Christian Majenz, QuSoft, Amsterdam, The Netherlands
* Christian Majenz, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Alexander Russell, Department of Computer Science and Engineering, University of Connecticut, Storrs, CT, USA
### Abstract
> We consider the problem of efficiently simulating random quantum states and random unitary operators, in a manner which is convincing to unbounded adversaries with black-box oracle access.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_26](https://doi.org/10.1007/978-3-030-45727-3_26)
## Quantum-Access-Secure Message Authentication via Blind-Unforgeability.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-3.md#quantum-access-secure-message-authentication-via-blind-unforgeability)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-3.md#quantum-access-secure-message-authentication-via-blind-unforgeability)
### Authors
* Gorjan Alagic, QuICS, University of Maryland, and NIST, Gaithersburg, MD, USA
* Christian Majenz, QuSoft and Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Alexander Russell, Department of Computer Science and Engineering, University of Connecticut, Storrs, CT, USA
* Fang Song, Department of Computer Science and Engineering, Texas A&M University, College Station, TX, USA
### Abstract
> Formulating and designing authentication of classical messages in the presence of adversaries with quantum query access has been a longstanding challenge, as the familiar classical notions of unforgeability do not directly translate into meaningful notions in the quantum setting. A particular difficulty is how to fairly capture the notion of “predicting an unqueried value” when the adversary can query in quantum superposition.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_27](https://doi.org/10.1007/978-3-030-45727-3_27)
