# Eurocrypt 22-1
## EpiGRAM: Practical Garbled RAM.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#epigram-practical-garbled-ram)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#epigram-practical-garbled-ram)
### Authors
* David Heath, Georgia Tech, Atlanta, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### Abstract
> Garbled RAM (GRAM) is a powerful technique introduced by Lu and Ostrovsky that equips Garbled Circuit (GC) with a sublinear cost RAM without adding rounds of interaction. While multiple GRAM constructions are known, none are suitable for practice, due to costs that have high constants and poor scaling.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_1](https://doi.org/10.1007/978-3-031-06944-4_1)
## Garbled Circuits with Sublinear Evaluator.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#garbled-circuits-with-sublinear-evaluator)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#garbled-circuits-with-sublinear-evaluator)
### Authors
* Abida Haque, NC State, Raleigh, USA
* David Heath, Georgia Tech, Atlanta, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, USA
* Steve Lu, Stealth Software Technologies, Inc., Los Angeles, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
* Akash Shah, UCLA, Los Angeles, USA
### Abstract
> A recent line of work, Stacked Garbled Circuit (SGC), showed that Garbled Circuit (GC) can be improved for functions that include conditional behavior. SGC relieves the communication bottleneck of 2PC by only sending enough garbled material for a single branch out of the b total branches. Hence, communication is sublinear in the circuit size. However, both the evaluator and the generator pay in computation and perform at least factor \(\log b\) extra work as compared to standard GC.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_2](https://doi.org/10.1007/978-3-031-06944-4_2)
## Round-Optimal and Communication-Efficient Multiparty Computation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#round-optimal-and-communication-efficient-multiparty-computation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#round-optimal-and-communication-efficient-multiparty-computation)
### Authors
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Hendrik Waldner, The University of Edinburgh, Edinburgh, UK
* Rafail Ostrovsky, University of California, Los Angeles, CA, USA
* Vassilis Zikas, Purdue University, West Lafayette, IN, USA
### Abstract
> Typical approaches for minimizing the round complexity of multiparty computation (MPC) come at the cost of increased communication complexity (CC) or the reliance on setup assumptions. A notable exception is the recent work of Ananth et al. [TCC 2019], which used Functional Encryption (FE) combiners to obtain a round optimal (two-round) semi-honest MPC in the plain model with a CC proportional to the depth and input-output length of the circuit being computed—we refer to such protocols as circuit scalable. This leaves open the question of obtaining communication efficient protocols that are secure against malicious adversaries in the plain model, which we present in this work. Concretely, our two main contributions are:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_3](https://doi.org/10.1007/978-3-031-06944-4_3)
## Round-Optimal Byzantine Agreement.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#round-optimal-byzantine-agreement)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#round-optimal-byzantine-agreement)
### Authors
* Diana Ghinea, ETH Zurich, Zürich, Switzerland
* Vipul Goyal, Carnegie Mellon University and NTT Research, Pittsburgh, USA
* Chen-Da Liu-Zhang, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> Byzantine agreement is a fundamental primitive in cryptography and distributed computing, and minimizing its round complexity is of paramount importance. It is long known that any randomized r-round protocol must fail with probability at least \((c\cdot r)^{-r}\), for some constant c, when the number of corruptions is linear in the number of parties, \(t = \theta (n)\). On the other hand, current protocols fail with probability at least \(2^{-r}\). Whether we can match the lower bound agreement probability remains unknown.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_4](https://doi.org/10.1007/978-3-031-06944-4_4)
## A Complete Characterization of Game-Theoretically Fair, Multi-Party Coin Toss.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#a-complete-characterization-of-game-theoretically-fair-multi-party-coin-toss)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#a-complete-characterization-of-game-theoretically-fair-multi-party-coin-toss)
### Authors
* Ke Wu, Computer Science Department, Carnegie Mellon University, Pittsburgh, USA
* Elaine Shi, Computer Science Department, Carnegie Mellon University, Pittsburgh, USA
* Gilad Asharov, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
### Abstract
> Cleve’s celebrated lower bound (STOC’86) showed that a de facto strong fairness notion is impossible in 2-party coin toss, i.e., the corrupt party always has a strategy of biasing the honest party’s outcome by a noticeable amount. Nonetheless, Blum’s famous coin-tossing protocol (CRYPTO’81) achieves a strictly weaker “game-theoretic” notion of fairness—specifically, it is a 2-party coin toss protocol in which neither party can bias the outcome towards its own preference; and thus the honest protocol forms a Nash equilibrium in which neither party would want to deviate. Surprisingly, an n-party analog of Blum’s famous coin toss protocol was not studied till recently. The work by Chung et al. (TCC’18) was the first to explore the feasibility of game-theoretically fair n-party coin toss in the presence of corrupt majority. We may assume that each party has a publicly stated preference for either the bit 0 or 1, and if the outcome agrees with the party’s preference, it obtains utility 1; else it obtains nothing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_5](https://doi.org/10.1007/978-3-031-06944-4_5)
## Lightweight, Maliciously Secure Verifiable Function Secret Sharing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#lightweight-maliciously-secure-verifiable-function-secret-sharing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#lightweight-maliciously-secure-verifiable-function-secret-sharing)
### Authors
* Leo de Castro, MIT, Cambridge, USA
* Anitgoni Polychroniadou, J.P. Morgan AI Research, New York, USA
### Abstract
> In this work, we present a lightweight construction of verifiable two-party function secret sharing (FSS) for point functions and multi-point functions. Our verifiability method is lightweight in two ways. Firstly, it is concretely efficient, making use of only symmetric key operations and no public key or MPC techniques are involved. Our performance is comparable with the state-of-the-art non-verifiable DPF constructions, and we outperform all prior DPF verification techniques in both computation and communication complexity, which we demonstrate with an implementation of our scheme. Secondly, our verification procedure is essentially unconstrained. It will verify that distributed point function (DPF) shares correspond to some point function irrespective of the output group size, the structure of the DPF output, or the set of points on which the DPF must be evaluated. This is in stark contrast with prior works, which depend on at least one and often all three of these constraints. In addition, our construction is the first DPF verification protocol that can verify general DPFs while remaining secure even if one server is malicious. Prior work on maliciously secure DPF verification could only verify DPFs where the non-zero output is binary and the output space is a large field.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_6](https://doi.org/10.1007/978-3-031-06944-4_6)
## Highly Efficient OT-Based Multiplication Protocols.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#highly-efficient-ot-based-multiplication-protocols)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#highly-efficient-ot-based-multiplication-protocols)
### Authors
* Iftach Haitner, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Eliad Tsfadia, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Iftach Haitner, Check Point Institute for Information Security, Tel Aviv, Israel
* Nikolaos Makriyannis, Fireblocks, New York, USA
* Samuel Ranellucci, Coinbase, San Francisco, USA
* Eliad Tsfadia, Google Research, Tel Aviv, Israel
### Abstract
> We present a new \({\text {OT}}\)-based two-party multiplication protocol that is almost as efficient as Gilboa’s semi-honest protocol (Crypto ’99), but has a high-level of security against malicious adversaries without further compilation. The achieved security suffices for many applications, and, assuming DDH, can be cheaply compiled into full security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_7](https://doi.org/10.1007/978-3-031-06944-4_7)
## Round-Optimal Black-Box Protocol Compilers.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#round-optimal-black-box-protocol-compilers)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#round-optimal-black-box-protocol-compilers)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Dakshita Khurana, UIUC, Champaign, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### Abstract
> We give black-box, round-optimal protocol compilers from semi-honest security to malicious security in the Random Oracle Model (ROM) and in the 1-out-of-2 OT correlations model. We use our compilers to obtain the following results:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_8](https://doi.org/10.1007/978-3-031-06944-4_8)
## Guaranteed Output in $O(\sqrt{n})$ Rounds for Round-Robin Sampling Protocols.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#guaranteed-output-in-o-sqrt-n-rounds-for-round-robin-sampling-protocols)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#guaranteed-output-in-o-sqrt-n-rounds-for-round-robin-sampling-protocols)
### Authors
* Ran Cohen, Reichman University, Herzliya, Israel
* Jack Doerner, Northeastern University, Boston, UK
* Yashvanth Kondi, Northeastern University, Boston, UK
* Abhi Shelat, Northeastern University, Boston, UK
### Abstract
> We introduce a notion of round-robin secure sampling that captures several protocols in the literature, such as the “powers-of-tau” setup protocol for pairing-based polynomial commitments and zk-SNARKs, and certain verifiable mixnets.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_9](https://doi.org/10.1007/978-3-031-06944-4_9)
## Universally Composable Subversion-Resilient Cryptography.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#universally-composable-subversion-resilient-cryptography)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#universally-composable-subversion-resilient-cryptography)
### Authors
* Suvradip Chakraborty, ETH Zurich, Zürich, Switzerland
* Bernardo Magri, The University of Manchester, Manchester, UK
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
### Abstract
> Subversion attacks undermine security of cryptographic protocols by replacing a legitimate honest party’s implementation with one that leaks information in an undetectable manner. An important limitation of all currently known techniques for designing cryptographic protocols with security against subversion attacks is that they do not automatically guarantee security in the realistic setting where a protocol session may run concurrently with other protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_10](https://doi.org/10.1007/978-3-031-06944-4_10)
## Asymptotically Quasi-Optimal Cryptography.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#asymptotically-quasi-optimal-cryptography)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#asymptotically-quasi-optimal-cryptography)
### Authors
* Leo de Castro, MIT, Cambridge, UK
* Vinod Vaikuntanathan, MIT, Cambridge, UK
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Muthu Venkitasubramaniam, Georgetown University, Washington, USA
### Abstract
> The question of minimizing the computational overhead of cryptography was put forward by the work of Ishai, Kushilevitz, Ostrovsky and Sahai (STOC 2008). The main conclusion was that, under plausible assumptions, most cryptographic primitives can be realized with constant computational overhead. However, this ignores an additive term that may depend polynomially on the (concrete) computational security parameter \(\lambda \). In this work, we study the question of obtaining optimal efficiency, up to polylogarithmic factors, for all choices of n and \(\lambda \), where n is the size of the given task. In particular, when \(n=\lambda \), we would like the computational cost to be only \(\tilde{O}(\lambda )\). We refer to this goal as asymptotically quasi-optimal (AQO) cryptography.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_11](https://doi.org/10.1007/978-3-031-06944-4_11)
## Round-Optimal Multi-party Computation with Identifiable Abort.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#round-optimal-multi-party-computation-with-identifiable-abort)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#round-optimal-multi-party-computation-with-identifiable-abort)
### Authors
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Hendrik Waldner, The University of Edinburgh, Edinburgh, UK
* Divya Ravi, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Concordium Blockchain Research Center, Aarhus, Denmark
### Abstract
> Secure multi-party computation (MPC) protocols that are resilient to a dishonest majority allow the adversary to get the output of the computation while, at the same time, forcing the honest parties to abort. Aumann and Lindell introduced the enhanced notion of security with identifiable abort, which still allows the adversary to trigger an abort but, at the same time, it enables the honest parties to agree on the identity of the party that led to the abort. More recently, in Eurocrypt 2016, Garg et al. showed that, assuming access to a simultaneous message exchange channel for all the parties, at least four rounds of communication are required to securely realize non-trivial functionalities in the plain model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_12](https://doi.org/10.1007/978-3-031-06944-4_12)
## On the Security of ECDSA with Additive Key Derivation and Presignatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#on-the-security-of-ecdsa-with-additive-key-derivation-and-presignatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#on-the-security-of-ecdsa-with-additive-key-derivation-and-presignatures)
### Authors
* Jens Groth, DFINITY, Zurich, Switzerland
* Victor Shoup, DFINITY, Zurich, Switzerland
### Abstract
> Two common variations of ECDSA signatures are additive key derivation and presignatures. Additive key derivation is a simple mechanism for deriving many subkeys from a single master key, and is already widely used in cryptocurrency applications with the Hierarchical Deterministic Wallet mechanism standardized in Bitcoin Improvement Proposal 32 (BIP32). Because of its linear nature, additive key derivation is also amenable to efficient implementation in the threshold setting. With presignatures, the secret and public nonces used in the ECDSA signing algorithm are precomputed. In the threshold setting, using presignatures along with other precomputed data allows for an extremely efficient “online phase” of the protocol. Recent works have advocated for both of these variations, sometimes combined together. However, somewhat surprisingly, we are aware of no prior security proof for additive key derivation, let alone for additive key derivation in combination with presignatures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_13](https://doi.org/10.1007/978-3-031-06944-4_13)
## Secure Multiparty Computation with Free Branching.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#secure-multiparty-computation-with-free-branching)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#secure-multiparty-computation-with-free-branching)
### Authors
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Aditya Hegde, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
### Abstract
> We study secure multi-party computation (MPC) protocols for branching circuits that contain multiple sub-circuits (i.e., branches) and the output of the circuit is that of  single “active” branch. Crucially, the identity of the active branch must remain hidden from the protocol participants.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_14](https://doi.org/10.1007/978-3-031-06944-4_14)
## Secure Multiparty Computation with Sublinear Preprocessing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#secure-multiparty-computation-with-sublinear-preprocessing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#secure-multiparty-computation-with-sublinear-preprocessing)
### Authors
* Elette Boyle, Reichman University (IDC Herzliya), and NTT Research, Herzliya, Israel
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Ariel Nof, Technion, Haifa, Israel
### Abstract
> A common technique for enhancing the efficiency of 
secure multiparty computation (MPC) with dishonest majority is via preprocessing: In an offline phase, parties engage in an input-independent protocol to securely generate correlated randomness. Once inputs are known, the correlated randomness is consumed by a “non-cryptographic” and highly efficient online protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_15](https://doi.org/10.1007/978-3-031-06944-4_15)
## Practical Non-interactive Publicly Verifiable Secret Sharing with Thousands of Parties.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#practical-non-interactive-publicly-verifiable-secret-sharing-with-thousands-of-parties)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#practical-non-interactive-publicly-verifiable-secret-sharing-with-thousands-of-parties)
### Authors
* Craig Gentry, Algorand Foundation, New York, NY, USA
* Shai Halevi, Algorand Foundation, New York, NY, USA
* Vadim Lyubashevsky, IBM Research, Ruschlikon, Switzerland
### Abstract
> Non-interactive publicly verifiable secret sharing (PVSS) schemes enables (re-)sharing of secrets in a decentralized setting in the presence of 
 malicious parties. A recently proposed application of PVSS schemes is to enable permissionless proof-of-stake blockchains to “keep a secret” via a sequence of committees that share that secret. These committees can use the secret to produce signatures on the blockchain’s behalf, or to disclose hidden data conditioned on consensus that some event has occurred. That application needs very large committees with thousands of parties, so the PVSS scheme in use must be efficient enough to support such large committees, in terms of both computation and communication. Yet, previous PVSS schemes have large proofs and/or require many exponentiations over large groups.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_16](https://doi.org/10.1007/978-3-031-06944-4_16)
## Sine Series Approximation of the Mod Function for Bootstrapping of Approximate HE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#sine-series-approximation-of-the-mod-function-for-bootstrapping-of-approximate-he)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#sine-series-approximation-of-the-mod-function-for-bootstrapping-of-approximate-he)
### Authors
* Charanjit S. Jutla, IBM T. J. Watson Research Center, Yorktown Heights, NY, USA
* Nathan Manohar, IBM T. J. Watson Research Center, Yorktown Heights, NY, USA
### Abstract
> While it is well known that the sawtooth function has a point-wise convergent Fourier series, the rate of convergence is not the best possible for the application of  approximating the mod function in small intervals around multiples of the modulus. We show a different sine series, such that the sine series of order n has error \(O(\epsilon ^{2n+1})\) for approximating the mod function in \(\epsilon \)-sized intervals around multiples of the modulus. Moreover, the resulting polynomial, after Taylor series approximation of the sine function, has small coefficients, and the whole polynomial can be computed at a precision that is only slightly larger than \(-(2n+1)\log \epsilon \), the precision of approximation being sought. This polynomial can then be used to approximate the mod function to almost arbitrary precision, and hence allows practical CKKS-HE bootstrapping with arbitrary precision. We validate our approach by an implementation and obtain 100 bit precision bootstrapping as well as improvements over prior work even at lower precision.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_17](https://doi.org/10.1007/978-3-031-06944-4_17)
## Limits of Polynomial Packings for $\mathbb {Z}_{p^k}$ and $\mathbb {F}_{p^k}$.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#limits-of-polynomial-packings-for-mathbb-z-p-k-and-mathbb-f-p-k)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#limits-of-polynomial-packings-for-mathbb-z-p-k-and-mathbb-f-p-k)
### Authors
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Keewoo Lee, Seoul National University, Seoul, Republic of Korea
* Jung Hee Cheon, Crypto Lab Inc., Seoul, Republic of Korea
### Abstract
> We formally define polynomial packing methods and initiate a unified study of related concepts in various contexts of cryptography. This includes homomorphic encryption (HE) packing and reverse multiplication-friendly embedding (RMFE) in information-theoretically secure multi-party computation (MPC). We prove several upper bounds and impossibility results on packing methods for \(\mathbb {Z}_{p^k}\) or \(\mathbb {F}_{p^k}\)-messages into \(\mathbb {Z}_{p^t}[x]/f(x)\) in terms of (i) packing density, (ii) level-consistency, and (iii) surjectivity. These results have implications on recent development of HE-based MPC over \(\mathbb {Z}_{2^k}\) secure against actively corrupted majority and provide new proofs for upper bounds on RMFE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_18](https://doi.org/10.1007/978-3-031-06944-4_18)
## High-Precision Bootstrapping for Approximate Homomorphic Encryption by Error Variance Minimization.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#high-precision-bootstrapping-for-approximate-homomorphic-encryption-by-error-variance-minimization)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#high-precision-bootstrapping-for-approximate-homomorphic-encryption-by-error-variance-minimization)
### Authors
* Yongwoo Lee, Samsung Advanced Institute of Technology, Suwon-si, Gyeonggi-do, Korea
* HyungChul Kang, Samsung Advanced Institute of Technology, Suwon-si, Gyeonggi-do, Korea
* Yongwoo Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Korea
* Joon-Woo Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Korea
* Jong-Seon No, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Korea
* Young-Sik Kim, Department of Information and Communication Engineering, Chosun University, Gwangju, Korea
* Yongjune Kim, Department of Electrical Engineering and Computer Science, DGIST, Daegu, Korea
### Abstract
> The Cheon-Kim-Kim-Song (CKKS) scheme (Asiacrypt’17) is one of the most promising homomorphic encryption (HE) schemes as it enables privacy-preserving computing over real (or complex) numbers. It is known that bootstrapping is the most challenging part of the CKKS scheme. Further, homomorphic evaluation of modular reduction is the core of the CKKS bootstrapping. As modular reduction is not represented by the addition and multiplication of complex numbers, approximate polynomials for modular reduction should be used. The best-known techniques (Eurocrypt’21) use a polynomial approximation for trigonometric functions and their composition. However, all the previous methods are based on an indirect approximation, and thus it requires lots of multiplicative depth to achieve high accuracy. This paper proposes a direct polynomial approximation of modular reduction for CKKS bootstrapping, which is optimal in error variance and depth. Further, we propose an efficient algorithm, namely the lazy baby-step giant-step (BSGS) algorithm, to homomorphically evaluate the approximate polynomial, utilizing the lazy relinearization/rescaling technique. The lazy-BSGS reduces the computational complexity by half compared to the ordinary BSGS algorithm. The performance improvement for the CKKS scheme by the proposed algorithm is verified by implementation using HE libraries. The implementation results show that the proposed method has a multiplicative depth of 10 for modular reduction to achieve the state-of-the-art accuracy, while the previous methods have depths of 11 to 12. Moreover, we achieve higher accuracy within a small multiplicative depth, for example, 93-bit within multiplicative depth 11.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_19](https://doi.org/10.1007/978-3-031-06944-4_19)
## Rubato: Noisy Ciphers for Approximate Homomorphic Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#rubato-noisy-ciphers-for-approximate-homomorphic-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#rubato-noisy-ciphers-for-approximate-homomorphic-encryption)
### Authors
* Jincheol Ha, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
* Mincheol Son, KAIST, Daejeon, Korea
* Seongkwang Kim, Samsung SDS, Seoul, Korea
### Abstract
> A transciphering framework converts a symmetric ciphertext into a homomorphic ciphertext on the server-side, reducing computational and communication overload on the client-side. In Asiacrypt 2021, Cho et al. proposed the \(\mathsf {RtF}\) framework that supports approximate computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_20](https://doi.org/10.1007/978-3-031-06944-4_20)
## Field Instruction Multiple Data.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#field-instruction-multiple-data)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#field-instruction-multiple-data)
### Authors
* Khin Mi Mi Aung, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Enhui Lim, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Benjamin Hong Meng Tan, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Sze Ling Yeo, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Jun Jie Sim, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Huaxiong Wang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### Abstract
> Fully homomorphic encryption (FHE) has flourished since it was first constructed by Gentry (STOC 2009). Single instruction multiple data (SIMD) gave rise to efficient homomorphic operations on vectors in \((\mathbb {F}_{t^d})^\ell \), for prime \(t\). RLWE instantiated with cyclotomic polynomials of the form \(X^{2^N}+1\) dominate implementations of FHE due to highly efficient fast Fourier transformations. However, this choice yields very short SIMD plaintext vectors and high degree extension fields, e.g. \(\ell < 100, d > 100\) for small primes (\(t = 3, 5, \dots \)).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_21](https://doi.org/10.1007/978-3-031-06944-4_21)
## Cryptanalysis of Candidate Obfuscators for Affine Determinant Programs.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#cryptanalysis-of-candidate-obfuscators-for-affine-determinant-programs)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#cryptanalysis-of-candidate-obfuscators-for-affine-determinant-programs)
### Authors
* Li Yao, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yilei Chen, Tsinghua University, Beijing, 100084, China
* Yilei Chen, Shanghai Qi Zhi Institute, Shanghai, 200232, China
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, 200232, China
### Abstract
> At ITCS 2020, Bartusek et al. proposed a candidate indistinguishability obfuscator (\(i\mathcal {O}\)) for affine determinant programs (ADPs). The candidate is special since it directly applies specific randomization techniques to the underlying ADP, without relying on the hardness of traditional cryptographic assumptions like discrete-log or learning with errors. It is relatively efficient compared to the rest of the \(i\mathcal {O}\) candidates. However, the obfuscation scheme requires further cryptanalysis since it was not known to be based on any well-formed mathematical assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_22](https://doi.org/10.1007/978-3-031-06944-4_22)
## Indistinguishability Obfuscation from LPN over $\mathbb {F}_p$, DLIN, and PRGs in NC0.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#indistinguishability-obfuscation-from-lpn-over-mathbb-f-p-dlin-and-prgs-in-nc0)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#indistinguishability-obfuscation-from-lpn-over-mathbb-f-p-dlin-and-prgs-in-nc0)
### Authors
* Aayush Jain, NTT Research and Carnegie Mellon University, Pittsburgh, USA
* Huijia Lin, University of Washington, Seattle, USA
* Amit Sahai, UCLA, Los Angeles, USA
### Abstract
> In this work, we study what minimal sets of assumptions suffice for constructing indistinguishability obfuscation (\(i\mathcal {O}\)). We prove:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_23](https://doi.org/10.1007/978-3-031-06944-4_23)
## Incompressible Cryptography.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#incompressible-cryptography)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#incompressible-cryptography)
### Authors
* Jiaxin Guan, Princeton University, Princeton, NJ, 08544, USA
* Mark Zhandry, Princeton University, Princeton, NJ, 08544, USA
* Daniel Wichs, Northeastern University, Boston, MA, 02115, USA
* Daniel Wichs, NTT Research, Inc., Sunnyvale, CA, 94085, USA
* Mark Zhandry, NTT Research, Inc., Sunnyvale, CA, 94085, USA
### Abstract
> Incompressible encryption allows us to make the ciphertext size flexibly large and ensures that an adversary learns nothing about the encrypted data, even if the decryption key later leaks, unless she stores essentially the entire ciphertext. Incompressible signatures can be made arbitrarily large and ensure that an adversary cannot produce a signature on any message, even one she has seen signed before, unless she stores one of the signatures essentially in its entirety.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_24](https://doi.org/10.1007/978-3-031-06944-4_24)
## COA-Secure Obfuscation and Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#coa-secure-obfuscation-and-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#coa-secure-obfuscation-and-applications)
### Authors
* Ran Canetti, Boston University, Boston, USA
* Suvradip Chakraborty, ETH Zürich, Zürich, Switzerland
* Dakshita Khurana, UIUC, Champaign, USA
* Nishant Kumar, UIUC, Champaign, USA
* Oxana Poburinnaya, Boston, USA
* Manoj Prabhakaran, IIT Bombay, Mumbai, India
### Abstract
> We put forth a new paradigm for program obfuscation, where obfuscated programs are endowed with proofs of “well formedness.” In addition to asserting existence of an underlying plaintext program with an attested structure, these proofs also prevent mauling attacks, whereby an adversary surreptitiously creates an obfuscated program based on secrets which are embedded in other obfuscated programs. We call this new guarantee Chosen Obfuscation Attacks (COA) security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_25](https://doi.org/10.1007/978-3-031-06944-4_25)
## Unclonable Polymers and Their Cryptographic Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#unclonable-polymers-and-their-cryptographic-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#unclonable-polymers-and-their-cryptographic-applications)
### Authors
* Ghada Almashaqbeh, University of Connecticut, Storrs, USA
* Ran Canetti, Boston University, Boston, USA
* Yaniv Erlich, Eleven Therapeutics and IDC Herzliya, Herzliya, Israel
* Jonathan Gershoni, Tel Aviv University, Tel Aviv, Israel
* Anna Roitburd-Berman, Tel Aviv University, Tel Aviv, Israel
* Eran Tromer, Tel Aviv University, Tel Aviv, Israel
* Tal Malkin, Columbia University, New York, USA
* Itsik Pe’er, Columbia University, New York, USA
* Eran Tromer, Columbia University, New York, USA
### Abstract
> We propose a mechanism for generating and manipulating protein polymers to obtain a new type of consumable storage that exhibits intriguing cryptographic “self-destruct” properties, assuming the hardness of certain polymer-sequencing problems.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_26](https://doi.org/10.1007/978-3-031-06944-4_26)
## Distributed (Correlation) Samplers: How to Remove a Trusted Dealer in One Round.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2022-1.md#distributed-correlation-samplers-how-to-remove-a-trusted-dealer-in-one-round)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2022-1.md#distributed-correlation-samplers-how-to-remove-a-trusted-dealer-in-one-round)
### Authors
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
### Abstract
> Structured random strings (SRSs) and correlated randomness are important for many cryptographic protocols. In settings where interaction is expensive, it is desirable to obtain such randomness in as few rounds of communication as possible; ideally, simply by exchanging one reusable round of messages which can be considered public keys.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_27](https://doi.org/10.1007/978-3-031-06944-4_27)
