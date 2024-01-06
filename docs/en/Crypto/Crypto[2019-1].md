# Crypto[2019-1]
## Cryptanalysis of OCB2: Attacks on Authenticity and Confidentiality.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#cryptanalysis-of-ocb2-attacks-on-authenticity-and-confidentiality)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#cryptanalysis-of-ocb2-attacks-on-authenticity-and-confidentiality)
### Authors
* Akiko Inoue, NEC Corporation, Kawasaki, Japan
* Kazuhiko Minematsu, NEC Corporation, Kawasaki, Japan
* Tetsu Iwata, Nagoya University, Nagoya, Japan
* Bertram Poettering, Royal Holloway, University of London, London, UK
* Bertram Poettering, IBM Research Zurich, Zurich, Switzerland
### Abstract
> We present practical attacks on OCB2. This mode of operation of a blockcipher was designed with the aim to provide particularly efficient and provably-secure authenticated encryption services, and since its proposal about 15 years ago it belongs to the top performers in this realm. OCB2 was included in an ISO standard in 2009.
> 
> An internal building block of OCB2 is the tweakable blockcipher obtained by operating a regular blockcipher in \( \text {XEX} ^*\) mode. The latter provides security only when evaluated in accordance with certain technical restrictions that, as we note, are not always respected by OCB2. This leads to devastating attacks against OCB2’s security promises: We develop a range of very practical attacks that, amongst others, demonstrate universal forgeries and full plaintext recovery. We complete our report with proposals for (provably) repairing OCB2. To our understanding, as a direct consequence of our findings, OCB2 is currently in a process of removal from ISO standards. Our attacks do not apply to OCB1 and OCB3, and our privacy attacks on OCB2 require an active adversary.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_1](https://doi.org/10.1007/978-3-030-26948-7_1)
## Quantum Cryptanalysis in the RAM Model: Claw-Finding Attacks on SIKE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#quantum-cryptanalysis-in-the-ram-model-claw-finding-attacks-on-sike)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#quantum-cryptanalysis-in-the-ram-model-claw-finding-attacks-on-sike)
### Authors
* Samuel Jaques, Institute for Quantum Computing, Department of Combinatorics and Optimization, University of Waterloo, Waterloo, ON, N2L 3G1, Canada
* John M. Schanck, Institute for Quantum Computing, Department of Combinatorics and Optimization, University of Waterloo, Waterloo, ON, N2L 3G1, Canada
### Abstract
> We introduce models of computation that enable direct comparisons between classical and quantum algorithms. Incorporating previous work on quantum computation and error correction, we justify the use of the gate-count and depth-times-width cost metrics for quantum circuits. We demonstrate the relevance of these models to cryptanalysis by revisiting, and increasing, the security estimates for the Supersingular Isogeny Diffie–Hellman (SIDH) and Supersingular Isogeny Key Encapsulation (SIKE) schemes. Our models, analyses, and physical justifications have applications to a number of memory intensive quantum algorithms.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_2](https://doi.org/10.1007/978-3-030-26948-7_2)
## Fully Secure Attribute-Based Encryption for t-CNF from LWE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#fully-secure-attribute-based-encryption-for-t-cnf-from-lwe)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#fully-secure-attribute-based-encryption-for-t-cnf-from-lwe)
### Authors
* Rotem Tsabary, Weizmann Institute of Science, Rehovot, Israel
### Abstract
> Attribute-based Encryption (ABE), first introduced by [SW05, GPSW06], is a public key encryption system that can support multiple users with varying decryption permissions. One of the main properties of such schemes is the supported function class of policies. While there are fully secure constructions from bilinear maps for a fairly large class of policies, the situation with lattice-based constructions is less satisfactory and many efforts were made to close this gap. Prior to this work the only known fully secure lattice construction was for the class of point functions (also known as IBE).
> 
> In this work we construct for the first time a lattice-based (ciphertext-policy) ABE scheme for the function class t-CNF, which consists of CNF formulas where each clause depends on at most t bits of the input, for any constant t. This class includes NP-verification policies, bit-fixing policies and t-threshold policies. Towards this goal we also construct a fully secure single-key constrained PRF from OWF for the same function class, which might be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_3](https://doi.org/10.1007/978-3-030-26948-7_3)
## Noninteractive Zero Knowledge for NP from (Plain) Learning with Errors.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#noninteractive-zero-knowledge-for-np-from-plain-learning-with-errors)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#noninteractive-zero-knowledge-for-np-from-plain-learning-with-errors)
### Authors
* Chris Peikert, Computer Science and Engineering, University of Michigan, Ann Arbor, USA
* Sina Shiehian, Computer Science and Engineering, University of Michigan, Ann Arbor, USA
### Abstract
> We finally close the long-standing problem of constructing a noninteractive zero-knowledge (NIZK) proof system for any NP language with security based on the plain Learning With Errors (LWE) problem, and thereby on worst-case lattice problems. Our proof system instantiates the framework recently developed by Canetti et al. [EUROCRYPT’18], Holmgren and Lombardi [FOCS’18], and Canetti et al. [STOC’19] for soundly applying the Fiat–Shamir transform using a hash function family that is correlation intractable for a suitable class of relations. Previously, such hash families were based either on “exotic” assumptions (e.g., indistinguishability obfuscation or optimal hardness of certain LWE variants) or, more recently, on the existence of circularly secure fully homomorphic encryption (FHE). However, none of these assumptions are known to be implied by plain LWE or worst-case hardness.
> 
> Our main technical contribution is a hash family that is correlation intractable for arbitrary size-S circuits, for any polynomially bounded S, based on plain LWE (with small polynomial approximation factors). The construction combines two novel ingredients: a correlation-intractable hash family for log-depth circuits based on LWE (or even the potentially harder Short Integer Solution problem), and a “bootstrapping” transform that uses (leveled) FHE to promote correlation intractability for the FHE decryption circuit to arbitrary (bounded) circuits. Our construction can be instantiated in two possible “modes,” yielding a NIZK that is either computationally sound and statistically zero knowledge in the common random string model, or vice-versa in the common reference string model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_4](https://doi.org/10.1007/978-3-030-26948-7_4)
## Lattice-Based Zero-Knowledge Proofs: New Techniques for Shorter and Faster Constructions and Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#lattice-based-zero-knowledge-proofs-new-techniques-for-shorter-and-faster-constructions-and-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#lattice-based-zero-knowledge-proofs-new-techniques-for-shorter-and-faster-constructions-and-applications)
### Authors
* Muhammed F. Esgin, Faculty of Information Technology, Monash University, Clayton, Australia
* Ron Steinfeld, Faculty of Information Technology, Monash University, Clayton, Australia
* Joseph K. Liu, Faculty of Information Technology, Monash University, Clayton, Australia
* Muhammed F. Esgin, Data61, CSIRO, Marsfield, Australia
* Dongxi Liu, Data61, CSIRO, Marsfield, Australia
### Abstract
> We devise new techniques for design and analysis of efficient lattice-based zero-knowledge proofs (ZKP). First, we introduce one-shot proof techniques for non-linear polynomial relations of degree \(k\ge 2\), where the protocol achieves a negligible soundness error in a single execution, and thus performs significantly better in both computation and communication compared to prior protocols requiring multiple repetitions. Such proofs with degree \(k\ge 2\) have been crucial ingredients for important privacy-preserving protocols in the discrete logarithm setting, such as Bulletproofs (IEEE S&P ’18) and arithmetic circuit arguments (EUROCRYPT ’16). In contrast, one-shot proofs in lattice-based cryptography have previously only been shown for the linear case (\(k=1\)) and a very specific quadratic case (\(k=2\)), which are obtained as a special case of our technique.
> 
> Moreover, we introduce two speedup techniques for lattice-based ZKPs: a CRT-packing technique supporting “inter-slot” operations, and “NTT-friendly” tools that permit the use of fully-splitting rings. The former technique comes at almost no cost to the proof length, and the latter one barely increases it, which can be compensated for by tweaking the rejection sampling parameters while still having faster computation overall.
> 
> To illustrate the utility of our techniques, we show how to use them to build efficient relaxed proofs for important relations, namely proof of commitment to bits, one-out-of-many proof, range proof and set membership proof. Despite their relaxed nature, we further show how our proof systems can be used as building blocks for advanced cryptographic tools such as ring signatures.
> 
> Our ring signature achieves a dramatic improvement in length over all the existing proposals from lattices at the same security level. The computational evaluation also shows that our construction is highly likely to outperform all the relevant works in running times. Being efficient in both aspects, our ring signature is particularly suitable for both small-scale and large-scale applications such as cryptocurrencies and e-voting systems. No trusted setup is required for any of our proposals.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_5](https://doi.org/10.1007/978-3-030-26948-7_5)
## Efficient Lattice-Based Zero-Knowledge Arguments with Standard Soundness: Construction and Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#efficient-lattice-based-zero-knowledge-arguments-with-standard-soundness-construction-and-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#efficient-lattice-based-zero-knowledge-arguments-with-standard-soundness-construction-and-applications)
### Authors
* Rupeng Yang, School of Computer Science and Technology, Shandong University, Jinan, 250101, China
* Rupeng Yang, Department of Computing, The Hong Kong Polytechnic University, Hung Hom, Hong Kong
* Man Ho Au, Department of Computing, The Hong Kong Polytechnic University, Hung Hom, Hong Kong
* Zuoxia Yu, Department of Computing, The Hong Kong Polytechnic University, Hung Hom, Hong Kong
* Zhenfei Zhang, Algorand, Boston, USA
* Qiuliang Xu, School of Software, Shandong University, Jinan, 250101, China
* William Whyte, Qualcomm Technologies Incorporated, Boxborough, MA, USA
### Abstract
> We provide new zero-knowledge argument of knowledge systems that work directly for a wide class of language, namely, ones involving the satisfiability of matrix-vector relations and integer relations commonly found in constructions of lattice-based cryptography. Prior to this work, practical arguments for lattice-based relations either have a constant soundness error \((2/3)\), or consider a weaker form of soundness, namely, extraction only guarantees that the prover is in possession of a witness that “approximates” the actual witness. Our systems do not suffer from these limitations.
> 
> The core of our new argument systems is an efficient zero-knowledge argument of knowledge of a solution to a system of linear equations, where variables of this solution satisfy a set of quadratic constraints. This argument enjoys standard soundness, a small soundness error \((1/poly)\), and a complexity linear in the size of the solution. Using our core argument system, we construct highly efficient argument systems for a variety of statements relevant to lattices, including linear equations with short solutions and matrix-vector relations with hidden matrices.
> 
> Based on our argument systems, we present several new constructions of common privacy-preserving primitives in the standard lattice setting, including a group signature, a ring signature, an electronic cash system, and a range proof protocol. Our new constructions are one to three orders of magnitude more efficient than the state of the art (in standard lattice). This illustrates the efficiency and expressiveness of our argument system.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_6](https://doi.org/10.1007/978-3-030-26948-7_6)
## Algebraic Techniques for Short(er) Exact Lattice-Based Zero-Knowledge Proofs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#algebraic-techniques-for-short-er-exact-lattice-based-zero-knowledge-proofs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#algebraic-techniques-for-short-er-exact-lattice-based-zero-knowledge-proofs)
### Authors
* Jonathan Bootle, IBM Research – Zurich, Rüschlikon, Switzerland
* Vadim Lyubashevsky, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
### Abstract
> A key component of many lattice-based protocols is a zero-knowledge proof of knowledge of a vector \(\vec {s}\) with small coefficients satisfying \(A\vec {s}=\vec {u}\bmod \,q\). While there exist fairly efficient proofs for a relaxed version of this equation which prove the knowledge of \(\vec {s}'\) and c satisfying \(A\vec {s}'=\vec {u}c\) where \(\Vert \vec {s}'\Vert \gg \Vert \vec {s}\Vert \) and c is some small element in the ring over which the proof is performed, the proofs for the exact version of the equation are considerably less practical. The best such proof technique is an adaptation of Stern’s protocol (Crypto ’93), for proving knowledge of nearby codewords, to larger moduli. The scheme is a \(\varSigma \)-protocol, each of whose iterations has soundness error \(2{/}3\), and thus requires over 200 repetitions to obtain soundness error of \(2^{-128}\), which is the main culprit behind the large size of the proofs produced.
> 
> In this paper, we propose the first lattice-based proof system that significantly outperforms Stern-type proofs for proving knowledge of a short \(\vec {s}\) satisfying \(A\vec {s}=\vec {u}\bmod \,q\). Unlike Stern’s proof, which is combinatorial in nature, our proof is more algebraic and uses various relaxed zero-knowledge proofs as sub-routines. The main savings in our proof system comes from the fact that each round has soundness error of \(1{/}n\), where n is the number of columns of A. For typical applications, n is a few thousand, and therefore our proof needs to be repeated around 10 times to achieve a soundness error of \(2^{-128}\). For concrete parameters, it produces proofs that are around an order of magnitude smaller than those produced using Stern’s approach.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_7](https://doi.org/10.1007/978-3-030-26948-7_7)
## Seedless Fruit Is the Sweetest: Random Number Generation, Revisited.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#seedless-fruit-is-the-sweetest-random-number-generation-revisited)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#seedless-fruit-is-the-sweetest-random-number-generation-revisited)
### Authors
* Sandro Coretti, IOHK, Zurich, Switzerland
* Yevgeniy Dodis, New York University, New York, USA
* Harish Karthikeyan, New York University, New York, USA
* Stefano Tessaro, University of Washington, Seattle, WA, USA
### Abstract
> The need for high-quality randomness in cryptography makes random-number generation one of its most fundamental tasks.
> 
> A recent important line of work (initiated by Dodis et al., CCS ’13) focuses on the notion of robustness for pseudorandom number generators (PRNGs) with inputs. These are primitives that use various sources to accumulate sufficient entropy into a state, from which pseudorandom bits are extracted. Robustness ensures that PRNGs remain secure even under state compromise and adversarial control of entropy sources. However, the achievability of robustness inherently depends on a seed, or, alternatively, on an ideal primitive (e.g., a random oracle), independent of the source of entropy. Both assumptions are problematic: seed generation requires randomness to start with, and it is arguable whether the seed or the ideal primitive can be kept independent of the source.
> 
> This paper resolves this dilemma by putting forward new notions of robustness which enable both (1) seedless PRNGs and (2) primitive-dependent adversarial sources of entropy. To bypass obvious impossibility results, we make a realistic compromise by requiring that the source produce sufficient entropy even given its evaluations of the underlying primitive. We also provide natural, practical, and provably secure constructions based on hash-function designs from compression functions, block ciphers, and permutations. Our constructions can be instantiated with minimal changes to industry-standard hash functions SHA-2 and SHA-3, or key derivation function HKDF, and can be downgraded to (online) seedless randomness extractors, which are of independent interest.
> 
> On the way we consider both a computational variant of robustness, where attackers only make a bounded number of queries to the ideal primitive, as well as a new information-theoretic variant, which dispenses with this assumption to a certain extent, at the price of requiring a high rate of injected weak randomness (as it is, e.g., plausible on Intel’s on-chip RNG). The latter notion enables applications such as everlasting security. Finally, we show that the CBC extractor, used by Intel’s on-chip RNG, is provably insecure in our model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_8](https://doi.org/10.1007/978-3-030-26948-7_8)
## Nonces Are Noticed: AEAD Revisited.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#nonces-are-noticed-aead-revisited)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#nonces-are-noticed-aead-revisited)
### Authors
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Ruth Ng, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Björn Tackmann, IBM Research – Zurich, Rüschlikon, Switzerland
### Abstract
> We draw attention to a gap between theory and usage of nonce-based symmetric encryption, under which the way the former treats nonces can result in violation of privacy in the latter. We bridge the gap with a new treatment of nonce-based symmetric encryption that modifies the syntax (decryption no longer takes a nonce), upgrades the security goal (asking that not just messages, but also nonces, be hidden) and gives simple, efficient schemes conforming to the new definitions. We investigate both basic security (holding when nonces are not reused) and advanced security (misuse resistance, providing best-possible guarantees when nonces are reused).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_9](https://doi.org/10.1007/978-3-030-26948-7_9)
## How to Build Pseudorandom Functions from Public Random Permutations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#how-to-build-pseudorandom-functions-from-public-random-permutations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#how-to-build-pseudorandom-functions-from-public-random-permutations)
### Authors
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
* Eran Lambooij, University of Haifa, Haifa, Israel
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### Abstract
> Pseudorandom functions are traditionally built upon block ciphers, but with the trend of permutation based cryptography, it is a natural question to investigate the design of pseudorandom functions from random permutations. We present a generic study of how to build beyond birthday bound secure pseudorandom functions from public random permutations. We first show that a pseudorandom function based on a single permutation call cannot be secure beyond the \(2^{n/2}\) birthday bound, where n is the state size of the function. We next consider the Sum of Even-Mansour (SoEM) construction, that instantiates the sum of permutations with the Even-Mansour construction. We prove that SoEM achieves tight \(2n{/}3\)-bit security if it is constructed from two independent permutations and two randomly drawn keys. We also demonstrate a birthday bound attack if either the permutations or the keys are identical. Finally, we present the Sum of Key Alternating Ciphers (SoKAC) construction, a translation of Encrypted Davies-Meyer Dual to a public permutation based setting, and show that SoKAC achieves tight \(2n{/}3\)-bit security even when a single key is used.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_10](https://doi.org/10.1007/978-3-030-26948-7_10)
## New Results on Modular Inversion Hidden Number Problem and Inversive Congruential Generator.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#new-results-on-modular-inversion-hidden-number-problem-and-inversive-congruential-generator)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#new-results-on-modular-inversion-hidden-number-problem-and-inversive-congruential-generator)
### Authors
* Jun Xu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Jun Xu, Data Assurance and Communications Security Research Center, Chinese Academy of Sciences, Beijing, 100093, China
* Lei Hu, Data Assurance and Communications Security Research Center, Chinese Academy of Sciences, Beijing, 100093, China
* Santanu Sarkar, Department of Mathematics, Indian Institute of Technology Madras, Sardar Patel Road, Chennai, 600036, India
* Huaxiong Wang, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University Singapore, Singapore, Singapore
* Yanbin Pan, Key Laboratory of Mathematics Mechanization, NCMIS, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, 100190, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### Abstract
> The Modular Inversion Hidden Number Problem (MIHNP), introduced by Boneh, Halevi and Howgrave-Graham in Asiacrypt 2001, is briefly described as follows: Let \({\mathrm {MSB}}_{\delta }(z)\) refer to the \(\delta \) most significant bits of z. Given many samples \(\left( t_{i}, {\mathrm {MSB}}_{\delta }((\alpha + t_{i})^{-1} \bmod {p})\right) \) for random \(t_i \in \mathbb {Z}_p\), the goal is to recover the hidden number \(\alpha \in \mathbb {Z}_p\). MIHNP is an important class of Hidden Number Problem.
> 
> In this paper, we revisit the Coppersmith technique for solving a class of modular polynomial equations, which is respectively derived from the recovering problem of the hidden number \(\alpha \) in MIHNP. For any positive integer constant d, let integer \(n=d^{3+o(1)}\). Given a sufficiently large modulus p, \(n+1\) samples of MIHNP, we present a heuristic algorithm to recover the hidden number \(\alpha \) with a probability close to 1 when \(\delta /\log _2 p>\frac{1}{d\,+\,1}+o(\frac{1}{d})\). The overall time complexity of attack is polynomial in \(\log _2 p\), where the complexity of the LLL algorithm grows as \(d^{\mathcal {O}(d)}\) and the complexity of the Gröbner basis computation grows as \((2d)^{\mathcal {O}(n^2)}\). When \(d> 2\), this asymptotic bound outperforms \(\delta /\log _2 p>\frac{1}{3}\) which is the asymptotic bound proposed by Boneh, Halevi and Howgrave-Graham in Asiacrypt 2001. It is the first time that a better bound for solving MIHNP is given, which implies that the conjecture that MIHNP is hard whenever \(\delta /\log _2 p<\frac{1}{3}\) is broken. Moreover, we also get the best result for attacking the Inversive Congruential Generator (ICG) up to now.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_11](https://doi.org/10.1007/978-3-030-26948-7_11)
## On the Shortness of Vectors to Be Found by the Ideal-SVP Quantum Algorithm.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#on-the-shortness-of-vectors-to-be-found-by-the-ideal-svp-quantum-algorithm)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#on-the-shortness-of-vectors-to-be-found-by-the-ideal-svp-quantum-algorithm)
### Authors
* Léo Ducas, Cryptology Group, CWI, Amsterdam, The Netherlands
* Benjamin Wesolowski, Cryptology Group, CWI, Amsterdam, The Netherlands
* Maxime Plançon, Ecole Normale Supérieure Paris-Saclay, Cachan, France
### Abstract
> The hardness of finding short vectors in ideals of cyclotomic number fields (hereafter, Ideal-SVP) can serve as a worst-case assumption for numerous efficient cryptosystems, via the average-case problems Ring-SIS and Ring-LWE. For a while, it could be assumed the Ideal-SVP problem was as hard as the analog problem for general lattices (SVP), even when considering quantum algorithms.
> 
> But in the last few years, a series of works has lead to a quantum algorithm for Ideal-SVP that outperforms what can be done for general SVP in certain regimes. More precisely, it was demonstrated (under certain hypotheses) that one can find in quantum polynomial time a vector longer by a factor at most \(\alpha = \exp ({\widetilde{O}(n^{1/2})})\) than the shortest non-zero vector in a cyclotomic ideal lattice, where n is the dimension.
> 
> In this work, we explore the constants hidden behind this asymptotic claim. While these algorithms have quantum steps, the steps that impact the approximation factor \(\alpha \) are entirely classical, which allows us to estimate it experimentally using only classical computing. Moreover, we design heuristic improvements for those steps that significantly decrease the hidden factors in practice. Finally, we derive new provable effective lower bounds based on volumetric arguments.
> 
> This study allows to predict the crossover point with classical lattice reduction algorithms, and thereby determine the relevance of this quantum algorithm in any cryptanalytic context. For example we predict that this quantum algorithm provides shorter vectors than BKZ-300 (roughly the weakest security level of NIST lattice-based candidates) for cyclotomic rings of rank larger than about 24000.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_12](https://doi.org/10.1007/978-3-030-26948-7_12)
## Proofs of Replicated Storage Without Timing Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#proofs-of-replicated-storage-without-timing-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#proofs-of-replicated-storage-without-timing-assumptions)
### Authors
* Ivan Damgård, Computer Science Department, DIGIT, Aarhus University, Aarhus, Denmark
* Chaya Ganesh, Computer Science Department, DIGIT, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Computer Science Department, DIGIT, Aarhus University, Aarhus, Denmark
### Abstract
> In this paper we provide a formal treatment of proof of replicated storage, a novel cryptographic primitive recently proposed in the context of a novel cryptocurrency, namely Filecoin.
> 
> In a nutshell, proofs of replicated storage is a solution to the following problem: A user stores a file m on n different servers to ensure that the file will be available even if some of the servers fail. Using proof of retrievability, the user could check that every server is indeed storing the file. However, what if the servers collude and, in order to save on resources, decide to only store one copy of the file? A proof of replicated storage guarantees that, unless the (potentially colluding) servers are indeed reserving the space necessary to store n copies of the file, the user will not accept the proofs. While some candidate proofs of replicated storage have already been proposed, their soundness relies on timing assumptions i.e., the user must reject the proof if the prover does not reply within a certain time-bound.
> 
> In this paper we provide the first construction of a proof of replication which does not rely on any timing assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_13](https://doi.org/10.1007/978-3-030-26948-7_13)
## Simple Proofs of Space-Time and Rational Proofs of Storage.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#simple-proofs-of-space-time-and-rational-proofs-of-storage)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#simple-proofs-of-space-time-and-rational-proofs-of-storage)
### Authors
* Tal Moran, IDC Herzliya, Herzliya, Israel
* Ilan Orlov, Outbrain, New York, USA
### Abstract
> We introduce a new cryptographic primitive: Proofs of Space-Time (PoSTs) and construct an extremely simple, practical protocol for implementing these proofs. A PoST allows a prover to convince a verifier that she spent a “space-time” resource (storing data—space—over a period of time). Formally, we define the PoST resource as a trade-off between CPU work and space-time (under reasonable cost assumptions, a rational user will prefer to use the lower-cost space-time resource over CPU work).
> 
> Compared to a proof-of-work, a PoST requires less energy use, as the “difficulty” can be increased by extending the time period over which data is stored without increasing computation costs. Our definition is very similar to “Proofs of Space” [ePrint 2013/796, 2013/805] but, unlike the previous definitions, takes into account amortization attacks and storage duration. Moreover, our protocol uses a very different (and much simpler) technique, making use of the fact that we explicitly allow a space-time tradeoff, and doesn’t require any non-standard assumptions (beyond random oracles). Unlike previous constructions, our protocol allows incremental difficulty adjustment, which can gracefully handle increases in the price of storage compared to CPU work. In addition, we show how, in a crypto-currency context, the parameters of the scheme can be adjusted using a market-based mechanism, similar in spirit to the difficulty adjustment for PoW protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_14](https://doi.org/10.1007/978-3-030-26948-7_14)
## Non-malleable Codes for Decision Trees.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#non-malleable-codes-for-decision-trees)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#non-malleable-codes-for-decision-trees)
### Authors
* Marshall Ball, Columbia University, New York, USA
* Siyao Guo, New York University Shanghai, Shanghai, China
* Daniel Wichs, Northeastern University, Boston, USA
### Abstract
> We construct efficient, unconditional non-malleable codes that are secure against tampering functions computed by decision trees of depth \(d= n^{1/4-o(1)}\). In particular, each bit of the tampered codeword is set arbitrarily after adaptively reading up to d arbitrary locations within the original codeword. Prior to this work, no efficient unconditional non-malleable codes were known for decision trees beyond depth \(O(\log ^2 n)\).
> 
> Our result also yields efficient, unconditional non-malleable codes that are \(\exp (-n^{\varOmega (1)})\)-secure against constant-depth circuits of \(\exp (n^{\varOmega (1)})\)-size. Prior work of Chattopadhyay and Li (STOC 2017) and Ball et al. (FOCS 2018) only provide protection against \(\exp (O(\log ^2n))\)-size circuits with \(\exp (-O(\log ^2n))\)-security.
> 
> We achieve our result through simple non-malleable reductions of decision tree tampering to split-state tampering. As an intermediary, we give a simple and generic reduction of leakage-resilient split-state tampering to split-state tampering with improved parameters. Prior work of Aggarwal et al. (TCC 2015) only provides a reduction to split-state non-malleable codes with decoders that exhibit particular properties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_15](https://doi.org/10.1007/978-3-030-26948-7_15)
## Explicit Rate-1 Non-malleable Codes for Local Tampering.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#explicit-rate-1-non-malleable-codes-for-local-tampering)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#explicit-rate-1-non-malleable-codes-for-local-tampering)
### Authors
* Divya Gupta, Microsoft Research, Bangalore, India
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
### Abstract
> This paper constructs high-rate non-malleable codes in the information-theoretic plain model against tampering functions with bounded locality. We consider \(\delta \)-local tampering functions; namely, each output bit of the tampering function is a function of (at most) \(\delta \) input bits. This work presents the first explicit and efficient rate-1 non-malleable code for \(\delta \)-local tampering functions, where \(\delta =\xi \lg n\) and \(\xi <1\) is any positive constant. As a corollary, we construct the first explicit rate-1 non-malleable code against NC\(^0\) tampering functions.
> 
> Before our work, no explicit construction for a constant-rate non-malleable code was known even for the simplest 1-local tampering functions. Ball et al. (EUROCRYPT–2016), and Chattopadhyay and Li (STOC–2017) provided the first explicit non-malleable codes against \(\delta \)-local tampering functions. However, these constructions are rate-0 even when the tampering functions have 1-locality. In the CRS model, Faust et al. (EUROCRYPT–2014) constructed efficient rate-1 non-malleable codes for \(\delta = O(\log n)\) local tampering functions.
> 
> Our main result is a general compiler that bootstraps a rate-0 non-malleable code against leaky input and output local tampering functions to construct a rate-1 non-malleable code against \(\xi \lg n\)-local tampering functions, for any positive constant \(\xi < 1\). Our explicit construction instantiates this compiler using an appropriate encoding by Ball et al. (EUROCRYPT–2016).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_16](https://doi.org/10.1007/978-3-030-26948-7_16)
## Continuous Space-Bounded Non-malleable Codes from Stronger Proofs-of-Space.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#continuous-space-bounded-non-malleable-codes-from-stronger-proofs-of-space)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#continuous-space-bounded-non-malleable-codes-from-stronger-proofs-of-space)
### Authors
* Binyi Chen, University of California, Santa Barbara, USA
* Yilei Chen, VISA Research, Palo Alto, USA
* Pratyay Mukherjee, VISA Research, Palo Alto, USA
* Kristina Hostáková, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> Non-malleable codes are encoding schemes that provide protections against various classes of tampering attacks. Recently Faust et al. (CRYPTO 2017) initiated the study of space-bounded non-malleable codes that provide such protections against tampering within small-space devices. They put forward a construction based on any non-interactive proof-of-space (NIPoS). However, the scheme only protects against an a priori bounded number of tampering attacks.
> 
> We construct non-malleable codes that are resilient to an unbounded polynomial number of space-bounded tamperings. Towards that we introduce a stronger variant of \(\text {NIPoS}\) called proof-extractable \(\text {NIPoS}\) (\(\text {PExt-NIPoS}\)), and propose two approaches of constructing such a primitive. Using a new proof strategy we show that the generic encoding scheme of Faust et al. achieves unbounded tamper-resilience when instantiated with a \(\text {PExt-NIPoS}\). We show two methods to construct \(\text {PExt-NIPoS}\):
> 
> 1. The first method uses a special family of “memory-hard” graphs, called challenge-hard graphs (CHG), a notion we introduce here. We instantiate such family of graphs based on an extension of stack of localized expanders (first used by Ren and Devadas in the context of proof-of-space). In addition, we show that the graph construction used as a building block for the proof-of-space by Dziembowski et al. (CRYPTO 2015) satisfies challenge-hardness as well. These two CHG-instantiations lead to continuous space-bounded NMC with different features in the random oracle model.
> 
> 2. Our second instantiation relies on a new measurable property, called uniqueness of \(\text {NIPoS}\). We show that standard extractability can be upgraded to proof-extractability if the \(\text {NIPoS}\) also has uniqueness. We propose a simple heuristic construction of \(\text {NIPoS}\), that achieves (partial) uniqueness, based on a candidate memory-hard function in the standard model and a publicly verifiable computation with small-space verification. Instantiating the encoding scheme of Faust et al. with this \(\text {NIPoS}\), we obtain a continuous space-bounded NMC that supports the “most practical” parameters, complementing the provably secure but “relatively impractical” CHG-based constructions. Additionally, we revisit the construction of Faust et al. and observe that due to the lack of uniqueness of their \(\text {NIPoS}\), the resulting encoding schemes yield “highly impractical” parameters in the continuous setting.
> 
> We conclude the paper with a comparative study of all our non-malleable code constructions with an estimation of concrete parameters.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_17](https://doi.org/10.1007/978-3-030-26948-7_17)
## Synchronous, with a Chance of Partition Tolerance.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#synchronous-with-a-chance-of-partition-tolerance)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#synchronous-with-a-chance-of-partition-tolerance)
### Authors
* Yue Guo, Thunder Research, Sunnyvale, USA
* Rafael Pass, Thunder Research, Sunnyvale, USA
* Elaine Shi, Thunder Research, Sunnyvale, USA
* Yue Guo, Cornell University, Ithaca, USA
* Rafael Pass, Cornell University, Ithaca, USA
* Elaine Shi, Cornell University, Ithaca, USA
### Abstract
> Murphy, Murky, Mopey, Moody, and Morose decide to write a paper together over the Internet and submit it to the prestigious CRYPTO’19 conference that has the most amazing PC. They encounter a few problems. First, not everyone is online every day: some are lazy and go skiing on Mondays; others cannot use git correctly and they are completely unaware that they are losing messages. Second, a small subset of the co-authors may be secretly plotting to disrupt the project (e.g., because they are writing a competing paper in stealth).
> 
> Suppose that each day, sufficiently many honest co-authors are online (and use git correctly); moreover, suppose that messages checked into git on Monday can be correctly received by honest and online co-authors on Tuesday or any future day. Can the honest co-authors successfully finish the paper in a small number of days such that they make the CRYPTO deadline; and perhaps importantly, can all the honest co-authors, including even those who are lazy and those who sometimes use git incorrectly, agree on the final theorem?

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_18](https://doi.org/10.1007/978-3-030-26948-7_18)
## Subvector Commitments with Application to Succinct Arguments.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#subvector-commitments-with-application-to-succinct-arguments)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#subvector-commitments-with-application-to-succinct-arguments)
### Authors
* Russell W. F. Lai, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> We put forward the notion of subvector commitments (SVC): An SVC allows one to open a committed vector at a set of positions, where the opening size is independent of length of the committed vector and the number of positions to be opened. We propose two constructions under variants of the root assumption and the CDH assumption, respectively. We further generalize SVC to a notion called linear map commitments (LMC), which allows one to open a committed vector to its images under linear maps with a single short message, and propose a construction over pairing groups.
> 
> Equipped with these newly developed tools, we revisit the “CS proofs” paradigm [Micali, FOCS 1994] which turns any arguments with public-coin verifiers into non-interactive arguments using the Fiat-Shamir transform in the random oracle model. We propose a compiler that turns any (linear, resp.) PCP into a non-interactive argument, using exclusively SVCs (LMCs, resp.). For an approximate 80 bits of soundness, we highlight the following new implications:
> 
> 1. There exists a succinct non-interactive argument of knowledge (SNARK) with public-coin setup with proofs of size 5360 bits, under the adaptive root assumption over class groups of imaginary quadratic orders against adversaries with runtime \(2^{128}\). At the time of writing, this is the shortest SNARK with public-coin setup.
> 
> 2. There exists a non-interactive argument with private-coin setup, where proofs consist of 2 group elements and 3 field elements, in the generic bilinear group model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_19](https://doi.org/10.1007/978-3-030-26948-7_19)
## Batching Techniques for Accumulators with Applications to IOPs and Stateless Blockchains.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#batching-techniques-for-accumulators-with-applications-to-iops-and-stateless-blockchains)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#batching-techniques-for-accumulators-with-applications-to-iops-and-stateless-blockchains)
### Authors
* Dan Boneh, Stanford University, Stanford, USA
* Benedikt Bünz, Stanford University, Stanford, USA
* Ben Fisch, Stanford University, Stanford, USA
### Abstract
> We present batching techniques for cryptographic accumulators and vector commitments in groups of unknown order. Our techniques are tailored for distributed settings where no trusted accumulator manager exists and updates to the accumulator are processed in batches. We develop techniques for non-interactively aggregating membership proofs that can be verified with a constant number of group operations. We also provide a constant sized batch non-membership proof for a large number of elements. These proofs can be used to build the first positional vector commitment (VC) with constant sized openings and constant sized public parameters. As a core building block for our batching techniques we develop several succinct proof systems in groups of unknown order. These extend a recent construction of a succinct proof of correct exponentiation, and include a succinct proof of knowledge of an integer discrete logarithm between two group elements. We circumvent an impossibility result for Sigma-protocols in these groups by using a short trapdoor-free CRS. We use these new accumulator and vector commitment constructions to design a stateless blockchain, where nodes only need a constant amount of storage in order to participate in consensus. Further, we show how to use these techniques to reduce the size of IOP instantiations, such as STARKs. The full version of the paper is available online [BBF18b].

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_20](https://doi.org/10.1007/978-3-030-26948-7_20)
## On the Plausibility of Fully Homomorphic Encryption for RAMs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#on-the-plausibility-of-fully-homomorphic-encryption-for-rams)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#on-the-plausibility-of-fully-homomorphic-encryption-for-rams)
### Authors
* Ariel Hamlin, Khoury College of Computer Sciences, Northeastern University, Boston, MA, USA
* Daniel Wichs, Khoury College of Computer Sciences, Northeastern University, Boston, MA, USA
* Justin Holmgren, Department of Computer Science, Princeton University, Princeton, NJ, USA
* Mor Weiss, Department of Computer Science, IDC Herzliya, Herzliya, Israel
### Abstract
> We initiate the study of fully homomorphic encryption for RAMs (RAM-FHE). This is a public-key encryption scheme where, given an encryption of a large database D, anybody can efficiently compute an encryption of P(D) for an arbitrary RAM program P. The running time over the encrypted data should be as close as possible to the worst case running time of P, which may be sub-linear in the data size.
> 
> A central difficulty in constructing a RAM-FHE scheme is hiding the sequence of memory addresses accessed by P. This is particularly problematic because an adversary may homomorphically evaluate many programs over the same ciphertext, therefore effectively “rewinding” any mechanism for making memory accesses oblivious.
> 
> We identify a necessary prerequisite towards constructing RAM-FHE that we call rewindable oblivious RAM (rewindable ORAM), which provides security even in this strong adversarial setting. We show how to construct rewindable ORAM using symmetric-key doubly efficient PIR (SK-DEPIR) (Canetti-Holmgren-Richelson, Boyle-Ishai-Pass-Wootters: TCC ’17). We then show how to use rewindable ORAM, along with virtual black-box (VBB) obfuscation for specific circuits, to construct RAM-FHE. The latter primitive can be heuristically instantiated using existing indistinguishability obfuscation candidates. Overall, we obtain a RAM-FHE scheme where the multiplicative overhead in running time is polylogarithmic in the database size N. Our basic scheme is single-hop, but we also extend it to obtain multi-hop RAM-FHE with overhead \(N^\epsilon \) for arbitrarily small \(\epsilon >0\).
> 
> We view our work as the first evidence that RAM-FHE is likely to exist.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_21](https://doi.org/10.1007/978-3-030-26948-7_21)
## Homomorphic Time-Lock Puzzles and Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#homomorphic-time-lock-puzzles-and-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#homomorphic-time-lock-puzzles-and-applications)
### Authors
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, USA
* Sri Aravinda Krishnan Thyagarajan, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
### Abstract
> Time-lock puzzles allow one to encrypt messages for the future, by efficiently generating a puzzle with a solution s that remains hidden until time \(\mathcal {T}\) has elapsed. The solution is required to be concealed from the eyes of any algorithm running in (parallel) time less than \(\mathcal {T}\). We put forth the concept of homomorphic time-lock puzzles, where one can evaluate functions over puzzles without solving them, i.e., one can manipulate a set of puzzles with solutions \((s_1, \dots , s_n)\) to obtain a puzzle that solves to \(f(s_1, \ldots , s_n)\), for any function f. We propose candidate constructions under concrete cryptographic assumptions for different classes of functions. Then we show how homomorphic time-lock puzzles overcome the limitations of classical time-lock puzzles by proposing new protocols for applications of interest, such as e-voting, multi-party coin flipping, and fair contract signing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_22](https://doi.org/10.1007/978-3-030-26948-7_22)
## Symmetric Primitives with Structured Secrets.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#symmetric-primitives-with-structured-secrets)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#symmetric-primitives-with-structured-secrets)
### Authors
* Navid Alamati, University of Michigan, Ann Arbor, USA
* Hart Montgomery, Fujitsu Laboratories of America, Sunnyvale, USA
* Sikhar Patranabis, Fujitsu Laboratories of America, Sunnyvale, USA
* Sikhar Patranabis, IIT Kharagpur, Kharagpur, India
### Abstract
> Securely managing encrypted data on an untrusted party is a challenging problem that has motivated the study of a wide variety of cryptographic primitives. A special class of such primitives allows an untrusted party to transform a ciphertext encrypted under one key to a ciphertext under another key, using some auxiliary information that does not leak the underlying data. Prominent examples of such primitives in the symmetric setting are key-homomorphic (weak) PRFs, updatable encryption, and proxy re-encryption. Although these primitives differ significantly in terms of their constructions and security requirements, they share two important properties: (a) they have secrets with structure or extra functionality, and (b) all known constructions of these primitives satisfying reasonably strong definitions of security are based on concrete public-key assumptions, e.g., DDH and LWE.
> 
> This raises the question of whether these objects inherently belong to the world of public-key primitives, or they can potentially be built from simple symmetric-key objects such as pseudorandom functions. In this work, we show that the latter possibility is unlikely. More specifically, we show that:
> 
> Any (bounded) key-homomorphic weak PRF with an abelian output group implies a (bounded) input-homomorphic weak PRF, which has recently been shown to imply not only public-key encryption but also a variety of primitives such as PIR, lossy TDFs, and even IBE.
> 
> Any ciphertext-independent updatable encryption scheme that is forward and post-compromise secure implies PKE. Moreover, any symmetric-key proxy re-encryption scheme with reasonably strong security guarantees implies a forward and post-compromise secure ciphertext-independent updatable encryption, and hence PKE.
> 
> In addition, we show that unbounded (or exact) key-homomorphic weak PRFs over abelian groups are impossible in the quantum world. In other words, over abelian groups, bounded key-homomorphism is the best that we can hope for in terms of post-quantum security. Our attack also works over other structured primitives with abelian groups and exact homomorphisms, including homomorphic one-way functions and input-homomorphic weak PRFs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_23](https://doi.org/10.1007/978-3-030-26948-7_23)
## Unifying Leakage Models on a Rényi Day.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#unifying-leakage-models-on-a-r-nyi-day)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#unifying-leakage-models-on-a-r-nyi-day)
### Authors
* Thomas Prest, PQShield, Oxford, UK
* Dahmun Goudarzi, PQShield, Oxford, UK
* Ange Martinelli, Thales, Gennevilliers, France
* Alain Passelègue, Inria, Paris, France
* Alain Passelègue, ENS Lyon, Lyon, France
### Abstract
> In the last decade, several works have focused on finding the best way to model the leakage in order to obtain provably secure implementations. One of the most realistic models is the noisy leakage model, introduced in [PR13, DDF14] together with secure constructions. These works suffer from various limitations, in particular the use of ideal leak-free gates in [PR13] and an important loss (in the size of the field) in the reduction in [DDF14].
> 
> In this work, we provide new strategies to prove the security of masked implementations and start by unifying the different noisiness metrics used in prior works by relating all of them to a standard notion in information theory: the pointwise mutual information. Based on this new interpretation, we define two new natural metrics and analyze the security of known compilers with respect to these metrics. In particular, we prove (1) a tighter bound for reducing the noisy leakage models to the probing model using our first new metric, (2) better bounds for amplification-based security proofs using the second metric.
> 
> To support that the improvements we obtain are not only a consequence of the use of alternative metrics, we show that for concrete representation of leakage (e.g., “Hamming weight + Gaussian noise”), our approach significantly improves the parameters compared to prior works. Finally, using the Rényi divergence, we quantify concretely the advantage of an adversary in attacking a block cipher depending on the number of leakage acquisitions available to it.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_24](https://doi.org/10.1007/978-3-030-26948-7_24)
## Leakage Certification Revisited: Bounding Model Errors in Side-Channel Security Evaluations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#leakage-certification-revisited-bounding-model-errors-in-side-channel-security-evaluations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#leakage-certification-revisited-bounding-model-errors-in-side-channel-security-evaluations)
### Authors
* Olivier Bronchain, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* Julien M. Hendrickx, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* Clément Massart, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* Alex Olshevsky, Department of Electrical and Computer Engineering, Boston University, Boston, MA, USA
### Abstract
> Leakage certification aims at guaranteeing that the statistical models used in side-channel security evaluations are close to the true statistical distribution of the leakages, hence can be used to approximate a worst-case security level. Previous works in this direction were only qualitative: for a given amount of measurements available to an evaluation laboratory, they rated a model as “good enough” if the model assumption errors (i.e., the errors due to an incorrect choice of model family) were small with respect to the model estimation errors. We revisit this problem by providing the first quantitative tools for leakage certification. For this purpose, we provide bounds for the (unknown) Mutual Information metric that corresponds to the true statistical distribution of the leakages based on two easy-to-compute information theoretic quantities: the Perceived Information, which is the amount of information that can be extracted from a leaking device thanks to an estimated statistical model, possibly biased due to estimation and assumption errors, and the Hypothetical Information, which is the amount of information that would be extracted from an hypothetical device exactly following the model distribution. This positive outcome derives from the observation that while the estimation of the Mutual Information is in general a hard problem (i.e., estimators are biased and their convergence is distribution-dependent), it is significantly simplified in the case of statistical inference attacks where a target random variable (e.g., a key in a cryptographic setting) has a constant (e.g., uniform) probability. Our results therefore provide a general and principled path to bound the worst-case security level of an implementation. They also significantly speed up the evaluation of any profiled side-channel attack, since they imply that the estimation of the Perceived Information, which embeds an expensive cross-validation step, can be bounded by the computation of a cheaper Hypothetical Information, for any estimated statistical model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_25](https://doi.org/10.1007/978-3-030-26948-7_25)
## Security in the Presence of Key Reuse: Context-Separable Interfaces and Their Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#security-in-the-presence-of-key-reuse-context-separable-interfaces-and-their-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#security-in-the-presence-of-key-reuse-context-separable-interfaces-and-their-applications)
### Authors
* Christopher Patton, Computer and Information Science and Engineering, Florida Institute for Cybersecurity Research, University of Florida, Gainesville, USA
* Thomas Shrimpton, Computer and Information Science and Engineering, Florida Institute for Cybersecurity Research, University of Florida, Gainesville, USA
### Abstract
> Key separation is often difficult to enforce in practice. While key reuse can be catastrophic for security, we know of a number of cryptographic schemes for which it is provably safe. But existing formal models, such as the notions of joint security (Haber-Pinkas, CCS ’01) and agility (Acar et al., EUROCRYPT ’10), do not address the full range of key-reuse attacks—in particular, those that break the abstraction of the scheme, or exploit protocol interactions at a higher level of abstraction. This work attends to these vectors by focusing on two key elements: the game that codifies the scheme under attack, as well as its intended adversarial model; and the underlying interface that exposes secret key operations for use by the game. Our main security experiment considers the implications of using an interface (in practice, the API of a software library or a hardware platform such as TPM) to realize the scheme specified by the game when the interface is shared with other unspecified, insecure, or even malicious applications. After building up a definitional framework, we apply it to the analysis of two real-world schemes: the EdDSA signature algorithm and the Noise protocol framework. Both provide some degree of context separability, a design pattern for interfaces and their applications that aids in the deployment of secure protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_26](https://doi.org/10.1007/978-3-030-26948-7_26)
