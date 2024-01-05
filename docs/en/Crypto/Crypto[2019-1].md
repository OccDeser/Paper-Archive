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
> We present practical attacks on OCB2. This mode of operation of a blockcipher was designed with the aim to provide particularly efficient and provably-secure authenticated encryption services, and since its proposal about 15 years ago it belongs to the top performers in this realm. OCB2 was included in an ISO standard in 2009.

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

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_3](https://doi.org/10.1007/978-3-030-26948-7_3)
## Noninteractive Zero Knowledge for NP from (Plain) Learning with Errors.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#noninteractive-zero-knowledge-for-np-from-plain-learning-with-errors)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#noninteractive-zero-knowledge-for-np-from-plain-learning-with-errors)
### Authors
* Chris Peikert, Computer Science and Engineering, University of Michigan, Ann Arbor, USA
* Sina Shiehian, Computer Science and Engineering, University of Michigan, Ann Arbor, USA
### Abstract
> We finally close the long-standing problem of constructing a noninteractive zero-knowledge (NIZK) proof system for any NP language with security based on the plain Learning With Errors (LWE) problem, and thereby on worst-case lattice problems. Our proof system instantiates the framework recently developed by Canetti et al.  [EUROCRYPT’18], Holmgren and Lombardi [FOCS’18], and Canetti et al.  [STOC’19] for soundly applying the Fiat–Shamir transform using a hash function family that is correlation intractable for a suitable class of relations. Previously, such hash families were based either on “exotic” assumptions (e.g., indistinguishability obfuscation or optimal hardness of certain LWE variants) or, more recently, on the existence of circularly secure fully homomorphic encryption (FHE). However, none of these assumptions are known to be implied by plain LWE or worst-case hardness.

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

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_13](https://doi.org/10.1007/978-3-030-26948-7_13)
## Simple Proofs of Space-Time and Rational Proofs of Storage.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#simple-proofs-of-space-time-and-rational-proofs-of-storage)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#simple-proofs-of-space-time-and-rational-proofs-of-storage)
### Authors
* Tal Moran, IDC Herzliya, Herzliya, Israel
* Ilan Orlov, Outbrain, New York, USA
### Abstract
> We introduce a new cryptographic primitive: Proofs of Space-Time (PoSTs) and construct an extremely simple, practical protocol for implementing these proofs. A PoST allows a prover to convince a verifier that she spent a “space-time” resource (storing data—space—over a period of time). Formally, we define the PoST resource as a trade-off between CPU work and space-time (under reasonable cost assumptions, a rational user will prefer to use the lower-cost space-time resource over CPU work).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_14](https://doi.org/10.1007/978-3-030-26948-7_14)
## Non-malleable Codes for Decision Trees.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#non-malleable-codes-for-decision-trees)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#non-malleable-codes-for-decision-trees)
### Authors
* Marshall Ball, Columbia University, New York, USA
* Siyao Guo, New York University Shanghai, Shanghai, China
* Daniel Wichs, Northeastern University, Boston, USA
### Abstract
> We construct efficient, unconditional non-malleable codes that are secure against tampering functions computed by decision trees of depth \(d= n^{1/4-o(1)}\). In particular, each bit of the tampered codeword is set arbitrarily after adaptively reading up to d arbitrary locations within the original codeword. Prior to this work, no efficient unconditional non-malleable codes were known for decision trees beyond depth \(O(\log ^2 n)\).

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

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_18](https://doi.org/10.1007/978-3-030-26948-7_18)
## Subvector Commitments with Application to Succinct Arguments.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-1].md#subvector-commitments-with-application-to-succinct-arguments)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#subvector-commitments-with-application-to-succinct-arguments)
### Authors
* Russell W. F. Lai, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> We put forward the notion of subvector commitments (SVC): An SVC allows one to open a committed vector at a set of positions, where the opening size is independent of length of the committed vector and the number of positions to be opened. We propose two constructions under variants of the root assumption and the CDH assumption, respectively. We further generalize SVC to a notion called linear map commitments (LMC), which allows one to open a committed vector to its images under linear maps with a single short message, and propose a construction over pairing groups.

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
> In the last decade, several works have focused on finding the best way to model the leakage in order to obtain provably secure implementations. One of the most realistic models is the noisy leakage model, introduced in [PR13, DDF14] together with secure constructions. These works suffer from various limitations, in particular the use of ideal leak-free gates in [PR13] and an important loss (in the size of the field) in the reduction in [DDF14].

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
> Key separation is often difficult to enforce in practice. While key reuse can be catastrophic for security, we know of a number of cryptographic schemes for which it is provably safe. But existing formal models, such as the notions of joint security (Haber-Pinkas, CCS ’01) and agility (Acar et al., EUROCRYPT ’10), do not address the full range of key-reuse attacks—in particular, those that break the abstraction of the scheme, or exploit protocol interactions at a higher level of abstraction. This work attends to these vectors by focusing on two key elements: the game that codifies the scheme under attack, as well as its intended adversarial model; and the underlying interface that exposes secret key operations for use by the game. Our main security experiment considers the implications of using an interface (in practice, the API of a software library or a hardware platform such as TPM) to realize the scheme specified by the game when the interface is shared with other unspecified, insecure, or even malicious applications. After building up a definitional framework, we apply it to the analysis of two real-world schemes: the EdDSA signature algorithm and the Noise protocol framework. Both provide some degree of context separability, a design pattern for interfaces and their applications that aids in the deployment of secure protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_26](https://doi.org/10.1007/978-3-030-26948-7_26)
