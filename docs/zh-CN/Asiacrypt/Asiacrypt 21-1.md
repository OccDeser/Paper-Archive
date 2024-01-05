# Asiacrypt 21-1
## On the Hardness of the NTRU Problem.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#on-the-hardness-of-the-ntru-problem) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#on-the-hardness-of-the-ntru-problem)**
### 作者
* Alice Pellet-Mary, CNRS, Inria and Université de Bordeaux, Bordeaux, France
* Damien Stehlé, ENS de Lyon, Lyon, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
### 摘要
> The 25 year-old NTRU problem is an important computational assumption in public-key cryptography. However, from a reduction perspective, its relative hardness compared to other problems on Euclidean lattices is not well-understood. Its decision version reduces to the search Ring-LWE problem, but this only provides a hardness upper bound.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_1](https://doi.org/10.1007/978-3-030-92062-3_1)
## A Geometric Approach to Linear Cryptanalysis.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#a-geometric-approach-to-linear-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#a-geometric-approach-to-linear-cryptanalysis)**
### 作者
* Tim Beyne, Imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
### 摘要
> A new interpretation of linear cryptanalysis is proposed. This ‘geometric approach’ unifies all common variants of linear cryptanalysis, reveals links between various properties, and suggests additional generalizations. For example, new insights into invariants corresponding to non-real eigenvalues of correlation matrices and a generalization of the link between zero-correlation and integral attacks are obtained. Geometric intuition leads to a fixed-key motivation for the piling-up principle, which is illustrated by explaining and generalizing previous results relating invariants and linear approximations. Rank-one approximations are proposed to analyze cell-oriented ciphers, and used to resolve an open problem posed by Beierle, Canteaut and Leander at FSE 2019. In particular, it is shown how such approximations can be analyzed automatically using Riemannian optimization.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_2](https://doi.org/10.1007/978-3-030-92062-3_2)
## Lattice Enumeration for Tower NFS: A 521-Bit Discrete Logarithm Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#lattice-enumeration-for-tower-nfs-a-521-bit-discrete-logarithm-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#lattice-enumeration-for-tower-nfs-a-521-bit-discrete-logarithm-computation)**
### 作者
* Gabrielle De Micheli, Université de Lorraine, CNRS, Inria, Nancy, France
* Pierrick Gaudry, Université de Lorraine, CNRS, Inria, Nancy, France
* Cécile Pierrot, Université de Lorraine, CNRS, Inria, Nancy, France
### 摘要
> The Tower variant of the Number Field Sieve (TNFS) is known to be asymptotically the most efficient algorithm to solve the discrete logarithm problem in finite fields of medium characteristics, when the extension degree is composite. A major obstacle to an efficient implementation of TNFS is the collection of algebraic relations, as it happens in dimension greater than 2. This requires the construction of new sieving algorithms which remain efficient as the dimension grows. In this article, we overcome this difficulty by considering a lattice enumeration algorithm which we adapt to this specific context. We also consider a new sieving area, a high-dimensional sphere, whereas previous sieving algorithms for the classical NFS considered an orthotope. Our new sieving technique leads to a much smaller running time, despite the larger dimension of the search space, and even when considering a larger target, as demonstrated by a record computation we performed in a 521-bit finite field \({\mathbb F}_{p^6}\). The target finite field is of the same form than finite fields used in recent zero-knowledge proofs in some blockchains. This is the first reported implementation of TNFS.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_3](https://doi.org/10.1007/978-3-030-92062-3_3)
## Partial Key Exposure Attack on Short Secret Exponent CRT-RSA.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#partial-key-exposure-attack-on-short-secret-exponent-crt-rsa) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#partial-key-exposure-attack-on-short-secret-exponent-crt-rsa)**
### 作者
* Alexander May, Ruhr-University Bochum, Bochum, Germany
* Julian Nowakowski, Ruhr-University Bochum, Bochum, Germany
* Santanu Sarkar, Ruhr-University Bochum, Bochum, Germany
* Santanu Sarkar, Indian Institute of Technology Madras, Chennai, India
### 摘要
> Let (N, e) be an RSA public key, where \(N=pq\) is the product of equal bitsize primes p, q. Let \(d_p, d_q\) be the corresponding secret CRT-RSA exponents.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_4](https://doi.org/10.1007/978-3-030-92062-3_4)
## A Formula for Disaster: A Unified Approach to Elliptic Curve Special-Point-Based Attacks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#a-formula-for-disaster-a-unified-approach-to-elliptic-curve-special-point-based-attacks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#a-formula-for-disaster-a-unified-approach-to-elliptic-curve-special-point-based-attacks)**
### 作者
* Vladimir Sedlacek, Masaryk University, Brno, Czech Republic
* Jan Jancar, Masaryk University, Brno, Czech Republic
* Vladimir Sedlacek, Ca’Foscari University, Venice, Italy
* Jesús-Javier Chi-Domínguez, Cryptography Research Centre, Technology Innovation Institute, Abu Dhabi, UAE
* Jesús-Javier Chi-Domínguez, Tampere University, Tampere, Finland
* Billy Bob Brumley, Tampere University, Tampere, Finland
### 摘要
> The Refined Power Analysis, Zero-Value Point, and Exceptional Procedure attacks introduced side-channel techniques against specific cases of elliptic curve cryptography. The three attacks recover bits of a static ECDH key adaptively, collecting information on whether a certain multiple of the input point was computed. We unify and generalize these attacks in a common framework, and solve the corresponding problem for a broader class of inputs. We also introduce a version of the attack against windowed scalar multiplication methods, recovering the full scalar instead of just a part of it. Finally, we systematically analyze elliptic curve point addition formulas from the Explicit-Formulas Database, classify all non-trivial exceptional points, and find them in new formulas. These results indicate the usefulness of our tooling, which we released publicly, for unrolling formulas and finding special points, and potentially for independent future work.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_5](https://doi.org/10.1007/978-3-030-92062-3_5)
## Cryptanalysis of an Oblivious PRF from Supersingular Isogenies.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#cryptanalysis-of-an-oblivious-prf-from-supersingular-isogenies) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#cryptanalysis-of-an-oblivious-prf-from-supersingular-isogenies)**
### 作者
* Andrea Basso, University of Birmingham, Birmingham, UK
* Péter Kutas, University of Birmingham, Birmingham, UK
* Christophe Petit, University of Birmingham, Birmingham, UK
* Simon-Philipp Merz, Royal Holloway, University of London, Egham, UK
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Antonio Sanso, Ethereum Foundation, Zug, Switzerland
* Antonio Sanso, Ruhr Universität Bochum, Bochum, Germany
* Péter Kutas, Eötvös Loránd University, Budapest, Hungary
### 摘要
> We cryptanalyse the SIDH-based oblivious pseudorandom function from supersingular isogenies proposed at Asiacrypt’20 by Boneh, Kogan and Woo. To this end, we give an attack on an assumption, the auxiliary one-more assumption, that was introduced by Boneh et al. and we show that this leads to an attack on the oblivious PRF itself. The attack breaks the pseudorandomness as it allows adversaries to evaluate the OPRF without further interactions with the server after some initial OPRF evaluations and some offline computations. More specifically, we first propose a polynomial-time attack. Then, we argue it is easy to change the OPRF protocol to include some countermeasures, and present a second subexponential attack that succeeds in the presence of said countermeasures. Both attacks break the security parameters suggested by Boneh et al. Furthermore, we provide a proof of concept implementation as well as some timings of our attack. Finally, we examine the generation of one of the OPRF parameters and argue that a trusted third party is needed to guarantee provable security.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_6](https://doi.org/10.1007/978-3-030-92062-3_6)
## A Practical Key-Recovery Attack on 805-Round Trivium.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#a-practical-key-recovery-attack-on-805-round-trivium) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#a-practical-key-recovery-attack-on-805-round-trivium)**
### 作者
* Chen-Dong Ye, PLA Strategic Support Force Information Engineering University, Zhengzhou, 450001, China
* Tian Tian, PLA Strategic Support Force Information Engineering University, Zhengzhou, 450001, China
### 摘要
> The cube attack is one of the most important cryptanalytic techniques against Trivium. Many key-recovery attacks based on cube attacks have been established. However, few attacks can recover the 80-bit full key information practically. In particular, the previous best practical key-recovery attack was on 784-round Trivium proposed by Fouque and Vannet at FSE 2013. To mount practical key-recovery attacks, it requires a sufficient number of low-degree superpolies. It is difficult both for experimental cube attacks and division property based cube attacks with randomly selected cubes due to lack of efficiency. In this paper, we give a new algorithm to construct candidate cubes targeting linear superpolies. Our experiments show that the success probability is \( 100\% \) for finding linear superpolies using the constructed cubes. We obtain over 1000 linear superpolies for 805-round Trivium. With 42 independent linear superpolies, we mount a practical key-recovery attack on 805-round Trivium, which increases the number of attacked rounds by 21. The complexity of our attack is \( 2^{41.40} \), which could be carried out on a PC with a GTX-1080 GPU in several hours.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_7](https://doi.org/10.1007/978-3-030-92062-3_7)
## Algebraic Attacks on Rasta and Dasta Using Low-Degree Equations.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#algebraic-attacks-on-rasta-and-dasta-using-low-degree-equations) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#algebraic-attacks-on-rasta-and-dasta-using-low-degree-equations)**
### 作者
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Takanori Isobe, PRESTO, Japan Science and Technology Agency, Tokyo, Japan
* Santanu Sarkar, Indian Institute of Technology Madras, Chennai, India
* Willi Meier, FHNW, Windisch, Switzerland
* Santanu Sarkar, Ruhr-University Bochum, Bochum, Germany
### 摘要
> Rasta and Dasta are two fully homomorphic encryption friendly symmetric-key primitives proposed at CRYPTO 2018 and ToSC 2020, respectively. We point out that the designers of Rasta and Dasta neglected an important property of the \(\chi \) operation. Combined with the special structure of Rasta and Dasta, this property directly leads to significantly improved algebraic cryptanalysis. Especially, it enables us to theoretically break 2 out of 3 instances of full Agrasta, which is the aggressive version of Rasta with the block size only slightly larger than the security level in bits. We further reveal that Dasta is more vulnerable against our attacks than Rasta for its usage of a linear layer composed of an ever-changing bit permutation and a deterministic linear transform. Based on our cryptanalysis, the security margins of Dasta and Rasta parameterized with \((n,\kappa ,r)\in \{(327,80,4),(1877,128,4),(3545,256,5)\}\) are reduced to only 1 round, where n, \(\kappa \) and r denote the block size, the claimed security level and the number of rounds, respectively. These parameters are of particular interest as the corresponding ANDdepth is the lowest among those that can be implemented in reasonable time and target the same claimed security level.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_8](https://doi.org/10.1007/978-3-030-92062-3_8)
## Automatic Classical and Quantum Rebound Attacks on AES-Like Hashing by Exploiting Related-Key Differentials.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#automatic-classical-and-quantum-rebound-attacks-on-aes-like-hashing-by-exploiting-related-key-differentials) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#automatic-classical-and-quantum-rebound-attacks-on-aes-like-hashing-by-exploiting-related-key-differentials)**
### 作者
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Congming Wei, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Zhiyu Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhiyu Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Xiaoyun Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
### 摘要
> Collision attacks on AES-like hashing (hash functions constructed by plugging AES-like ciphers or permutations into the famous PGV modes or their variants) can be reduced to the problem of finding a pair of inputs respecting a differential of the underlying AES-like primitive whose input and output differences are the same. The rebound attack due to Mendel et al. is a powerful tool for achieving this goal, whose quantum version was first considered by Hosoyamada and Sasaki at EUROCRYPT 2020. In this work, we automate the process of searching for the configurations of rebound attacks by taking related-key differentials of the underlying block cipher into account with the MILP-based approach. In the quantum setting, our model guide the search towards characteristics that minimize the resources (e.g., QRAM) and complexities of the resulting rebound attacks. We apply our method to Saturnin-hash, SKINNY, and Whirlpool and improved results are obtained.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_9](https://doi.org/10.1007/978-3-030-92062-3_9)
## Clustering Effect in Simon and Simeck.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#clustering-effect-in-simon-and-simeck) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#clustering-effect-in-simon-and-simeck)**
### 作者
* Gaëtan Leurent, Inria, Paris, France
* Clara Pernot, Inria, Paris, France
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
### 摘要
> Simon and Simeck are two lightweight block ciphers with a simple round function using only word rotations and a bit-wise AND operation. Previous work has shown a strong clustering effect for differential and linear cryptanalysis, due to the existence of many trails with the same inputs and outputs.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_10](https://doi.org/10.1007/978-3-030-92062-3_10)
## New Attacks on LowMC Instances with a Single Plaintext/Ciphertext Pair.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#new-attacks-on-lowmc-instances-with-a-single-plaintext-ciphertext-pair) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#new-attacks-on-lowmc-instances-with-a-single-plaintext-ciphertext-pair)**
### 作者
* Subhadeep Banik, LASEC, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Khashayar Barooti, LASEC, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Serge Vaudenay, LASEC, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Hailun Yan, LASEC, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
### 摘要
> Cryptanalysis of the LowMC block cipher when the attacker has access to a single known plaintext/ciphertext pair is a mathematically challenging problem. This is because the attacker is unable to employ most of the standard techniques in symmetric cryptography like linear and differential cryptanalysis. This scenario is particularly relevant while arguing the security of the PICNIC digital signature scheme in which the plaintext/ciphertext pair generated by the LowMC block cipher serves as the public (verification) key and the corresponding LowMC encryption key also serves as the secret (signing) key of the signature scheme. In the paper by Banik et al. (IACR ToSC 2020:4), the authors used a linearization technique of the LowMC S-box to mount attacks on some instances of the block cipher. In this paper, we first make a more precise complexity analysis of the linearization attack. Then, we show how to perform a 2-stage MITM attack on LowMC. The first stage reduces the key candidates corresponding to a fraction of key bits of the master key. The second MITM stage between this reduced candidate set and the remaining fraction of key bits successfully recovers the master key. We show that the combined computational complexity of both these stages is significantly lower than those reported in the ToSC paper by Banik et al.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_11](https://doi.org/10.1007/978-3-030-92062-3_11)
## Convexity of Division Property Transitions: Theory, Algorithms and Compact Models.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#convexity-of-division-property-transitions-theory-algorithms-and-compact-models) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#convexity-of-division-property-transitions-theory-algorithms-and-compact-models)**
### 作者
* Aleksei Udovenko, CryptoExperts, Paris, France
### 摘要
> Integral cryptanalysis is a powerful tool for attacking symmetric primitives, and division property is a state-of-the-art framework for finding integral distinguishers.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_12](https://doi.org/10.1007/978-3-030-92062-3_12)
## Strong and Tight Security Guarantees Against Integral Distinguishers.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#strong-and-tight-security-guarantees-against-integral-distinguishers) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#strong-and-tight-security-guarantees-against-integral-distinguishers)**
### 作者
* Phil Hebborn, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Baptiste Lambin, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> Integral attacks belong to the classical attack vectors against any given block ciphers. However, providing arguments that a given cipher is resistant against those attacks is notoriously difficult. In this paper, based solely on the assumption of independent round keys, we develop significantly stronger arguments than what was possible before: our main result is that we show how to argue that the sum of ciphertexts over any possible subset of plaintext is key-dependent, i.e., the non existence of integral distinguishers.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_13](https://doi.org/10.1007/978-3-030-92062-3_13)
## Massive Superpoly Recovery with Nested Monomial Predictions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#massive-superpoly-recovery-with-nested-monomial-predictions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#massive-superpoly-recovery-with-nested-monomial-predictions)**
### 作者
* Kai Hu, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Qingju Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Yosuke Todo, NTT Social Informatics Laboratories, Tokyo, Japan
* Qingju Wang, SnT, University of Luxembourg, Luxembourg City, Luxembourg
* Kai Hu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Qingju Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
### 摘要
> Determining the exact algebraic structure or some partial information of the superpoly for a given cube is a necessary step in the cube attack – a generic cryptanalytic technique for symmetric-key primitives with some secret and public tweakable inputs. Currently, the division property based approach is the most powerful tool for exact superpoly recovery. However, as the algebraic normal form (ANF) of the targeted output bit gets increasingly complicated as the number of rounds grows, existing methods for superpoly recovery quickly hit their bottlenecks. For example, previous method stuck at round 842, 190, and 892 for Trivium, Grain-128AEAD, and Kreyvium, respectively. In this paper, we propose a new framework for recovering the exact ANFs of massive superpolies based on the monomial prediction technique (ASIACRYPT 2020, an alternative language for the division property). In this framework, the targeted output bit is first expressed as a polynomial of the bits of some intermediate states. For each term appearing in the polynomial, the monomial prediction technique is applied to determine its superpoly if the corresponding MILP model can be solved within a preset time limit. Terms unresolved within the time limit are further expanded as polynomials of the bits of some deeper intermediate states with symbolic computation, whose terms are again processed with monomial predictions. The above procedure is iterated until all terms are resolved. Finally, all the sub-superpolies are collected and assembled into the superpoly of the targeted bit. We apply the new framework to Trivium, Grain-128AEAD, and Kreyvium. As a result, the exact ANFs of the superpolies for 843-, 844- and 845-round Trivium, 191-round Grain-128AEAD and 894-round Kreyvium are recovered. Moreover, with help of the Möbius transform, we present a novel key-recovery technique based on superpolies involving all key bits by exploiting the sparse structures, which leads to the best key-recovery attacks on the targets considered.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_14](https://doi.org/10.1007/978-3-030-92062-3_14)
## Quantum Linearization Attacks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#quantum-linearization-attacks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#quantum-linearization-attacks)**
### 作者
* Xavier Bonnetain, Institute for Quantum Computing, Department of Combinatorics and Optimization, University of Waterloo, Waterloo, ON, Canada
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* Gaëtan Leurent, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
### 摘要
> Recent works have shown that quantum period-finding can be used to break many popular constructions (some block ciphers such as Even-Mansour, multiple MACs and AEs...) in the superposition query model. So far, all the constructions broken exhibited a strong algebraic structure, which enables to craft a periodic function of a single input block. Recovering the secret period allows to recover a key, distinguish, break the confidentiality or authenticity of these modes.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_15](https://doi.org/10.1007/978-3-030-92062-3_15)
## Generic Framework for Key-Guessing Improvements.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#generic-framework-for-key-guessing-improvements) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#generic-framework-for-key-guessing-improvements)**
### 作者
* Marek Broll, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Federico Canale, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Antonio Flórez-Gutiérrez, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
### 摘要
> We propose a general technique to improve the key-guessing step of several attacks on block ciphers. This is achieved by defining and studying some new properties of the associated S-boxes and by representing them as a special type of decision trees that are crucial for finding fine-grained guessing strategies for various attack vectors. We have proposed and implemented the algorithm that efficiently finds such trees, and use it for providing several applications of this approach, which include the best known attacks on Noekeon, GIFT, and RECTANGLE.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_16](https://doi.org/10.1007/978-3-030-92062-3_16)
## On the Non-tightness of Measurement-Based Reductions for Key Encapsulation Mechanism in the Quantum Random Oracle Model.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#on-the-non-tightness-of-measurement-based-reductions-for-key-encapsulation-mechanism-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#on-the-non-tightness-of-measurement-based-reductions-for-key-encapsulation-mechanism-in-the-quantum-random-oracle-model)**
### 作者
* Haodong Jiang, TCA Laboratory, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences, Beijing, 100190, China
* Zhenfeng Zhang, TCA Laboratory, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences, Beijing, 100190, China
* Haodong Jiang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Haodong Jiang, State Key Laboratory of Mathematical Engineering and Advanced Computing, Zhengzhou, 450001, Henan, China
* Zhi Ma, State Key Laboratory of Mathematical Engineering and Advanced Computing, Zhengzhou, 450001, Henan, China
* Haodong Jiang, Henan Key Laboratory of Network Cryptography Technology, Zhengzhou, 450001, Henan, China
* Zhi Ma, Henan Key Laboratory of Network Cryptography Technology, Zhengzhou, 450001, Henan, China
### 摘要
> Key encapsulation mechanism (KEM) variants of the Fujisaki-Okamoto (FO) transformation (TCC 2017) that turn a weakly-secure public-key encryption (PKE) into an IND-CCA-secure KEM, were widely used among the KEM submissions to the NIST Post-Quantum Cryptography Standardization Project. Under the standard CPA security assumptions, i.e., OW-CPA and IND-CPA, the security of these variants in the quantum random oracle model (QROM) has been proved by black-box reductions, e.g., Jiang et al. (CRYPTO 2018), and by non-black-box reductions (EUROCRYPT 2020). The non-black-box reductions (EUROCRYPT 2020) have a liner security loss, but can only apply to specific reversible adversaries with strict reversible implementation. On the contrary, the existing black-box reductions in the literature can apply to an arbitrary adversary with an arbitrary implementation, but suffer a quadratic security loss.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_17](https://doi.org/10.1007/978-3-030-92062-3_17)
## Redeeming Reset Indifferentiability and Applications to Post-quantum Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#redeeming-reset-indifferentiability-and-applications-to-post-quantum-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#redeeming-reset-indifferentiability-and-applications-to-post-quantum-security)**
### 作者
* Mark Zhandry, NTT Research, Palo Alto, USA
* Mark Zhandry, Princeton University, Princeton, USA
### 摘要
> Indifferentiability is used to analyze the security of constructions of idealized objects, such as random oracles or ideal ciphers. Reset indifferentiability is a strengthening of plain indifferentiability which is applicable in far more scenarios, but has largely been abandoned due to significant impossibility results and a lack of positive results. Our main results are:

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_18](https://doi.org/10.1007/978-3-030-92062-3_18)
## Franchised Quantum Money.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#franchised-quantum-money) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#franchised-quantum-money)**
### 作者
* Bhaskar Roberts, UC Berkeley, Berkeley, USA
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Sunnyvale, USA
### 摘要
> The construction of public key quantum money based on standard cryptographic assumptions is a longstanding open question. Here we introduce franchised quantum money, an alternative form of quantum money that is easier to construct. Franchised quantum money retains the features of a useful quantum money scheme, namely unforgeability and local verification: anyone can verify banknotes without communicating with the bank. In franchised quantum money, every user gets a unique secret verification key, and the scheme is secure against counterfeiting and sabotage, a new security notion that appears in the franchised model. Finally, we construct franchised quantum money and prove security assuming one-way functions.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_19](https://doi.org/10.1007/978-3-030-92062-3_19)
## Quantum Computationally Predicate-Binding Commitments with Application in Quantum Zero-Knowledge Arguments for NP.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#quantum-computationally-predicate-binding-commitments-with-application-in-quantum-zero-knowledge-arguments-for-np) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#quantum-computationally-predicate-binding-commitments-with-application-in-quantum-zero-knowledge-arguments-for-np)**
### 作者
* Jun Yan, Jinan University, Guangzhou, China
### 摘要
> A quantum bit commitment scheme is to realize bit (rather than qubit) commitment by exploiting quantum communication and quantum computation. In this work, we study the binding property of the quantum string commitment scheme obtained by composing a generic quantum perfectly(resp. statistically)-hiding computationally-binding bit commitment scheme (which can be realized based on quantum-secure one-way permutations(resp. functions)) in parallel. We show that the resulting scheme satisfies a stronger quantum computational binding property, which we will call predicate-binding, than the trivial honest-binding. Intuitively and very roughly, the predicate-binding property guarantees that given any inconsistent predicate pair over a set of strings (i.e. no strings in this set can satisfy both predicates), if a (claimed) quantum commitment can be opened so that the revealed string satisfies one predicate with certainty, then the same commitment cannot be opened so that the revealed string satisfies the other predicate (except for a negligible probability).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_20](https://doi.org/10.1007/978-3-030-92062-3_20)
## Quantum Encryption with Certified Deletion, Revisited: Public Key, Attribute-Based, and Classical Communication.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#quantum-encryption-with-certified-deletion-revisited-public-key-attribute-based-and-classical-communication) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#quantum-encryption-with-certified-deletion-revisited-public-key-attribute-based-and-classical-communication)**
### 作者
* Taiga Hiroka, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Tomoyuki Morimae, PRESTO, JST, Saitama, Japan
* Ryo Nishimaki, NTT Corporation, Tokyo, Japan
* Takashi Yamakawa, NTT Corporation, Tokyo, Japan
### 摘要
> Broadbent and Islam (TCC ’20) proposed a quantum cryptographic primitive called quantum encryption with certified deletion. In this primitive, a receiver in possession of a quantum ciphertext can generate a classical certificate that the encrypted message has been deleted. Although their construction is information-theoretically secure, it is limited to the setting of one-time symmetric key encryption (SKE), where a sender and receiver have to share a common key in advance and the key can be used only once. Moreover, the sender has to generate a quantum state and send it to the receiver over a quantum channel in their construction. Deletion certificates are privately verifiable, which means a verification key for a certificate must be kept secret, in the definition by Broadbent and Islam. However, we can also consider public verifiability. In this work, we present various constructions of encryption with certified deletion.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_21](https://doi.org/10.1007/978-3-030-92062-3_21)
## Tight Adaptive Reprogramming in the QROM.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#tight-adaptive-reprogramming-in-the-qrom) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#tight-adaptive-reprogramming-in-the-qrom)**
### 作者
* Alex B. Grilo, Sorbonne Université, CNRS, LIP6, Paris, France
* Kathrin Hövelmanns, Ruhr-Universität Bochum, Bochum, Germany
* Kathrin Hövelmanns, Eindhoven University of Technology, Eindhoven, The Netherlands
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Christian Majenz, Technical University of Denmark, Lyngby, Denmark
* Christian Majenz, Centrum Wiskunde & Informatica and QuSoft, Amsterdam, The Netherlands
### 摘要
> The random oracle model (ROM) enjoys widespread popularity, mostly because it tends to allow for tight and conceptually simple proofs where provable security in the standard model is elusive or costly. While being the adequate replacement of the ROM in the post-quantum security setting, the quantum-accessible random oracle model (QROM) has thus far failed to provide these advantages in many settings. In this work, we focus on adaptive reprogrammability, a feature of the ROM enabling tight and simple proofs in many settings. We show that the straightforward quantum-accessible generalization of adaptive reprogramming is feasible by proving a bound on the adversarial advantage in distinguishing whether a random oracle has been reprogrammed or not. We show that our bound is tight by providing a matching attack. We go on to demonstrate that our technique recovers the mentioned advantages of the ROM in three QROM applications: 1) We give a tighter proof of security of the message compression routine as used by XMSS. 2) We show that the standard ROM proof of chosen-message security for Fiat-Shamir signatures can be lifted to the QROM, straightforwardly, achieving a tighter reduction than previously known. 3) We give the first QROM proof of security against fault injection and nonce attacks for the hedged Fiat-Shamir transform.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_22](https://doi.org/10.1007/978-3-030-92062-3_22)
## QCB: Efficient Quantum-Secure Authenticated Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2021-1.md#qcb-efficient-quantum-secure-authenticated-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2021-1.md#qcb-efficient-quantum-secure-authenticated-encryption)**
### 作者
* Ritam Bhaumik, Inria, Paris, France
* André Chailloux, Inria, Paris, France
* Gaëtan Leurent, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Xavier Bonnetain, Institute for Quantum Computing, Department of Combinatorics and Optimization, University of Waterloo, Waterloo, Canada
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
* Yannick Seurin, ANSSI, Paris, France
### 摘要
> It was long thought that symmetric cryptography was only mildly affected by quantum attacks, and that doubling the key length was sufficient to restore security. However, recent works have shown that Simon’s quantum period finding algorithm breaks a large number of MAC and authenticated encryption algorithms when the adversary can query the MAC/encryption oracle with a quantum superposition of messages. In particular, the OCB authenticated encryption mode is broken in this setting, and no quantum-secure mode is known with the same efficiency (rate-one and parallelizable).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_23](https://doi.org/10.1007/978-3-030-92062-3_23)
