# Asiacrypt[2019-2]
## Collision Resistant Hashing from Sub-exponential Learning Parity with Noise.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#collision-resistant-hashing-from-sub-exponential-learning-parity-with-noise)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#collision-resistant-hashing-from-sub-exponential-learning-parity-with-noise)
### Authors
* Yu Yu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Jian Weng, Jinan University, Guangzhou, 510632, China
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, 266237, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Xiangxue Li, School of Software Engineering, East China Normal University, Shanghai, 200062, China
* Yu Yu, Westone Cryptologic Research Center, Beijing, 100070, China
* Xiangxue Li, Westone Cryptologic Research Center, Beijing, 100070, China
### Abstract
> The Learning Parity with Noise (LPN) problem has recently found many cryptographic applications such as authentication protocols, pseudorandom generators/functions and even asymmetric tasks including public-key encryption (PKE) schemes and oblivious transfer (OT) protocols. It however remains a long-standing open problem whether LPN implies collision resistant hash (CRH) functions. Inspired by the recent work of Applebaum et al. (ITCS 2017), we introduce a general construction of CRH from LPN for various parameter choices. We show that, just to mention a few notable ones, under any of the following hardness assumptions (for the two most common variants of LPN)
> 
> 1. constant-noise LPN is \(2^{n^{0.5+\varepsilon }}\)-hard for any constant \(\varepsilon >0\);
> 
> 2. constant-noise LPN is \(2^{\varOmega (n/\log n)}\)-hard given \(q=\mathsf {poly}(n)\) samples;
> 
> 3. low-noise LPN (of noise rate \(1/\sqrt{n}\)) is \(2^{\varOmega (\sqrt{n}/\log n)}\)-hard given \(q=\mathsf {poly}(n)\) samples.
> 
> there exists CRH functions with constant (or even poly-logarithmic) shrinkage, which can be implemented using polynomial-size depth-3 circuits with NOT, (unbounded fan-in) AND and XOR gates. Our technical route LPN \(\rightarrow \) bSVP \(\rightarrow \) CRH is reminiscent of the known reductions for the large-modulus analogue, i.e., LWE \(\rightarrow \) SIS \(\rightarrow \) CRH, where the binary Shortest Vector Problem (bSVP) was recently introduced by Applebaum et al. (ITCS 2017) that enables CRH in a similar manner to Ajtai’s CRH functions based on the Short Integer Solution (SIS) problem.
> 
> Furthermore, under additional (arguably minimal) idealized assumptions such as small-domain random functions or random permutations (that trivially imply collision resistance), we still salvage a simple and elegant collision-resistance-preserving domain extender combining the best of the two worlds, namely, maximized (depth one) parallelizability and polynomial shrinkage. In particular, assume \(2^{n^{0.5+\varepsilon }}\)-hard constant-noise LPN or \(2^{n^{0.25+\varepsilon }}\)-hard low-noise LPN, we obtain a collision resistant hash function that evaluates in parallel only a single layer of small-domain random functions (or random permutations) and shrinks polynomially.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_1](https://doi.org/10.1007/978-3-030-34621-8_1)
## New Code-Based Privacy-Preserving Cryptographic Constructions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#new-code-based-privacy-preserving-cryptographic-constructions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#new-code-based-privacy-preserving-cryptographic-constructions)
### Authors
* Khoa Nguyen, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Hanh Tang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Huaxiong Wang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Neng Zeng, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### Abstract
> Code-based cryptography has a long history but did suffer from periods of slow development. The field has recently attracted a lot of attention as one of the major branches of post-quantum cryptography. However, its subfield of privacy-preserving cryptographic constructions is still rather underdeveloped, e.g., important building blocks such as zero-knowledge range proofs and set membership proofs, and even proofs of knowledge of a hash preimage, have not been known under code-based assumptions. Moreover, almost no substantial technical development has been introduced in the last several years.
> 
> This work introduces several new code-based privacy-preserving cryptographic constructions that considerably advance the state-of-the-art in code-based cryptography. Specifically, we present 3 major contributions, each of which potentially yields various other applications. Our first contribution is a code-based statistically hiding and computationally binding commitment scheme with companion zero-knowledge (ZK) argument of knowledge of a valid opening that can be easily extended to prove that the committed bits satisfy other relations. Our second contribution is the first code-based zero-knowledge range argument for committed values, with communication cost logarithmic in the size of the range. A special feature of our range argument is that, while previous works on range proofs/arguments (in all branches of cryptography) only address ranges of non-negative integers, our protocol can handle signed fractional numbers, and hence, can potentially find a larger scope of applications. Our third contribution is the first code-based Merkle-tree accumulator supported by ZK argument of membership, which has been known to enable various interesting applications. In particular, it allows us to obtain the first code-based ring signatures and group signatures with logarithmic signature sizes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_2](https://doi.org/10.1007/978-3-030-34621-8_2)
## An LLL Algorithm for Module Lattices.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#an-lll-algorithm-for-module-lattices)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#an-lll-algorithm-for-module-lattices)
### Authors
* Changmin Lee, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Alice Pellet-Mary, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Damien Stehlé, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Alexandre Wallet, NTT Secure Platform Laboratories, Tokyo, Japan
### Abstract
> The LLL algorithm takes as input a basis of a Euclidean lattice, and, within a polynomial number of operations, it outputs another basis of the same lattice but consisting of rather short vectors. We provide a generalization to R-modules contained in \(K^n\) for arbitrary number fields K and dimension n, with R denoting the ring of integers of K. Concretely, we introduce an algorithm that efficiently finds short vectors in rank-n modules when given access to an oracle that finds short vectors in rank-2 modules, and an algorithm that efficiently finds short vectors in rank-2 modules given access to a Closest Vector Problem oracle for a lattice that depends only on K. The second algorithm relies on quantum computations and its analysis is heuristic.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_3](https://doi.org/10.1007/978-3-030-34621-8_3)
## Order-LWE and the Hardness of Ring-LWE with Entropic Secrets.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#order-lwe-and-the-hardness-of-ring-lwe-with-entropic-secrets)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#order-lwe-and-the-hardness-of-ring-lwe-with-entropic-secrets)
### Authors
* Madalina Bolboceanu, Bitdefender, Bucharest, Romania
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Renen Perlman, Weizmann Institute of Science, Rehovot, Israel
* Devika Sharma, Weizmann Institute of Science, Rehovot, Israel
### Abstract
> We propose a generalization of the celebrated Ring Learning with Errors (RLWE) problem (Lyubashevsky, Peikert and Regev, Eurocrypt 2010, Eurocrypt 2013), wherein the ambient ring is not the ring of integers of a number field, but rather an order (a full rank subring). We show that our Order-LWE problem enjoys worst-case hardness with respect to short-vector problems in invertible-ideal lattices of the order.
> 
> The definition allows us to provide a new analysis for the hardness of the abundantly used Polynomial-LWE (PLWE) problem (Stehlé et al., Asiacrypt 2009), different from the one recently proposed by Rosca, Stehlé and Wallet (Eurocrypt 2018). This suggests that Order-LWE may be used to analyze and possibly design useful relaxations of RLWE.
> 
> We show that Order-LWE can naturally be harnessed to prove security for RLWE instances where the “RLWE secret” (which often corresponds to the secret-key of a cryptosystem) is not sampled uniformly as required for RLWE hardness. We start by showing worst-case hardness even if the secret is sampled from a subring of the sample space. Then, we study the case where the secret is sampled from an ideal of the sample space or a coset thereof (equivalently, some of its CRT coordinates are fixed or leaked). In the latter, we show an interesting threshold phenomenon where the amount of RLWE noise determines whether the problem is tractable.
> 
> Lastly, we address the long standing question of whether high-entropy secret is sufficient for RLWE to be intractable. Our result on sampling from ideals shows that simply requiring high entropy is insufficient. We therefore propose a broad class of distributions where we conjecture that hardness should hold, and provide evidence via reduction to a concrete lattice problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_4](https://doi.org/10.1007/978-3-030-34621-8_4)
## On the Non-existence of Short Vectors in Random Module Lattices.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#on-the-non-existence-of-short-vectors-in-random-module-lattices)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#on-the-non-existence-of-short-vectors-in-random-module-lattices)
### Authors
* Ngoc Khanh Nguyen, IBM Research – Zurich, Rüschlikon, Switzerland
* Ngoc Khanh Nguyen, Ruhr Universität Bochum, Bochum, Germany
### Abstract
> Recently, Lyubashevsky & Seiler (Eurocrypt 2018) showed that small polynomials in the cyclotomic ring \(\mathbb {Z}_q[X]/(X^n+1)\), where n is a power of two, are invertible under special congruence conditions on prime modulus q. This result has been used to prove certain security properties of lattice-based constructions against unbounded adversaries. Unfortunately, due to the special conditions, working over the corresponding cyclotomic ring does not allow for efficient use of the Number Theoretic Transform (NTT) algorithm for fast multiplication of polynomials and hence, the schemes become less practical.
> 
> In this paper, we present how to overcome this limitation by analysing zeroes in the Chinese Remainder (or NTT) representation of small polynomials. As a result, we provide upper bounds on the probabilities related to the (non)-existence of a short vector in a random module lattice with no assumptions on the prime modulus. We apply our results, along with the generic framework by Kiltz et al. (Eurocrypt 2018), to a number of lattice-based Fiat-Shamir signatures so they can both enjoy tight security in the quantum random oracle model and support fast multiplication algorithms (at the cost of slightly larger public keys and signatures), such as the Bai-Galbraith signature scheme (CT-RSA 2014), \(\mathsf {Dilithium\text {-}QROM}\) (Kiltz et al., Eurocrypt 2018) and \(\mathsf {qTESLA}\) (Alkim et al., PQCrypto 2017). Our techniques can also be applied to prove that recent commitment schemes by Baum et al. (SCN 2018) are statistically binding with no additional assumptions on q.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_5](https://doi.org/10.1007/978-3-030-34621-8_5)
## Forkcipher: A New Primitive for Authenticated Encryption of Very Short Messages.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#forkcipher-a-new-primitive-for-authenticated-encryption-of-very-short-messages)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#forkcipher-a-new-primitive-for-authenticated-encryption-of-very-short-messages)
### Authors
* Elena Andreeva, imec-COSIC, KU Leuven, Leuven, Belgium
* Antoon Purnal, imec-COSIC, KU Leuven, Leuven, Belgium
* Virginie Lallemand, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Arnab Roy, University of Bristol, Bristol, UK
* Damian Vizár, CSEM, Neuchâtel, Switzerland
### Abstract
> Highly efficient encryption and authentication of short messages is an essential requirement for enabling security in constrained scenarios such as the CAN FD in automotive systems (max. message size 64 bytes), massive IoT, critical communication domains of 5G, and Narrowband IoT, to mention a few. In addition, one of the NIST lightweight cryptography project requirements is that AEAD schemes shall be “optimized to be efficient for short messages (e.g., as short as 8 bytes)”.
> 
> In this work we introduce and formalize a novel primitive in symmetric cryptography called forkcipher. A forkcipher is a keyed primitive expanding a fixed-lenght input to a fixed-length output. We define its security as indistinguishability under a chosen ciphertext attack (for n-bit inputs to 2n-bit outputs). We give a generic construction validation via the new iterate-fork-iterate design paradigm.
> 
> We then propose \( {\mathsf {ForkSkinny}} \) as a concrete forkcipher instance with a public tweak and based on SKINNY: a tweakable lightweight cipher following the TWEAKEY framework. We conduct extensive cryptanalysis of \( {\mathsf {ForkSkinny}} \) against classical and structure-specific attacks.
> 
> We demonstrate the applicability of forkciphers by designing three new provably-secure nonce-based AEAD modes which offer performance and security tradeoffs and are optimized for efficiency of very short messages. Considering a reference block size of 16 bytes, and ignoring possible hardware optimizations, our new AEAD schemes beat the best SKINNY-based AEAD modes. More generally, we show forkciphers are suited for lightweight applications dealing with predominantly short messages, while at the same time allowing handling arbitrary messages sizes.
> 
> Furthermore, our hardware implementation results show that when we exploit the inherent parallelism of \( {\mathsf {ForkSkinny}} \) we achieve the best performance when directly compared with the most efficient mode instantiated with SKINNY.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_6](https://doi.org/10.1007/978-3-030-34621-8_6)
## Anonymous AE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#anonymous-ae)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#anonymous-ae)
### Authors
* John Chan, Department of Computer Science, University of California, Davis, USA
* Phillip Rogaway, Department of Computer Science, University of California, Davis, USA
### Abstract
> The customary formulation of authenticated encryption (AE) requires the decrypting party to supply the correct nonce with each ciphertext it decrypts. To enable this, the nonce is often sent in the clear alongside the ciphertext. But doing this can forfeit anonymity and degrade usability. Anonymity can also be lost by transmitting associated data (AD) or a session-ID (used to identify the operative key). To address these issues, we introduce anonymous AE, wherein ciphertexts must conceal their origin even when they are understood to encompass everything needed to decrypt (apart from the receiver’s secret state). We formalize a type of anonymous AE we call anAE, anonymous nonce-based AE, which generalizes and strengthens conventional nonce-based AE, nAE. We provide an efficient construction for anAE, NonceWrap, from an nAE scheme and a blockcipher. We prove NonceWrap secure. While anAE does not address privacy loss through traffic-flow analysis, it does ensure that ciphertexts, now more expansively construed, do not by themselves compromise privacy.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_7](https://doi.org/10.1007/978-3-030-34621-8_7)
## Sponges Resist Leakage: The Case of Authenticated Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#sponges-resist-leakage-the-case-of-authenticated-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#sponges-resist-leakage-the-case-of-authenticated-encryption)
### Authors
* Jean Paul Degabriele, CNS, Technische Universität Darmstadt, Darmstadt, Germany
* Christian Janson, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Patrick Struck, CDC, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> In this work we advance the study of leakage-resilient Authenticated Encryption with Associated Data (AEAD) and lay the theoretical groundwork for building such schemes from sponges. Building on the work of Barwell et al. (ASIACRYPT 2017), we reduce the problem of constructing leakage-resilient AEAD schemes to that of building fixed-input-length function families that retain pseudorandomness and unpredictability in the presence of leakage. Notably, neither property is implied by the other in the leakage-resilient setting. We then show that such a function family can be combined with standard primitives, namely a pseudorandom generator and a collision-resistant hash, to yield a nonce-based AEAD scheme. In addition, our construction is quite efficient in that it requires only two calls to this leakage-resilient function per encryption or decryption call. This construction can be instantiated entirely from the T-sponge to yield a concrete AEAD scheme which we call \({ \textsc {Slae}}\). We prove this sponge-based instantiation secure in the non-adaptive leakage setting. \({ \textsc {Slae}}\) bears many similarities and is indeed inspired by \({ \textsc {Isap}}\), which was proposed by Dobraunig et al. at FSE 2017. However, while retaining most of the practical advantages of \({ \textsc {Isap}}\), \({ \textsc {Slae}}\) additionally benefits from a formal security treatment.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_8](https://doi.org/10.1007/978-3-030-34621-8_8)
## Dual Isogenies and Their Application to Public-Key Compression for Isogeny-Based Cryptography.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#dual-isogenies-and-their-application-to-public-key-compression-for-isogeny-based-cryptography)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#dual-isogenies-and-their-application-to-public-key-compression-for-isogeny-based-cryptography)
### Authors
* Michael Naehrig, Microsoft Research, Redmond, WA, USA
* Joost Renes, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### Abstract
> The isogeny-based protocols SIDH and SIKE have received much attention for being post-quantum key agreement candidates that retain relatively small keys. A recent line of work has proposed and further improved compression of public keys, leading to the inclusion of public-key compression in the SIKE proposal for Round 2 of the NIST Post-Quantum Cryptography Standardization effort. We show how to employ the dual isogeny to significantly increase performance of compression techniques, reducing their overhead from 160–182% to 77–86% for Alice’s key generation and from 98–104% to 59–61% for Bob’s across different SIDH parameter sets. For SIKE, we reduce the overhead of (1) key generation from 140–153% to 61–74%, (2) key encapsulation from 67–90% to 38–57%, and (3) decapsulation from 59–65% to 34–39%. This is mostly achieved by speeding up the pairing computations, which has until now been the main bottleneck, but we also improve (deterministic) basis generation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_9](https://doi.org/10.1007/978-3-030-34621-8_9)
## Optimized Method for Computing Odd-Degree Isogenies on Edwards Curves.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#optimized-method-for-computing-odd-degree-isogenies-on-edwards-curves)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#optimized-method-for-computing-odd-degree-isogenies-on-edwards-curves)
### Authors
* Suhri Kim, Center for Information Security Technologies (CIST), Korea University, Seoul, Republic of Korea
* Seokhie Hong, Center for Information Security Technologies (CIST), Korea University, Seoul, Republic of Korea
* Kisoon Yoon, NSHC Inc., Uiwang, Republic of Korea
* Young-Ho Park, Sejong Cyber University, Seoul, Republic of Korea
### Abstract
> In this paper, we present an efficient method to compute arbitrary odd-degree isogenies on Edwards curves. By using the w-coordinate, we optimized the isogeny formula on Edwards curves by Moody and Shumow. We demonstrate that Edwards curves have an additional benefit when recovering the coefficient of the image curve during isogeny computation. For \(\ell \)-degree isogeny where \(\ell =2s+1\), our isogeny formula on Edwards curves outperforms Montgomery curves when \(s \ge 2\). To better represent the performance improvements when w-coordinate is used, we implement CSIDH using our isogeny formula. Our implementation is about 20% faster than the previous implementation. The result of our work opens the door for the usage of Edwards curves in isogeny-based cryptography, especially for CSIDH which requires higher degree isogenies.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_10](https://doi.org/10.1007/978-3-030-34621-8_10)
## Hard Isogeny Problems over RSA Moduli and Groups with Infeasible Inversion.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#hard-isogeny-problems-over-rsa-moduli-and-groups-with-infeasible-inversion)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#hard-isogeny-problems-over-rsa-moduli-and-groups-with-infeasible-inversion)
### Authors
* Salim Ali Altuğ, Boston University, Boston, USA
* Yilei Chen, Visa Research, Palo Alto, USA
### Abstract
> We initiate the study of computational problems on elliptic curve isogeny graphs defined over RSA moduli. We conjecture that several variants of the neighbor-search problem over these graphs are hard, and provide a comprehensive list of cryptanalytic attempts on these problems. Moreover, based on the hardness of these problems, we provide a construction of groups with infeasible inversion, where the underlying groups are the ideal class groups of imaginary quadratic orders.
> 
> Recall that in a group with infeasible inversion, computing the inverse of a group element is required to be hard, while performing the group operation is easy. Motivated by the potential cryptographic application of building a directed transitive signature scheme, the search for a group with infeasible inversion was initiated in the theses of Hohenberger and Molnar (2003). Later it was also shown to provide a broadcast encryption scheme by Irrer et al. (2004). However, to date the only case of a group with infeasible inversion is implied by the much stronger primitive of self-bilinear map constructed by Yamakawa et al. (2014) based on the hardness of factoring and indistinguishability obfuscation (iO). Our construction gives a candidate without using iO.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_11](https://doi.org/10.1007/978-3-030-34621-8_11)
## On Kilian's Randomization of Multilinear Map Encodings.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#on-kilians-randomization-of-multilinear-map-encodings)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#on-kilians-randomization-of-multilinear-map-encodings)
### Authors
* Jean-Sébastien Coron, University of Luxembourg, Luxembourg City, Luxembourg
* Hilder V. L. Pereira, University of Luxembourg, Luxembourg City, Luxembourg
### Abstract
> Indistinguishability obfuscation constructions based on matrix branching programs generally proceed in two steps: first apply Kilian’s randomization of the matrix product computation, and then encode the matrices using a multilinear map scheme. In this paper we observe that by applying Kilian’s randomization after encoding, the complexity of the best attacks is significantly increased for CLT13 multilinear maps. This implies that much smaller parameters can be used, which improves the efficiency of the constructions by several orders of magnitude.
> 
> As an application, we describe the first concrete implementation of multiparty non-interactive Diffie-Hellman key exchange secure against existing attacks. Key exchange was originally the most straightforward application of multilinear maps; however it was quickly broken for the three known families of multilinear maps (GGH13, CLT13 and GGH15). Here we describe the first implementation of key exchange that is resistant against known attacks, based on CLT13 multilinear maps. For \(N=4\) users and a medium level of security, our implementation requires 18 GB of public parameters, and a few minutes for the derivation of a shared key.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_12](https://doi.org/10.1007/978-3-030-34621-8_12)
## Cryptanalysis of CLT13 Multilinear Maps with Independent Slots.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#cryptanalysis-of-clt13-multilinear-maps-with-independent-slots)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#cryptanalysis-of-clt13-multilinear-maps-with-independent-slots)
### Authors
* Jean-Sébastien Coron, University of Luxembourg, Luxembourg City, Luxembourg
* Luca Notarnicola, University of Luxembourg, Luxembourg City, Luxembourg
### Abstract
> Many constructions based on multilinear maps require independent slots in the plaintext, so that multiple computations can be performed in parallel over the slots. Such constructions are usually based on CLT13 multilinear maps, since CLT13 inherently provides a composite encoding space, with a plaintext ring \(\bigoplus _{i=1}^n \mathbb {Z}/g_i\mathbb {Z}\) for small primes \(g_i\)’s. However, a vulnerability was identified at Crypto 2014 by Gentry, Lewko and Waters, with a lattice-based attack in dimension 2, and the authors have suggested a simple countermeasure. In this paper, we identify an attack based on higher dimension lattice reduction that breaks the author’s countermeasure for a wide range of parameters. Combined with the Cheon et al. attack from Eurocrypt 2015, this leads to the recovery of all the secret parameters of CLT13, assuming that low-level encodings of almost zero plaintexts are available. We show how to apply our attack against various constructions based on composite-order CLT13. For the [FRS17] construction, our attack enables to recover the secret CLT13 plaintext ring for a certain range of parameters; however, breaking the indistinguishability of the branching program remains an open problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_13](https://doi.org/10.1007/978-3-030-34621-8_13)
## Algebraic XOR-RKA-Secure Pseudorandom Functions from Post-Zeroizing Multilinear Maps.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#algebraic-xor-rka-secure-pseudorandom-functions-from-post-zeroizing-multilinear-maps)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#algebraic-xor-rka-secure-pseudorandom-functions-from-post-zeroizing-multilinear-maps)
### Authors
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL Research University, Paris, France
* Michel Abdalla, Inria, Paris, France
* Fabrice Benhamouda, Algorand Foundation, NewYork, NY, USA
* Alain Passelègue, Inria, ENS Lyon, Lyon, France
### Abstract
> Due to the vast number of successful related-key attacks against existing block-ciphers, related-key security has become a common design goal for such primitives. In these attacks, the adversary is not only capable of seeing the output of a function on inputs of its choice, but also on related keys. At Crypto 2010, Bellare and Cash proposed the first construction of a pseudorandom function that could provably withstand such attacks based on standard assumptions. Their construction, as well as several others that appeared more recently, have in common the fact that they only consider linear or polynomial functions of the secret key over complex groups. In reality, however, most related-key attacks have a simpler form, such as the XOR of the key with a known value. To address this problem, we propose the first construction of RKA-secure pseudorandom function for XOR relations. Our construction relies on multilinear maps and, hence, can only be seen as a feasibility result. Nevertheless, we remark that it can be instantiated under two of the existing multilinear-map candidates since it does not reveal any encodings of zero. To achieve this goal, we rely on several techniques that were used in the context of program obfuscation, but we also introduce new ones to address challenges that are specific to the related-key-security setting.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_14](https://doi.org/10.1007/978-3-030-34621-8_14)
## Numerical Method for Comparison on Homomorphically Encrypted Numbers.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#numerical-method-for-comparison-on-homomorphically-encrypted-numbers)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#numerical-method-for-comparison-on-homomorphically-encrypted-numbers)
### Authors
* Jung Hee Cheon, Department of Mathematical Sciences, Seoul National University, Seoul, South Korea
* Dongwoo Kim, Department of Mathematical Sciences, Seoul National University, Seoul, South Korea
* Duhyeong Kim, Department of Mathematical Sciences, Seoul National University, Seoul, South Korea
* Hun Hee Lee, Department of Mathematical Sciences, Seoul National University, Seoul, South Korea
* Keewoo Lee, Department of Mathematical Sciences, Seoul National University, Seoul, South Korea
### Abstract
> We propose a new method to compare numbers which are encrypted by Homomorphic Encryption (HE). Previously, comparison and min/max functions were evaluated using Boolean functions where input numbers are encrypted bit-wise. However, the bit-wise encryption methods require relatively expensive computations for basic arithmetic operations such as addition and multiplication.
> 
> In this paper, we introduce iterative algorithms that approximately compute the min/max and comparison operations of several numbers which are encrypted word-wise. From the concrete error analyses, we show that our min/max and comparison algorithms have \(\varTheta (\alpha )\) and \(\varTheta (\alpha \log \alpha )\) computational complexity to obtain approximate values within an error rate \(2^{-\alpha }\), while the previous minimax polynomial approximation method requires the exponential complexity \(\varTheta (2^{\alpha /2})\) and \(\varTheta (\sqrt{\alpha }\cdot 2^{\alpha /2})\), respectively. Our algorithms achieve (quasi-)optimality in terms of asymptotic computational complexity among polynomial approximations for min/max and comparison operations. The comparison algorithm is extended to several applications such as computing the top-k elements and counting numbers over the threshold in encrypted state.
> 
> Our method enables word-wise HEs to enjoy comparable performance in practice with bit-wise HEs for comparison operations while showing much better performance on polynomial operations. Computing an approximate maximum value of any two \(\ell \)-bit integers encrypted by HEAAN, up to error \(2^{\ell -10}\), takes only 1.14 ms in amortized running time, which is comparable to the result based on bit-wise HEs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_15](https://doi.org/10.1007/978-3-030-34621-8_15)
## Multi-Key Homomorphic Encryption from TFHE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#multi-key-homomorphic-encryption-from-tfhe)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#multi-key-homomorphic-encryption-from-tfhe)
### Authors
* Hao Chen, Microsoft Research, Redmond, USA
* Yongsoo Song, Microsoft Research, Redmond, USA
* Ilaria Chillotti, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> In this paper, we propose a Multi-Key Homomorphic Encryption (MKHE) scheme by generalizing the low-latency homomorphic encryption by Chillotti et al. (ASIACRYPT 2016). Our scheme can evaluate a binary gate on ciphertexts encrypted under different keys followed by a bootstrapping.
> 
> The biggest challenge to meeting the goal is to design a multiplication between a bootstrapping key of a single party and a multi-key RLWE ciphertext. We propose two different algorithms for this hybrid product. Our first method improves the ciphertext extension by Mukherjee and Wichs (EUROCRYPT 2016) to provide better performance. The other one is a whole new approach which has advantages in storage, complexity, and noise growth.
> 
> Compared to previous work, our construction is more efficient in terms of both asymptotic and concrete complexity. The length of ciphertexts and the computational costs of a binary gate grow linearly and quadratically on the number of parties, respectively. We provide experimental results demonstrating the running time of a homomorphic NAND gate with bootstrapping. To the best of our knowledge, this is the first attempt in the literature to implement an MKHE scheme.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_16](https://doi.org/10.1007/978-3-030-34621-8_16)
## Homomorphic Encryption for Finite Automata.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#homomorphic-encryption-for-finite-automata)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#homomorphic-encryption-for-finite-automata)
### Authors
* Nicholas Genise, Rutgers University, Piscataway, NJ, USA
* Craig Gentry, Algorand Foundation, New York, NY, USA
* Shai Halevi, Algorand Foundation, New York, NY, USA
* Baiyu Li, University of California, San Diego, La Jolla, CA, USA
* Daniele Micciancio, University of California, San Diego, La Jolla, CA, USA
### Abstract
> We describe a somewhat homomorphic GSW-like encryption scheme, natively encrypting matrices rather than just single elements. This scheme offers much better performance than existing homomorphic encryption schemes for evaluating encrypted (nondeterministic) finite automata (NFAs). Differently from GSW, we do not know how to reduce the security of this scheme from LWE, instead we reduce it from a stronger assumption, that can be thought of as an inhomogeneous variant of the NTRU assumption. This assumption (that we term iNTRU) may be useful and interesting in its own right, and we examine a few of its properties. We also examine methods to encode regular expressions as NFAs, and in particular explore a new optimization problem, motivated by our application to encrypted NFA evaluation. In this problem, we seek to minimize the number of states in an NFA for a given expression, subject to the constraint on the ambiguity of the NFA.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_17](https://doi.org/10.1007/978-3-030-34621-8_17)
## Efficient Explicit Constructions of Multipartite Secret Sharing Schemes.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#efficient-explicit-constructions-of-multipartite-secret-sharing-schemes)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#efficient-explicit-constructions-of-multipartite-secret-sharing-schemes)
### Authors
* Qi Chen, Advanced Institute of Engineering Science for Intelligent Manufacturing, Guangzhou University, Guangzhou, 510006, China
* Chunming Tang, College of Mathematics and Information Science, Guangzhou University, Guangzhou, 510006, China
* Zhiqiang Lin, College of Mathematics and Information Science, Guangzhou University, Guangzhou, 510006, China
### Abstract
> Multipartite secret sharing schemes are those having a multipartite access structure, in which the set of participants is divided into several parts and all participants in the same part play an equivalent role. Secret sharing schemes for multipartite access structures have received considerable attention due to the fact that multipartite secret sharing can be seen as a natural and useful generalization of threshold secret sharing.
> 
> This work deals with efficient and explicit constructions of ideal multipartite secret sharing schemes, while most of the known constructions are either inefficient or randomized. Most ideal multipartite secret sharing schemes in the literature can be classified as either hierarchical or compartmented. The main results are the constructions for ideal hierarchical access structures, a family that contains every ideal hierarchical access structure as a particular case such as the disjunctive hierarchical threshold access structure and the conjunctive hierarchical threshold access structure, and the constructions for compartmented access structures with upper bounds and compartmented access structures with lower bounds, two families of compartmented access structures.
> 
> On the basis of the relationship between multipartite secret sharing schemes, polymatroids, and matroids, the problem of how to construct a scheme realizing a multipartite access structure can be transformed to the problem of how to find a representation of a matroid from a presentation of its associated polymatroid. In this paper, we give efficient algorithms to find representations of the matroids associated to the three families of multipartite access structures. More precisely, based on know results about integer polymatroids, for each of the three families of access structures, we give an efficient method to find a representation of the integer polymatroid over some finite field, and then over some finite extension of that field, we give an efficient method to find a presentation of the matroid associated to the integer polymatroid. Finally, we construct ideal linear schemes realizing the three families of multipartite access structures by efficient methods.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_18](https://doi.org/10.1007/978-3-030-34621-8_18)
## Perfectly Secure Oblivious RAM with Sublinear Bandwidth Overhead.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#perfectly-secure-oblivious-ram-with-sublinear-bandwidth-overhead)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#perfectly-secure-oblivious-ram-with-sublinear-bandwidth-overhead)
### Authors
* Michael Raskin, Technical University of Munich, Munich, Germany
* Mark Simkin, Aarhus University, Aarhus, Denmark
### Abstract
> Oblivious RAM (ORAM) has established itself as a fundamental cryptographic building block. Understanding which bandwidth overheads are possible under which assumptions has been the topic of a vast amount of previous works. In this work, we focus on perfectly secure ORAM and we present the first construction with sublinear bandwidth overhead in the worst-case. All prior constructions with perfect security require linear communication overhead in the worst-case and only achieve sublinear bandwidth overheads in the amortized sense. We present a fundamentally new approach for constructing ORAM and our results significantly advance our understanding of what is possible with perfect security.
> 
> Our main construction, Lookahead ORAM, is perfectly secure, has a worst-case bandwidth overhead of , and a total storage cost of on the server-side, where N is the maximum number of stored data elements. In terms of concrete server-side storage costs, our construction has the smallest storage overhead among all perfectly and statistically secure ORAMs and is only a factor 3 worse than the most storage efficient computationally secure ORAM. Assuming a client-side position map, our construction is the first, among all ORAMs with worst-case sublinear overhead, that allows for a online bandwidth overhead without server-side computation. Along the way, we construct a conceptually extremely simple statistically secure ORAM with a worst-case bandwidth overhead of , which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_19](https://doi.org/10.1007/978-3-030-34621-8_19)
## How to Correct Errors in Multi-server PIR.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#how-to-correct-errors-in-multi-server-pir)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#how-to-correct-errors-in-multi-server-pir)
### Authors
* Kaoru Kurosawa, Ibaraki University, Hitachi, Japan
### Abstract
> Suppose that there exist a user and \(\ell \) servers \(S_1,\ldots ,S_{\ell }\). Each server \(S_j\) holds a copy of a database \(\mathbf {x}=(x_1, \ldots , x_n) \in \{0,1\}^n\), and the user holds a secret index \(i_0 \in \{1, \ldots , n\}\). A b error correcting \(\ell \) server PIR (Private Information Retrieval) scheme allows a user to retrieve \(x_{i_0}\) correctly even if and b or less servers return false answers while each server learns no information on \(i_0\) in the information theoretic sense. Although there exists such a scheme with the total communication cost \( O(n^{1/(2k-1)} \times k\ell \log {\ell } ) \) where \(k=\ell -2b\), the decoding algorithm is very inefficient.
> 
> In this paper, we show an efficient decoding algorithm for this b error correcting \(\ell \) server PIR scheme. It runs in time \(O(\ell ^3)\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_20](https://doi.org/10.1007/978-3-030-34621-8_20)
## UC-Secure Multiparty Computation from One-Way Functions Using Stateless Tokens.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#uc-secure-multiparty-computation-from-one-way-functions-using-stateless-tokens)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#uc-secure-multiparty-computation-from-one-way-functions-using-stateless-tokens)
### Authors
* Saikrishna Badrinarayanan, UCLA, Los Angeles, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
* Abhishek Jain, JHU, Baltimore, USA
* Ivan Visconti, University of Salerno, Fisciano, Italy
### Abstract
> We revisit the problem of universally composable (UC) secure multiparty computation in the stateless hardware token model.
> 
> We construct a three round multi-party computation protocol for general functions based on one-way functions where each party sends two tokens to every other party. Relaxing to the two-party case, we also construct a two round protocol based on one-way functions where each party sends a single token to the other party, and at the end of the protocol, both parties learn the output.
> 
> One of the key components in the above constructions is a new two-round oblivious transfer protocol based on one-way functions using only one token, which can be reused an unbounded polynomial number of times.
> 
> All prior constructions required either stronger complexity assumptions, or larger number of rounds, or a larger number of tokens.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_21](https://doi.org/10.1007/978-3-030-34621-8_21)
## Efficient UC Commitment Extension with Homomorphism for Free (and Applications).
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#efficient-uc-commitment-extension-with-homomorphism-for-free-and-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#efficient-uc-commitment-extension-with-homomorphism-for-free-and-applications)
### Authors
* Ignacio Cascudo, IMDEA Software Institute, Madrid, Spain
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Rafael Dowsley, Bar Ilan University, Tel Aviv, Israel
* Irene Giacomelli, Protocol Labs, Inc., Basel, Switzerland
### Abstract
> Homomorphic universally composable (UC) commitments allow for the sender to reveal the result of additions and multiplications of values contained in commitments without revealing the values themselves while assuring the receiver of the correctness of such computation on committed values. In this work, we construct essentially optimal additively homomorphic UC commitments from any (not necessarily UC or homomorphic) extractable commitment, while the previous best constructions require oblivious transfer. We obtain amortized linear computational complexity in the length of the input messages and rate 1. Next, we show how to extend our scheme to also obtain multiplicative homomorphism at the cost of asymptotic optimality but retaining low concrete complexity for practical parameters. Moreover, our techniques yield public coin protocols, which are compatible with the Fiat-Shamir heuristic. These results come at the cost of realizing a restricted version of the homomorphic commitment functionality where the sender is allowed to perform any number of commitments and operations on committed messages but is only allowed to perform a single batch opening of a number of commitments. Although this functionality seems restrictive, we show that it can be used as a building block for more efficient instantiations of recent protocols for secure multiparty computation and zero knowledge non-interactive arguments of knowledge.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_22](https://doi.org/10.1007/978-3-030-34621-8_22)
## Scalable Private Set Union from Symmetric-Key Techniques.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#scalable-private-set-union-from-symmetric-key-techniques)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#scalable-private-set-union-from-symmetric-key-techniques)
### Authors
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, USA
* Mike Rosulek, Oregon State University, Corvallis, USA
* Ni Trieu, Oregon State University, Corvallis, USA
* Xiao Wang, Northwestern University, Evanston, USA
### Abstract
> We present a new efficient protocol for computing private set union (PSU). Here two semi-honest parties, each holding a dataset of known size (or of a known upper bound), wish to compute the union of their sets without revealing anything else to either party. Our protocol is in the OT hybrid model. Beyond OT extension, it is fully based on symmetric-key primitives. We motivate the PSU primitive by its direct application to network security and other areas.
> 
> At the technical core of our PSU construction is the reverse private membership test (RPMT) protocol. In RPMT, the sender with input \(x^*\) interacts with a receiver holding a set X. As a result, the receiver learns (only) the bit indicating whether \(x^* \in X\), while the sender learns nothing about the set X. (Previous similar protocols provide output to the opposite party, hence the term “reverse” private membership.) We believe our RPMT abstraction and constructions may be a building block in other applications as well.
> 
> We demonstrate the practicality of our proposed protocol with an implementation. For input sets of size \(2^{20}\) and using a single thread, our protocol requires 238 s to securely compute the set union, regardless of the bit length of the items. Our protocol is amenable to parallelization. Increasing the number of threads from 1 to 32, our protocol requires only 13.1 s, a factor of \(18.25{\times }\) improvement.
> 
> To the best of our knowledge, ours is the first protocol that reports on large-size experiments, makes code available, and avoids extensive use of computationally expensive public-key operations. (No PSU code is publicly available for prior work, and the only prior symmetric-key-based work reports on small experiments and focuses on the simpler 3-party, 1-corruption setting.) Our work improves reported PSU state of the art by factor up to \(7,600{\times }\) for large instances.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_23](https://doi.org/10.1007/978-3-030-34621-8_23)
