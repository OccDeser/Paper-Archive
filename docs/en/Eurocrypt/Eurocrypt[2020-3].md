# Eurocrypt[2020-3]
## (One) Failure Is Not an Option: Bootstrapping the Search for Failures in Lattice-Based Encryption Schemes.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#one-failure-is-not-an-option-bootstrapping-the-search-for-failures-in-lattice-based-encryption-schemes)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#one-failure-is-not-an-option-bootstrapping-the-search-for-failures-in-lattice-based-encryption-schemes)
### Authors
* Jan-Pieter D’Anvers, imec-COSIC, KU Leuven, Leuven, Belgium
* Mélissa Rossi, ANSSI, Paris, France
* Mélissa Rossi, ENS Paris, CNRS, PSL University, Paris, France
* Mélissa Rossi, Thales, Gennevilliers, France
* Mélissa Rossi, Inria, Paris, France
* Fernando Virdia, Information Security Group, Royal Holloway, University of London, Egham, UK
### Abstract
> Lattice-based encryption schemes are often subject to the possibility of decryption failures, in which valid encryptions are decrypted incorrectly. Such failures, in large number, leak information about the secret key, enabling an attack strategy alternative to pure lattice reduction. Extending the “failure boosting” technique of D’Anvers et al. in PKC 2019, we propose an approach that we call “directional failure boosting” that uses previously found “failing ciphertexts” to accelerate the search for new ones. We analyse in detail the case where the lattice is defined over polynomial ring modules quotiented by \(\langle X^{N} + 1 \rangle \) and demonstrate it on a simple Mod-LWE-based scheme parametrized à la Kyber768/Saber. We show that for a given secret key (single-target setting), the cost of searching for additional failing ciphertexts after one or more have already been found, can be sped up dramatically. We thus demonstrate that, in this single-target model, these schemes should be designed so that it is hard to even obtain one decryption failure. Besides, in a wider security model where there are many target secret keys (multi-target setting), our attack greatly improves over the state of the art.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_1](https://doi.org/10.1007/978-3-030-45727-3_1)
## Key Recovery from Gram-Schmidt Norm Leakage in Hash-and-Sign Signatures over NTRU Lattices.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#key-recovery-from-gram-schmidt-norm-leakage-in-hash-and-sign-signatures-over-ntru-lattices)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#key-recovery-from-gram-schmidt-norm-leakage-in-hash-and-sign-signatures-over-ntru-lattices)
### Authors
* Pierre-Alain Fouque, Univ Rennes, CNRS, IRISA, Rennes, France
* Paul Kirchner, Univ Rennes, CNRS, IRISA, Rennes, France
* Yang Yu, Univ Rennes, CNRS, IRISA, Rennes, France
* Mehdi Tibouchi, NTT Corporation, Tokyo, Japan
* Alexandre Wallet, NTT Corporation, Tokyo, Japan
### Abstract
> In this paper, we initiate the study of side-channel leakage in hash-and-sign lattice-based signatures, with particular emphasis on the two efficient implementations of the original GPV lattice-trapdoor paradigm for signatures, namely NIST second-round candidate Falcon and its simpler predecessor DLP. Both of these schemes implement the GPV signature scheme over NTRU lattices, achieving great speed-ups over the general lattice case. Our results are mainly threefold.
> 
> First, we identify a specific source of side-channel leakage in most implementations of those schemes, namely, the one-dimensional Gaussian sampling steps within lattice Gaussian sampling. It turns out that the implementations of these steps often leak the Gram–Schmidt norms of the secret lattice basis.
> 
> Second, we elucidate the link between this leakage and the secret key, by showing that the entire secret key can be efficiently reconstructed solely from those Gram–Schmidt norms. The result makes heavy use of the algebraic structure of the corresponding schemes, which work over a power-of-two cyclotomic field.
> 
> Third, we concretely demonstrate the side-channel attack against DLP (but not Falcon due to the different structures of the two schemes). The challenge is that timing information only provides an approximation of the Gram–Schmidt norms, so our algebraic recovery technique needs to be combined with pruned tree search in order to apply it to approximate values. Experimentally, we show that around \(2^{35}\) DLP traces are enough to reconstruct the entire key with good probability.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_2](https://doi.org/10.1007/978-3-030-45727-3_2)
## An Algebraic Attack on Rank Metric Code-Based Cryptosystems.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#an-algebraic-attack-on-rank-metric-code-based-cryptosystems)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#an-algebraic-attack-on-rank-metric-code-based-cryptosystems)
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
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#low-weight-discrete-logarithm-and-subset-sum-in-20-65n-with-polynomial-memory)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#low-weight-discrete-logarithm-and-subset-sum-in-20-65n-with-polynomial-memory)
### Authors
* Andre Esser, Ruhr University Bochum, Bochum, Germany
* Alexander May, Ruhr University Bochum, Bochum, Germany
### Abstract
> We propose two heuristic polynomial memory collision finding algorithms for the low Hamming weight discrete logarithm problem in any abelian group G. The first one is a direct adaptation of the Becker-Coron-Joux (BCJ) algorithm for subset sum to the discrete logarithm setting. The second one significantly improves on this adaptation for all possible weights using a more involved application of the representation technique together with some new Markov chain analysis. In contrast to other low weight discrete logarithm algorithms, our second algorithm’s time complexity interpolates to Pollard’s \(|G|^{\frac{1}{2}}\) bound for general discrete logarithm instances.
> 
> We also introduce a new heuristic subset sum algorithm with polynomial memory that improves on BCJ’s \(2^{0.72n}\) time bound for random subset sum instances \(a_1, \ldots , a_n, t \in \mathbb {Z}_{2^n}\). Technically, we introduce a novel nested collision finding for subset sum – inspired by the NestedRho algorithm from Crypto ’16 – that recursively produces collisions. We first show how to instantiate our algorithm with run time \(2^{0.649n}\). Using further tricks, we are then able to improve its complexity down to \(2^{0.645n}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_4](https://doi.org/10.1007/978-3-030-45727-3_4)
## Continuous Verifiable Delay Functions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#continuous-verifiable-delay-functions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#continuous-verifiable-delay-functions)
### Authors
* Naomi Ephraim, Cornell Tech, New York, NY, 10044, USA
* Cody Freitag, Cornell Tech, New York, NY, 10044, USA
* Rafael Pass, Cornell Tech, New York, NY, 10044, USA
* Ilan Komargodski, NTT Research, Palo Alto, CA, 94303, USA
### Abstract
> We introduce the notion of a continuous verifiable delay function (cVDF): a function g which is (a) iteratively sequential—meaning that evaluating the iteration \(g^{(t)}\) of g (on a random input) takes time roughly t times the time to evaluate g, even with many parallel processors, and (b) (iteratively) verifiable—the output of \(g^{(t)}\) can be efficiently verified (in time that is essentially independent of t). In other words, the iterated function \(g^{(t)}\) is a verifiable delay function (VDF) (Boneh et al., CRYPTO ’18), having the property that intermediate steps of the computation (i.e., \(g^{(t')}\) for \(t'<t\)) are publicly and continuously verifiable.
> 
> We demonstrate that cVDFs have intriguing applications: (a) they can be used to construct \(\textit{public randomness beacons}\) that only require an initial random seed (and no further unpredictable sources of randomness), (b) enable \(\textit{outsourceable VDFs}\) where any part of the VDF computation can be verifiably outsourced, and (c) have deep complexity-theoretic consequences: in particular, they imply the existence of depth-robust moderately-hard Nash equilibrium problem instances, i.e. instances that can be solved in polynomial time yet require a high sequential running time.
> 
> Our main result is the construction of a cVDF based on the repeated squaring assumption and the soundness of the Fiat-Shamir (FS) heuristic for \(\textit{constant-round proofs}\). We highlight that when viewed as a (plain) VDF, our construction requires a weaker FS assumption than previous ones (earlier constructions require the FS heuristic for either super-logarithmic round proofs, or for arguments).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_5](https://doi.org/10.1007/978-3-030-45727-3_5)
## Generic-Group Delay Functions Require Hidden-Order Groups.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#generic-group-delay-functions-require-hidden-order-groups)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#generic-group-delay-functions-require-hidden-order-groups)
### Authors
* Lior Rotem, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ido Shahaf, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
### Abstract
> Despite the fundamental importance of delay functions, underlying both the classic notion of a time-lock puzzle and the more recent notion of a verifiable delay function, the only known delay function that offers both sufficient structure for realizing these two notions and a realistic level of practicality is the “iterated squaring” construction of Rivest, Shamir and Wagner. This construction, however, is based on rather strong assumptions in groups of hidden orders, such as the RSA group (which requires a trusted setup) or the class group of an imaginary quadratic number field (which is still somewhat insufficiently explored from the cryptographic perspective). For more than two decades, the challenge of constructing delay functions in groups of known orders, admitting a variety of well-studied instantiations, has eluded the cryptography community.
> 
> In this work we prove that there are no constructions of generic-group delay functions in cyclic groups of known orders: We show that for any delay function that does not exploit any particular property of the representation of the underlying group, there exists an attacker that completely breaks the function’s sequentiality when given the group’s order. As any time-lock puzzle and verifiable delay function give rise to a delay function, our result holds for these two notions we well, and explains the lack of success in resolving the above-mentioned long-standing challenge. Moreover, our result holds even if the underlying group is equipped with a d-linear map, for any constant \(d \ge 2\) (and even for super-constant values of d under certain conditions).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_6](https://doi.org/10.1007/978-3-030-45727-3_6)
## Sigma Protocols for MQ, PKP and SIS, and Fishy Signature Schemes.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#sigma-protocols-for-mq-pkp-and-sis-and-fishy-signature-schemes)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#sigma-protocols-for-mq-pkp-and-sis-and-fishy-signature-schemes)
### Authors
* Ward Beullens, imec-COSIC KU Leuven, Kasteelpark Arenberg 10 - bus 2452, 3001, Heverlee, Belgium
### Abstract
> This work presents sigma protocols to prove knowledge of:
> 
> a solution to a system of quadratic polynomials,
> 
> a solution to an instance of the Permuted Kernel Problem and
> 
> a witness for a variety of lattice statements (including SIS).
> 
> Our sigma protocols have soundness error 1/\(q'\), where \(q'\) is any number bounded by the size of the underlying finite field. This is much better than existing proofs, which have soundness error 2/3 or \((q'+1)/2q'\). The prover and verifier time our proofs are \(O(q')\). We achieve this by first constructing so-called sigma protocols with helper, which are sigma protocols where the prover and the verifier are assisted by a trusted third party, and then eliminating the helper from the proof with a “cut-and-choose” protocol. We apply the Fiat-Shamir transform to obtain signature schemes with security proof in the QROM. We show that the resulting signature schemes, which we call the “MUltivariate quaDratic FIat-SHamir” scheme (MUDFISH) and the “ShUffled Solution to Homogeneous linear SYstem FIat-SHamir” scheme (SUSHSYFISH), are more efficient than existing signatures based on the MQ problem and the Permuted Kernel Problem. Our proof system can be used to improve the efficiency of applications relying on (generalizations of) Stern’s protocol. We show that the proof size of our SIS proof is smaller than that of Stern’s protocol by an order of magnitude and that our proof is more efficient than existing post-quantum secure SIS proofs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_7](https://doi.org/10.1007/978-3-030-45727-3_7)
## Signatures from Sequential-OR Proofs.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#signatures-from-sequential-or-proofs)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#signatures-from-sequential-or-proofs)
### Authors
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Patrick Harasser, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Christian Janson, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> OR-proofs enable a prover to show that it knows the witness for one of many statements, or that one out of many statements is true. OR-proofs are a remarkably versatile tool, used to strengthen security properties, design group and ring signature schemes, and achieve tight security. The common technique to build OR-proofs is based on an approach introduced by Cramer, Damgård, and Schoenmakers (CRYPTO’94), where the prover splits the verifier’s challenge into random shares and computes proofs for each statement in parallel.
> 
> In this work we study a different, less investigated OR-proof technique, highlighted by Abe, Ohkubo, and Suzuki (ASIACRYPT’02). The difference is that the prover now computes the individual proofs sequentially. We show that such sequential OR-proofs yield signature schemes which can be proved secure in the non-programmable random oracle model. We complement this positive result with a black-box impossibility proof, showing that the same is unlikely to be the case for signatures derived from traditional OR-proofs. We finally argue that sequential-OR signature schemes can be proved secure in the quantum random oracle model, albeit with very loose bounds and by programming the random oracle.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_8](https://doi.org/10.1007/978-3-030-45727-3_8)
## Compact Adaptively Secure ABE from k-Lin: Beyond NC1 and Towards NL.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#compact-adaptively-secure-abe-from-k-lin-beyond-nc1-and-towards-nl)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#compact-adaptively-secure-abe-from-k-lin-beyond-nc1-and-towards-nl)
### Authors
* Huijia Lin, University of Washington, Seattle, USA
* Ji Luo, University of Washington, Seattle, USA
### Abstract
> We present a new general framework for constructing compact and adaptively secure attribute-based encryption (ABE) schemes from k-Lin in asymmetric bilinear pairing groups. Previously, the only construction [Kowalczyk and Wee, Eurocrypt ’19] that simultaneously achieves compactness and adaptive security from static assumptions supports policies represented by Boolean formulae. Our framework enables supporting more expressive policies represented by arithmetic branching programs.
> 
> Our framework extends to ABE for policies represented by uniform models of computation such as Turing machines. Such policies enjoy the feature of being applicable to attributes of arbitrary lengths. We obtain the first compact adaptively secure ABE for deterministic and non-deterministic finite automata (DFA and NFA) from k-Lin, previously unknown from any static assumptions. Beyond finite automata, we obtain the first ABE for large classes of uniform computation, captured by deterministic and non-deterministic logspace Turing machines (the complexity classes \(\mathsf {L}\) and \(\mathsf {NL}\)) based on k-Lin. Our ABE scheme has compact secret keys of size linear in the description size of the Turing machine M. The ciphertext size grows linearly in the input length, but also linearly in the time complexity, and exponentially in the space complexity. Irrespective of compactness, we stress that our scheme is the first that supports large classes of Turing machines based solely on standard assumptions. In comparison, previous ABE for general Turing machines all rely on strong primitives related to indistinguishability obfuscation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_9](https://doi.org/10.1007/978-3-030-45727-3_9)
## Adaptively Secure ABE for DFA from k-Lin and More.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#adaptively-secure-abe-for-dfa-from-k-lin-and-more)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#adaptively-secure-abe-for-dfa-from-k-lin-and-more)
### Authors
* Junqing Gong, East China Normal University, Shanghai, China
* Junqing Gong, CNRS, ENS and PSL, Paris, France
* Hoeteck Wee, CNRS, ENS and PSL, Paris, France
### Abstract
> In this work, we present:
> 
> the first adaptively secure ABE for DFA from the k-Lin assumption in prime-order bilinear groups; this resolves one of open problems posed by Waters [CRYPTO’12];
> 
> the first ABE for NFA from the k-Lin assumption, provided the number of accepting paths is smaller than the order of the underlying group; the scheme achieves selective security;
> 
> the first compact adaptively secure ABE (supporting unbounded multi-use of attributes) for branching programs from the k-Lin assumption, which generalizes and simplifies the recent result of Kowalczyk and Wee for boolean formula (NC1) [EUROCRYPT’19].
> 
> Our adaptively secure ABE for DFA relies on a new combinatorial mechanism avoiding the exponential security loss in the number of states when naively combining two recent techniques from CRYPTO’19 and EUROCRYPT’19. This requires us to design a selectively secure ABE for NFA; we give a construction which is sufficient for our purpose and of independent interest. Our ABE for branching programs leverages insights from our ABE for DFA.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_10](https://doi.org/10.1007/978-3-030-45727-3_10)
## Tornado: Automatic Generation of Probing-Secure Masked Bitsliced Implementations.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#tornado-automatic-generation-of-probing-secure-masked-bitsliced-implementations)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#tornado-automatic-generation-of-probing-secure-masked-bitsliced-implementations)
### Authors
* Sonia Belaïd, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Raphaël Wintersdorff, CryptoExperts, Paris, France
* Pierre-Évariste Dagand, Sorbonne Université, Paris, France
* Darius Mercadier, Sorbonne Université, Paris, France
### Abstract
> Cryptographic implementations deployed in real world devices often aim at (provable) security against the powerful class of side-channel attacks while keeping reasonable performances. Last year at Asiacrypt, a new formal verification tool named tightPROVE was put forward to exactly determine whether a masked implementation is secure in the well-deployed probing security model for any given security order t. Also recently, a compiler named Usuba was proposed to automatically generate bitsliced implementations of cryptographic primitives.
> 
> This paper goes one step further in the security and performances achievements with a new automatic tool named Tornado. In a nutshell, from the high-level description of a cryptographic primitive, Tornado produces a functionally equivalent bitsliced masked implementation at any desired order proven secure in the probing model, but additionally in the so-called register probing model which much better fits the reality of software implementations. This framework is obtained by the integration of Usuba with \(\mathsf {tightPROVE}^+\), which extends tightPROVE with the ability to verify the security of implementations in the register probing model and to fix them with inserting refresh gadgets at carefully chosen locations accordingly.
> 
> We demonstrate Tornado on the lightweight cryptographic primitives selected to the second round of the NIST competition and which somehow claimed to be masking friendly. It advantageously displays performances of the resulting masked implementations for several masking orders and prove their security in the register probing model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_11](https://doi.org/10.1007/978-3-030-45727-3_11)
## Side-Channel Masking with Pseudo-Random Generator.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#side-channel-masking-with-pseudo-random-generator)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#side-channel-masking-with-pseudo-random-generator)
### Authors
* Jean-Sébastien Coron, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Aurélien Greuet, IDEMIA, Courbevoie, France
* Rina Zeitoun, IDEMIA, Courbevoie, France
### Abstract
> High-order masking countermeasures against side-channel attacks usually require plenty of randomness during their execution. For security against t probes, the classical ISW countermeasure requires \(\mathcal{O}(t^2 s)\) random bits, where s is the circuit size. However running a True Random Number Generator (TRNG) can be costly in practice and become a bottleneck on embedded devices. In [IKL+13] the authors introduced the notion of robust pseudo-random number generator (PRG), which must remain secure even against an adversary who can probe at most t wires. They showed that when embedding a robust PRG within a private circuit, the number of random bits can be reduced to \(\mathcal{\tilde{O}}(t^{4})\), that is independent of the circuit size s (up to a logarithmic factor). Using bipartite expander graphs, this can be further reduced to \(\mathcal{\tilde{O}}(t^{3+\varepsilon })\); however the resulting construction is impractical.
> 
> In this paper we describe a construction where the number of random bits is only \(\mathcal{\tilde{O}}(t^2)\) for security against t probes, without expander graphs; moreover the running time of each pseudo-random generation goes down from \(\mathcal{\tilde{O}}(t^{4})\) to \(\mathcal{\tilde{O}}(t)\). Our technique consists in using multiple independent PRGs instead of a single one. We show that for ISW circuits, the robustness property of the PRG is not required anymore, which leads to simple and efficient constructions. For example, for AES we only need 48 bytes of randomness to get second-order security (\(t=2\)), instead of 2880 in the original Rivain-Prouff countermeasure. As a first feasibility result, we have implemented our countermeasure on an ARM-based embedded device with a relatively slow TRNG, and obtained a \(50\%\) speed-up compared to Rivain-Prouff.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_12](https://doi.org/10.1007/978-3-030-45727-3_12)
## Compact NIZKs from Standard Assumptions on Bilinear Maps.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#compact-nizks-from-standard-assumptions-on-bilinear-maps)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#compact-nizks-from-standard-assumptions-on-bilinear-maps)
### Authors
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### Abstract
> A non-interactive zero-knowledge (NIZK) protocol enables a prover to convince a verifier of the truth of a statement without leaking any other information by sending a single message. The main focus of this work is on exploring short pairing-based NIZKs for all \(\mathbf{NP} \) languages based on standard assumptions. In this regime, the seminal work of Groth, Ostrovsky, and Sahai (J.ACM’12) (GOS-NIZK) is still considered to be the state-of-the-art. Although fairly efficient, one drawback of GOS-NIZK is that the proof size is multiplicative in the circuit size computing the \(\mathbf{NP} \) relation. That is, the proof size grows by \(O(|C|\kappa )\), where C is the circuit for the \(\mathbf{NP} \) relation and \(\kappa \) is the security parameter. By now, there have been numerous follow-up works focusing on shortening the proof size of pairing-based NIZKs, however, thus far, all works come at the cost of relying either on a non-standard knowledge-type assumption or a non-static q-type assumption. Specifically, improving the proof size of the original GOS-NIZK under the same standard assumption has remained as an open problem.
> 
> Our main result is a construction of a pairing-based NIZK for all of \(\mathbf{NP} \) whose proof size is additive in |C|, that is, the proof size only grows by \(|C| +\mathsf {poly}(\kappa )\), based on the decisional linear (DLIN) assumption. Since the DLIN assumption is the same assumption underlying GOS-NIZK, our NIZK is a strict improvement on their proof size.
> 
> As by-products of our main result, we also obtain the following two results: (1) We construct a perfectly zero-knowledge NIZK (NIPZK) for \(\mathbf{NP} \) relations computable in \(\mathbf{NC} ^1\) with proof size \(|w| \cdot \mathsf {poly}(\kappa )\) where |w| is the witness length based on the DLIN assumption. This is the first pairing-based NIPZK for a non-trivial class of \(\mathbf{NP} \) languages whose proof size is independent of |C| based on a standard assumption. (2) We construct a universally composable (UC) NIZK for \(\mathbf{NP} \) relations computable in \(\mathbf{NC} ^1\) in the erasure-free adaptive setting whose proof size is \(|w| \cdot \mathsf {poly}(\kappa )\) from the DLIN assumption. This is an improvement over the recent result of Katsumata, Nishimaki, Yamada, and Yamakawa (CRYPTO’19), which gave a similar result based on a non-static q-type assumption.
> 
> The main building block for all of our NIZKs is a constrained signature scheme with decomposable online-offline efficiency. This is a property which we newly introduce in this paper and construct from the DLIN assumption. We believe this construction is of an independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_13](https://doi.org/10.1007/978-3-030-45727-3_13)
## New Constructions of Statistical NIZKs: Dual-Mode DV-NIZKs and More.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#new-constructions-of-statistical-nizks-dual-mode-dv-nizks-and-more)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#new-constructions-of-statistical-nizks-dual-mode-dv-nizks-and-more)
### Authors
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, Inria, Paris, France
* Hoeteck Wee, CNRS, ENS, PSL, Paris, France
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### Abstract
> Non-interactive zero-knowledge proofs (NIZKs) are important primitives in cryptography. A major challenge since the early works on NIZKs has been to construct NIZKs with a statistical zero-knowledge guarantee against unbounded verifiers. In the common reference string (CRS) model, such “statistical NIZK arguments” are currently known from \(k\text {-}\mathsf {Lin} \) in a pairing-group and from \(\mathsf {LWE}\). In the (reusable) designated-verifier model (DV-NIZK), where a trusted setup algorithm generates a reusable verification key for checking proofs, we also have a construction from \(\mathsf {DCR}\). If we relax our requirements to computational zero-knowledge, we additionally have NIZKs from factoring and \(\mathsf {CDH}\) in a pairing group in the CRS model, and from nearly all assumptions that imply public-key encryption (e.g., \(\mathsf {CDH}\), \(\mathsf {LPN}\), \(\mathsf {LWE}\)) in the designated-verifier model. Thus, there still remains a gap in our understanding of statistical NIZKs in both the CRS and the designated-verifier models.
> 
> In this work, we develop new techniques for constructing statistical NIZK arguments. First, we construct statistical DV-NIZK arguments from the \(k\text {-}\mathsf {Lin} \) assumption in pairing-free groups, the \(\mathsf {QR}\) assumption, and the \(\mathsf {DCR}\) assumption. These are the first constructions in pairing-free groups and from \(\mathsf {QR}\) that satisfy statistical zero-knowledge. All of our constructions are secure even if the verification key is chosen maliciously (i.e., they are “malicious-designated-verifier” NIZKs), and moreover, they satisfy a “dual-mode” property where the CRS can be sampled from two computationally indistinguishable distributions: one distribution yields statistical DV-NIZK arguments while the other yields computational DV-NIZK proofs. We then show how to adapt our \(k\text {-}\mathsf {Lin} \) construction in a pairing group to obtain new publicly-verifiable statistical NIZK arguments from pairings with a qualitatively weaker assumption than existing constructions of pairing-based statistical NIZKs.
> 
> Our constructions follow the classic paradigm of Feige, Lapidot, and Shamir (FLS). While the FLS framework has traditionally been used to construct computational (DV)-NIZK proofs, we newly show that the same framework can be leveraged to construct dual-mode (DV)-NIZKs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_14](https://doi.org/10.1007/978-3-030-45727-3_14)
## Non-interactive Zero-Knowledge in Pairing-Free Groups from Weaker Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#non-interactive-zero-knowledge-in-pairing-free-groups-from-weaker-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#non-interactive-zero-knowledge-in-pairing-free-groups-from-weaker-assumptions)
### Authors
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Shuichi Katsumata, AIST, Tokyo, Japan
* Bogdan Ursu, ETH Zürich, Zürich, Switzerland
### Abstract
> We provide new constructions of non-interactive zero-knowledge arguments (\(\textsf {NIZKs}\)) for NP from discrete-logarithm-style assumptions over cyclic groups, without relying on pairings. A previous construction from (Canetti et al., Eurocrypt’18) achieves such \(\textsf {NIZKs}\) under the assumption that no efficient adversary can break the key-dependent message (KDM) security of (additive) ElGamal with respect to all (even inefficient) functions over groups of size \(2^\lambda \), with probability better than \(\mathsf {poly} (\lambda )/2^{\lambda }\). This is an extremely strong, non-falsifiable assumption. In particular, even mild (polynomial) improvements over the current best known attacks on the discrete logarithm problem would already contradict this assumption. (Canetti et al. STOC’19) describe how to improve the assumption to rely only on KDM security with respect to all efficient functions, therefore obtaining an assumption that is (in spirit) falsifiable.
> 
> Our first construction improves this state of affairs. We provide a construction of \(\textsf {NIZKs}\) for NP under the CDH assumption together with the assumption that no efficient adversary can break the key-dependent message one-wayness of ElGamal with respect to efficient functions over groups of size \(2^\lambda \), with probability better than \(\mathsf {poly} (\lambda )/2^{c\lambda }\) (denoted \(2^{-c\lambda }\)-\(\mathsf {OW\text {-}KDM}\)), for a constant \(c = 3/4\). Unlike the previous assumption, our assumption leaves an exponential gap between the best known attack and the required security guarantee.
> 
> We also analyse whether we could build \(\textsf {NIZKs}\) when CDH does not hold. As a second contribution, we construct an infinitely often \(\textsf {NIZK}\) argument system for NP (where soundness and zero-knowledge are only guaranteed to hold for infinitely many security parameters), under the \(2^{-c\lambda }\)-\(\mathsf {OW\text {-}KDM}\) security of ElGamal with \(c = 28/29+o(1)\), together with the existence of low-depth pseudorandom generators.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_15](https://doi.org/10.1007/978-3-030-45727-3_15)
## Everybody's a Target: Scalability in Public-Key Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#everybodys-a-target-scalability-in-public-key-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#everybodys-a-target-scalability-in-public-key-encryption)
### Authors
* Benedikt Auerbach, IST Austria, Klosterneuburg, Austria
* Federico Giacon, Gnosis Service GmbH, Berlin, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
### Abstract
> For \(1\le m \le n\), we consider a natural m-out-of-n multi-instance scenario for a public-key encryption (PKE) scheme. An adversary, given n independent instances of PKE, wins if he breaks at least m out of the n instances. In this work, we are interested in the scaling factor of PKE schemes, \(\mathrm {SF}\), which measures how well the difficulty of breaking m out of the n instances scales in m. That is, a scaling factor \(\mathrm {SF}=\ell \) indicates that breaking m out of n instances is at least \(\ell \) times more difficult than breaking one single instance. A PKE scheme with small scaling factor hence provides an ideal target for mass surveillance. In fact, the Logjam attack (CCS 2015) implicitly exploited, among other things, an almost constant scaling factor of ElGamal over finite fields (with shared group parameters).
> 
> For Hashed ElGamal over elliptic curves, we use the generic group model to describe how the scaling factor depends on the scheme’s granularity. In low granularity, meaning each public key contains its independent group parameter, the scheme has optimal scaling factor \(\mathrm {SF}=m\); In medium and high granularity, meaning all public keys share the same group parameter, the scheme still has a reasonable scaling factor \(\mathrm {SF}=\sqrt{m}\). Our findings underline that instantiating ElGamal over elliptic curves should be preferred to finite fields in a multi-instance scenario.
> 
> As our main technical contribution, we derive new generic-group lower bounds of \(\varOmega (\sqrt{m p})\) on the complexity of both the m-out-of-n Gap Discrete Logarithm and the m-out-of-n Gap Computational Diffie-Hellman problem over groups of prime order p, extending a recent result by Yun (EUROCRYPT 2015). We establish the lower bound by studying the hardness of a related computational problem which we call the search-by-hypersurface problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_16](https://doi.org/10.1007/978-3-030-45727-3_16)
## Security Under Message-Derived Keys: Signcryption in iMessage.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#security-under-message-derived-keys-signcryption-in-imessage)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#security-under-message-derived-keys-signcryption-in-imessage)
### Authors
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Igors Stepanovs, Department of Computer Science, ETH Zürich, Zürich, Switzerland
### Abstract
> At the core of Apple’s iMessage is a signcryption scheme that involves symmetric encryption of a message under a key that is derived from the message itself. This motivates us to formalize a primitive we call Encryption under Message-Derived Keys (EMDK). We prove security of the EMDK scheme underlying iMessage. We use this to prove security of the signcryption scheme itself, with respect to definitions of signcryption we give that enhance prior ones to cover issues peculiar to messaging protocols. Our provable-security results are quantitative, and we discuss the practical implications for iMessage.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_17](https://doi.org/10.1007/978-3-030-45727-3_17)
## Double-Base Chains for Scalar Multiplications on Elliptic Curves.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#double-base-chains-for-scalar-multiplications-on-elliptic-curves)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#double-base-chains-for-scalar-multiplications-on-elliptic-curves)
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
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#stacked-garbling-for-disjunctive-zero-knowledge-proofs)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#stacked-garbling-for-disjunctive-zero-knowledge-proofs)
### Authors
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> Zero-knowledge (ZK) proofs (ZKP) have received wide attention, focusing on non-interactivity, short proof size, and fast verification time. We focus on the fastest total proof time, in particular for large Boolean circuits. Under this metric, Garbled Circuit (GC)-based ZKP (Jawurek et al., [JKO], CCS 2013) remained the state-of-the-art technique due to the low-constant linear scaling of computing the garbling.
> 
> We improve GC-ZKP for proof statements with conditional clauses. Our communication is proportional to the longest branch rather than to the entire proof statement. This is most useful when the number \(m \) of branches is large, resulting in up to factor \(m \times \) improvement over JKO.
> 
> In our proof-of-concept illustrative application, prover \(\mathsf {P}\) demonstrates knowledge of a bug in a codebase consisting of any number of snippets of actual C code. Our computation cost is linear in the size of the codebase and communication is constant in the number of snippets. That is, we require only enough communication for a single largest snippet!
> 
> Our conceptual contribution is stacked garbling for ZK, a privacy-free circuit garbling scheme that can be used with the JKO GC-ZKP protocol to construct more efficient ZKP. Given a Boolean circuit \(\mathcal {C}\) and computational security parameter \(\kappa \), our garbling is \(L\cdot \kappa \) bits long, where L is the length of the longest execution path in \(\mathcal {C}\). All prior concretely efficient garbling schemes produce garblings of size \(|\mathcal {C} |\cdot \kappa \). The computational cost of our scheme is not increased over prior state-of-the-art.
> 
> We implement our GC-ZKP and demonstrate significantly improved (\(m \times \) over JKO) ZK performance for functions with branching factor \(m \). Compared with recent ZKP (STARK, Libra, KKW, Ligero, Aurora, Bulletproofs), our scheme offers much better proof times for larger circuits (35-\(1000\times \) or more, depending on circuit size and compared scheme).
> 
> For our illustrative application, we consider four C code snippets, each of about 30–50 LOC; one snippet allows an invalid memory dereference. The entire proof takes 0.15 s and communication is 1.5 MB.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_19](https://doi.org/10.1007/978-3-030-45727-3_19)
## Which Languages Have 4-Round Fully Black-Box Zero-Knowledge Arguments from One-Way Functions?
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#which-languages-have-4-round-fully-black-box-zero-knowledge-arguments-from-one-way-functions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#which-languages-have-4-round-fully-black-box-zero-knowledge-arguments-from-one-way-functions)
### Authors
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Rafael Pass, Cornell Tech, New York, USA
* Muthuramakrishnan Venkitasubramaniam, University of Rochester, Rochester, USA
### Abstract
> We prove that if a language \(\mathcal{L}\) has a 4-round fully black-box zero-knowledge argument with negligible soundness based on one-way functions, then \(\overline{\mathcal{L}} \in \mathsf {MA}\). Since \(\mathsf {coNP}\subseteq \mathsf {MA}\) implies that the polynomial hierarchy collapses, our result implies that \(\mathsf {NP}\)-complete languages are unlikely to have 4-round fully black-box zero-knowledge arguments based on one-way functions. In TCC 2018, Hazay and Venkitasubramaniam, and Khurana, Ostrovsky, and Srinivasan demonstrated 4-round fully black-box zero-knowledge arguments for all languages in \(\mathsf {NP}\) based on injective one-way functions. Their results also imply a 5-round protocol based on one-way functions. In essence, our result resolves the round complexity of fully black-box zero-knowledge arguments based on one-way functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_20](https://doi.org/10.1007/978-3-030-45727-3_20)
## Statistical ZAPR Arguments from Bilinear Maps.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#statistical-zapr-arguments-from-bilinear-maps)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#statistical-zapr-arguments-from-bilinear-maps)
### Authors
* Alex Lombardi, MIT, Cambridge, MA, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
* Daniel Wichs, Northeastern University, Boston, MA, USA
* Daniel Wichs, NTT Research Inc., Palo Alto, CA, USA
### Abstract
> Dwork and Naor (FOCS ’00) defined ZAPs as 2-message witness-indistinguishable proofs that are public-coin. We relax this to ZAPs with private randomness (ZAPRs), where the verifier can use private coins to sample the first message (independently of the statement being proved), but the proof must remain publicly verifiable given only the protocol transcript. In particular, ZAPRs are reusable, meaning that the first message can be reused for multiple proofs without compromising security.
> 
> Known constructions of ZAPs from trapdoor permutations or bilinear maps are only computationally WI (and statistically sound). Two recent results of Badrinarayanan-Fernando-Jain-Khurana-Sahai and Goyal-Jain-Jin-Malavolta [EUROCRYPT ’20] construct the first statistical ZAP arguments, which are statistically WI (and computationally sound), from the quasi-polynomial LWE assumption. Here, we construct statistical ZAPR arguments from the quasi-polynomial decision-linear (DLIN) assumption on groups with a bilinear map. Our construction relies on a combination of several tools, including the Groth-Ostrovsky-Sahai NIZK and NIWI [EUROCRYPT ’06, CRYPTO ’06, JACM ’12], “sometimes-binding statistically hiding commitments” [Kalai-Khurana-Sahai, EUROCRYPT ’18] and the “MPC-in-the-head” technique [Ishai-Kushilevitz-Ostrovsky-Sahai, STOC ’07].

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_21](https://doi.org/10.1007/978-3-030-45727-3_21)
## Statistical ZAP Arguments.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#statistical-zap-arguments)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#statistical-zap-arguments)
### Authors
* Saikrishna Badrinarayanan, VISA Research, Palo Alto, USA
* Rex Fernando, UCLA, Los Angeles, USA
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, USA
### Abstract
> Dwork and Naor (FOCS’00) first introduced and constructed two message public coin witness indistinguishable proofs (ZAPs) for NP based on trapdoor permutations. Since then, ZAPs have also been obtained based on the decisional linear assumption on bilinear maps, and indistinguishability obfuscation, and have proven extremely useful in the design of several cryptographic primitives.
> 
> However, all known constructions of two-message public coin (or even publicly verifiable) proof systems only guarantee witness indistinguishability against computationally bounded verifiers. In this paper, we construct the first public coin two message witness indistinguishable (WI) arguments for NP with statistical privacy, assuming quasi-polynomial hardness of the learning with errors (LWE) assumption. We also show that the same protocol has a super-polynomial simulator (SPS), which yields the first public-coin SPS statistical zero knowledge argument. Prior to this, there were no known constructions of two-message publicly verifiable WI protocols under lattice assumptions, even satisfying the weaker notion of computational witness indistinguishability.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_22](https://doi.org/10.1007/978-3-030-45727-3_22)
## Statistical Zaps and New Oblivious Transfer Protocols.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#statistical-zaps-and-new-oblivious-transfer-protocols)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#statistical-zaps-and-new-oblivious-transfer-protocols)
### Authors
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, PA, USA
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, PA, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, MD, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, MD, USA
* Giulio Malavolta, UC Berkeley, Berkeley, USA
### Abstract
> We study the problem of achieving statistical privacy in interactive proof systems and oblivious transfer – two of the most well studied two-party protocols – when limited rounds of interaction are available.
> 
> Statistical Zaps: We give the first construction of statistical Zaps, namely, two-round statistical witness-indistinguishable (WI) protocols with a public-coin verifier. Our construction achieves computational soundness based on the quasi-polynomial hardness of learning with errors assumption.
> 
> Three-Round Statistical Receiver-Private Oblivious Transfer: We give the first construction of a three-round oblivious transfer (OT) protocol – in the plain model – that achieves statistical privacy for receivers and computational privacy for senders against malicious adversaries, based on polynomial-time assumptions. The round-complexity of our protocol is optimal.
> 
> We obtain our first result by devising a public-coin approach to compress sigma protocols, without relying on trusted setup. To obtain our second result, we devise a general framework via a new notion of statistical hash commitments that may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_23](https://doi.org/10.1007/978-3-030-45727-3_23)
## Measure-Rewind-Measure: Tighter Quantum Random Oracle Model Proofs for One-Way to Hiding and CCA Security.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#measure-rewind-measure-tighter-quantum-random-oracle-model-proofs-for-one-way-to-hiding-and-cca-security)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#measure-rewind-measure-tighter-quantum-random-oracle-model-proofs-for-one-way-to-hiding-and-cca-security)
### Authors
* Veronika Kuchta, Faculty of Information Technology, Monash University, Melbourne, Australia
* Amin Sakzad, Faculty of Information Technology, Monash University, Melbourne, Australia
* Ron Steinfeld, Faculty of Information Technology, Monash University, Melbourne, Australia
* Shi-Feng Sun, Faculty of Information Technology, Monash University, Melbourne, Australia
* Damien Stehlé, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
* Shi-Feng Sun, Data61, CSIRO, Canberra, Australia
### Abstract
> We introduce a new technique called ‘Measure-Rewind-Measure’ (MRM) to achieve tighter security proofs in the quantum random oracle model (QROM). We first apply our MRM technique to derive a new security proof for a variant of the ‘double-sided’ quantum One-Way to Hiding Lemma (O2H) of Bindel et al. [TCC 2019] which, for the first time, avoids the square-root advantage loss in the security proof. In particular, it bypasses a previous ‘impossibility result’ of Jiang, Zhang and Ma [IACR eprint 2019]. We then apply our new O2H Lemma to give a new tighter security proof for the Fujisaki-Okamoto transform for constructing a strong (\({\mathsf {IND}}{\text {-}}{\mathsf {CCA}}\)) Key Encapsulation Mechanism (KEM) from a weak (\({\mathsf {IND}}{\text {-}}{\mathsf {CPA}}\)) public-key encryption scheme satisfying a mild injectivity assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_24](https://doi.org/10.1007/978-3-030-45727-3_24)
## Secure Multi-party Quantum Computation with a Dishonest Majority.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#secure-multi-party-quantum-computation-with-a-dishonest-majority)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#secure-multi-party-quantum-computation-with-a-dishonest-majority)
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
> The cryptographic task of secure multi-party (classical) computation has received a lot of attention in the last decades. Even in the extreme case where a computation is performed between k mutually distrustful players, and security is required even for the single honest player if all other players are colluding adversaries, secure protocols are known. For quantum computation, on the other hand, protocols allowing arbitrary dishonest majority have only been proven for \(k=2\). In this work, we generalize the approach taken by Dupuis, Nielsen and Salvail (CRYPTO 2012) in the two-party setting to devise a secure, efficient protocol for multi-party quantum computation for any number of players k, and prove security against up to \(k-1\) colluding adversaries. The quantum round complexity of the protocol for computing a quantum circuit of \(\{\mathsf {CNOT}, \mathsf {T} \}\) depth d is \(O(k \cdot (d + \log n))\), where n is the security parameter. To achieve efficiency, we develop a novel public verification protocol for the Clifford authentication code, and a testing protocol for magic-state inputs, both using classical multi-party computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_25](https://doi.org/10.1007/978-3-030-45727-3_25)
## Efficient Simulation of Random States and Random Unitaries.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#efficient-simulation-of-random-states-and-random-unitaries)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#efficient-simulation-of-random-states-and-random-unitaries)
### Authors
* Gorjan Alagic, QuICS, University of Maryland, College Park, MD, USA
* Gorjan Alagic, NIST, Gaithersburg, MD, USA
* Christian Majenz, QuSoft, Amsterdam, The Netherlands
* Christian Majenz, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Alexander Russell, Department of Computer Science and Engineering, University of Connecticut, Storrs, CT, USA
### Abstract
> We consider the problem of efficiently simulating random quantum states and random unitary operators, in a manner which is convincing to unbounded adversaries with black-box oracle access.
> 
> This problem has previously only been considered for restricted adversaries. Against adversaries with an a priori bound on the number of queries, it is well-known that t-designs suffice. Against polynomial-time adversaries, one can use pseudorandom states (PRS) and pseudorandom unitaries (PRU), as defined in a recent work of Ji, Liu, and Song; unfortunately, no provably secure construction is known for PRUs.
> 
> In our setting, we are concerned with unbounded adversaries. Nonetheless, we are able to give stateful quantum algorithms which simulate the ideal object in both settings of interest. In the case of Haar-random states, our simulator is polynomial-time, has negligible error, and can also simulate verification and reflection through the simulated state. This yields an immediate application to quantum money: a money scheme which is information-theoretically unforgeable and untraceable. In the case of Haar-random unitaries, our simulator takes polynomial space, but simulates both forward and inverse access with zero error.
> 
> These results can be seen as the first significant steps in developing a theory of lazy sampling for random quantum objects.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_26](https://doi.org/10.1007/978-3-030-45727-3_26)
## Quantum-Access-Secure Message Authentication via Blind-Unforgeability.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#quantum-access-secure-message-authentication-via-blind-unforgeability)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#quantum-access-secure-message-authentication-via-blind-unforgeability)
### Authors
* Gorjan Alagic, QuICS, University of Maryland, and NIST, Gaithersburg, MD, USA
* Christian Majenz, QuSoft and Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Alexander Russell, Department of Computer Science and Engineering, University of Connecticut, Storrs, CT, USA
* Fang Song, Department of Computer Science and Engineering, Texas A&M University, College Station, TX, USA
### Abstract
> Formulating and designing authentication of classical messages in the presence of adversaries with quantum query access has been a longstanding challenge, as the familiar classical notions of unforgeability do not directly translate into meaningful notions in the quantum setting. A particular difficulty is how to fairly capture the notion of “predicting an unqueried value” when the adversary can query in quantum superposition.
> 
> We propose a natural definition of unforgeability against quantum adversaries called blind unforgeability. This notion defines a function to be predictable if there exists an adversary who can use “partially blinded” oracle access to predict values in the blinded region. We support the proposal with a number of technical results. We begin by establishing that the notion coincides with EUF-CMA in the classical setting and go on to demonstrate that the notion is satisfied by a number of simple guiding examples, such as random functions and quantum-query-secure pseudorandom functions. We then show the suitability of blind unforgeability for supporting canonical constructions and reductions. We prove that the “hash-and-MAC” paradigm and the Lamport one-time digital signature scheme are indeed unforgeable according to the definition. To support our analysis, we additionally define and study a new variety of quantum-secure hash functions called Bernoulli-preserving.
> 
> Finally, we demonstrate that blind unforgeability is strictly stronger than a previous definition of Boneh and Zhandry [EUROCRYPT ’13, CRYPTO ’13] and resolve an open problem concerning this previous definition by constructing an explicit function family which is forgeable yet satisfies the definition.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_27](https://doi.org/10.1007/978-3-030-45727-3_27)
