# Asiacrypt[2021-1]
## On the Hardness of the NTRU Problem.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#on-the-hardness-of-the-ntru-problem)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#on-the-hardness-of-the-ntru-problem)
### Authors
* Alice Pellet-Mary, CNRS, Inria and Université de Bordeaux, Bordeaux, France
* Damien Stehlé, ENS de Lyon, Lyon, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
### Abstract
> The 25 year-old NTRU problem is an important computational assumption in public-key cryptography. However, from a reduction perspective, its relative hardness compared to other problems on Euclidean lattices is not well-understood. Its decision version reduces to the search Ring-LWE problem, but this only provides a hardness upper bound.
> 
> We provide two answers to the long-standing open problem of providing reduction-based evidence of the hardness of the NTRU problem. First, we reduce the worst-case approximate Shortest Vector Problem over ideal lattices to an average-case search variant of the NTRU problem. Second, we reduce another average-case search variant of the NTRU problem to the decision NTRU problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_1](https://doi.org/10.1007/978-3-030-92062-3_1)
## A Geometric Approach to Linear Cryptanalysis.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#a-geometric-approach-to-linear-cryptanalysis)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#a-geometric-approach-to-linear-cryptanalysis)
### Authors
* Tim Beyne, Imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
### Abstract
> A new interpretation of linear cryptanalysis is proposed. This ‘geometric approach’ unifies all common variants of linear cryptanalysis, reveals links between various properties, and suggests additional generalizations. For example, new insights into invariants corresponding to non-real eigenvalues of correlation matrices and a generalization of the link between zero-correlation and integral attacks are obtained. Geometric intuition leads to a fixed-key motivation for the piling-up principle, which is illustrated by explaining and generalizing previous results relating invariants and linear approximations. Rank-one approximations are proposed to analyze cell-oriented ciphers, and used to resolve an open problem posed by Beierle, Canteaut and Leander at FSE 2019. In particular, it is shown how such approximations can be analyzed automatically using Riemannian optimization.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_2](https://doi.org/10.1007/978-3-030-92062-3_2)
## Lattice Enumeration for Tower NFS: A 521-Bit Discrete Logarithm Computation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#lattice-enumeration-for-tower-nfs-a-521-bit-discrete-logarithm-computation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#lattice-enumeration-for-tower-nfs-a-521-bit-discrete-logarithm-computation)
### Authors
* Gabrielle De Micheli, Université de Lorraine, CNRS, Inria, Nancy, France
* Pierrick Gaudry, Université de Lorraine, CNRS, Inria, Nancy, France
* Cécile Pierrot, Université de Lorraine, CNRS, Inria, Nancy, France
### Abstract
> The Tower variant of the Number Field Sieve (TNFS) is known to be asymptotically the most efficient algorithm to solve the discrete logarithm problem in finite fields of medium characteristics, when the extension degree is composite. A major obstacle to an efficient implementation of TNFS is the collection of algebraic relations, as it happens in dimension greater than 2. This requires the construction of new sieving algorithms which remain efficient as the dimension grows. In this article, we overcome this difficulty by considering a lattice enumeration algorithm which we adapt to this specific context. We also consider a new sieving area, a high-dimensional sphere, whereas previous sieving algorithms for the classical NFS considered an orthotope. Our new sieving technique leads to a much smaller running time, despite the larger dimension of the search space, and even when considering a larger target, as demonstrated by a record computation we performed in a 521-bit finite field \({\mathbb F}_{p^6}\). The target finite field is of the same form than finite fields used in recent zero-knowledge proofs in some blockchains. This is the first reported implementation of TNFS.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_3](https://doi.org/10.1007/978-3-030-92062-3_3)
## Partial Key Exposure Attack on Short Secret Exponent CRT-RSA.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#partial-key-exposure-attack-on-short-secret-exponent-crt-rsa)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#partial-key-exposure-attack-on-short-secret-exponent-crt-rsa)
### Authors
* Alexander May, Ruhr-University Bochum, Bochum, Germany
* Julian Nowakowski, Ruhr-University Bochum, Bochum, Germany
* Santanu Sarkar, Ruhr-University Bochum, Bochum, Germany
* Santanu Sarkar, Indian Institute of Technology Madras, Chennai, India
### Abstract
> Let (N, e) be an RSA public key, where \(N=pq\) is the product of equal bitsize primes p, q. Let \(d_p, d_q\) be the corresponding secret CRT-RSA exponents.
> 
> Using a Coppersmith-type attack, Takayasu, Lu and Peng (TLP) recently showed that one obtains the factorization of N in polynomial time, provided that \(d_p, d_q \le N^{0.122}\). Building on the TLP attack, we show the first Partial Key Exposure attack on short secret exponent CRT-RSA. Namely, let \(N^{0.122} \le d_p, d_q \le N^{0.5}\). Then we show that a constant known fraction of the least significant bits (LSBs) of both \(d_p, d_q\) suffices to factor N in polynomial time.
> 
> Naturally, the larger \(d_p,d_q\), the more LSBs are required. E.g. if \(d_p, d_q\) are of size \(N^{0.13}\), then we have to know roughly a \(\frac{1}{5}\)-fraction of their LSBs, whereas for \(d_p, d_q\) of size \(N^{0.2}\) we require already knowledge of a \(\frac{2}{3}\)-LSB fraction. Eventually, if \(d_p, d_q\) are of full size \(N^{0.5}\), we have to know all of their bits. Notice that as a side-product of our result we obtain a heuristic deterministic polynomial time factorization algorithm on input \((N,e,d_p,d_q)\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_4](https://doi.org/10.1007/978-3-030-92062-3_4)
## A Formula for Disaster: A Unified Approach to Elliptic Curve Special-Point-Based Attacks.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#a-formula-for-disaster-a-unified-approach-to-elliptic-curve-special-point-based-attacks)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#a-formula-for-disaster-a-unified-approach-to-elliptic-curve-special-point-based-attacks)
### Authors
* Vladimir Sedlacek, Masaryk University, Brno, Czech Republic
* Jan Jancar, Masaryk University, Brno, Czech Republic
* Vladimir Sedlacek, Ca’Foscari University, Venice, Italy
* Jesús-Javier Chi-Domínguez, Cryptography Research Centre, Technology Innovation Institute, Abu Dhabi, UAE
* Jesús-Javier Chi-Domínguez, Tampere University, Tampere, Finland
* Billy Bob Brumley, Tampere University, Tampere, Finland
### Abstract
> The Refined Power Analysis, Zero-Value Point, and Exceptional Procedure attacks introduced side-channel techniques against specific cases of elliptic curve cryptography. The three attacks recover bits of a static ECDH key adaptively, collecting information on whether a certain multiple of the input point was computed. We unify and generalize these attacks in a common framework, and solve the corresponding problem for a broader class of inputs. We also introduce a version of the attack against windowed scalar multiplication methods, recovering the full scalar instead of just a part of it. Finally, we systematically analyze elliptic curve point addition formulas from the Explicit-Formulas Database, classify all non-trivial exceptional points, and find them in new formulas. These results indicate the usefulness of our tooling, which we released publicly, for unrolling formulas and finding special points, and potentially for independent future work.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_5](https://doi.org/10.1007/978-3-030-92062-3_5)
## Cryptanalysis of an Oblivious PRF from Supersingular Isogenies.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#cryptanalysis-of-an-oblivious-prf-from-supersingular-isogenies)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#cryptanalysis-of-an-oblivious-prf-from-supersingular-isogenies)
### Authors
* Andrea Basso, University of Birmingham, Birmingham, UK
* Péter Kutas, University of Birmingham, Birmingham, UK
* Christophe Petit, University of Birmingham, Birmingham, UK
* Simon-Philipp Merz, Royal Holloway, University of London, Egham, UK
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Antonio Sanso, Ethereum Foundation, Zug, Switzerland
* Antonio Sanso, Ruhr Universität Bochum, Bochum, Germany
* Péter Kutas, Eötvös Loránd University, Budapest, Hungary
### Abstract
> We cryptanalyse the SIDH-based oblivious pseudorandom function from supersingular isogenies proposed at Asiacrypt’20 by Boneh, Kogan and Woo. To this end, we give an attack on an assumption, the auxiliary one-more assumption, that was introduced by Boneh et al. and we show that this leads to an attack on the oblivious PRF itself. The attack breaks the pseudorandomness as it allows adversaries to evaluate the OPRF without further interactions with the server after some initial OPRF evaluations and some offline computations. More specifically, we first propose a polynomial-time attack. Then, we argue it is easy to change the OPRF protocol to include some countermeasures, and present a second subexponential attack that succeeds in the presence of said countermeasures. Both attacks break the security parameters suggested by Boneh et al. Furthermore, we provide a proof of concept implementation as well as some timings of our attack. Finally, we examine the generation of one of the OPRF parameters and argue that a trusted third party is needed to guarantee provable security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_6](https://doi.org/10.1007/978-3-030-92062-3_6)
## A Practical Key-Recovery Attack on 805-Round Trivium.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#a-practical-key-recovery-attack-on-805-round-trivium)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#a-practical-key-recovery-attack-on-805-round-trivium)
### Authors
* Chen-Dong Ye, PLA Strategic Support Force Information Engineering University, Zhengzhou, 450001, China
* Tian Tian, PLA Strategic Support Force Information Engineering University, Zhengzhou, 450001, China
### Abstract
> The cube attack is one of the most important cryptanalytic techniques against Trivium. Many key-recovery attacks based on cube attacks have been established. However, few attacks can recover the 80-bit full key information practically. In particular, the previous best practical key-recovery attack was on 784-round Trivium proposed by Fouque and Vannet at FSE 2013. To mount practical key-recovery attacks, it requires a sufficient number of low-degree superpolies. It is difficult both for experimental cube attacks and division property based cube attacks with randomly selected cubes due to lack of efficiency. In this paper, we give a new algorithm to construct candidate cubes targeting linear superpolies. Our experiments show that the success probability is \( 100\% \) for finding linear superpolies using the constructed cubes. We obtain over 1000 linear superpolies for 805-round Trivium. With 42 independent linear superpolies, we mount a practical key-recovery attack on 805-round Trivium, which increases the number of attacked rounds by 21. The complexity of our attack is \( 2^{41.40} \), which could be carried out on a PC with a GTX-1080 GPU in several hours.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_7](https://doi.org/10.1007/978-3-030-92062-3_7)
## Algebraic Attacks on Rasta and Dasta Using Low-Degree Equations.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#algebraic-attacks-on-rasta-and-dasta-using-low-degree-equations)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#algebraic-attacks-on-rasta-and-dasta-using-low-degree-equations)
### Authors
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Takanori Isobe, PRESTO, Japan Science and Technology Agency, Tokyo, Japan
* Santanu Sarkar, Indian Institute of Technology Madras, Chennai, India
* Willi Meier, FHNW, Windisch, Switzerland
* Santanu Sarkar, Ruhr-University Bochum, Bochum, Germany
### Abstract
> Rasta and Dasta are two fully homomorphic encryption friendly symmetric-key primitives proposed at CRYPTO 2018 and ToSC 2020, respectively. We point out that the designers of Rasta and Dasta neglected an important property of the \(\chi \) operation. Combined with the special structure of Rasta and Dasta, this property directly leads to significantly improved algebraic cryptanalysis. Especially, it enables us to theoretically break 2 out of 3 instances of full Agrasta, which is the aggressive version of Rasta with the block size only slightly larger than the security level in bits. We further reveal that Dasta is more vulnerable against our attacks than Rasta for its usage of a linear layer composed of an ever-changing bit permutation and a deterministic linear transform. Based on our cryptanalysis, the security margins of Dasta and Rasta parameterized with \((n,\kappa ,r)\in \{(327,80,4),(1877,128,4),(3545,256,5)\}\) are reduced to only 1 round, where n, \(\kappa \) and r denote the block size, the claimed security level and the number of rounds, respectively. These parameters are of particular interest as the corresponding ANDdepth is the lowest among those that can be implemented in reasonable time and target the same claimed security level.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_8](https://doi.org/10.1007/978-3-030-92062-3_8)
## Automatic Classical and Quantum Rebound Attacks on AES-Like Hashing by Exploiting Related-Key Differentials.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#automatic-classical-and-quantum-rebound-attacks-on-aes-like-hashing-by-exploiting-related-key-differentials)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#automatic-classical-and-quantum-rebound-attacks-on-aes-like-hashing-by-exploiting-related-key-differentials)
### Authors
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
### Abstract
> Collision attacks on AES-like hashing (hash functions constructed by plugging AES-like ciphers or permutations into the famous PGV modes or their variants) can be reduced to the problem of finding a pair of inputs respecting a differential of the underlying AES-like primitive whose input and output differences are the same. The rebound attack due to Mendel et al. is a powerful tool for achieving this goal, whose quantum version was first considered by Hosoyamada and Sasaki at EUROCRYPT 2020. In this work, we automate the process of searching for the configurations of rebound attacks by taking related-key differentials of the underlying block cipher into account with the MILP-based approach. In the quantum setting, our model guide the search towards characteristics that minimize the resources (e.g., QRAM) and complexities of the resulting rebound attacks. We apply our method to Saturnin-hash, SKINNY, and Whirlpool and improved results are obtained.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_9](https://doi.org/10.1007/978-3-030-92062-3_9)
## Clustering Effect in Simon and Simeck.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#clustering-effect-in-simon-and-simeck)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#clustering-effect-in-simon-and-simeck)
### Authors
* Gaëtan Leurent, Inria, Paris, France
* Clara Pernot, Inria, Paris, France
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
### Abstract
> Simon and Simeck are two lightweight block ciphers with a simple round function using only word rotations and a bit-wise AND operation. Previous work has shown a strong clustering effect for differential and linear cryptanalysis, due to the existence of many trails with the same inputs and outputs.
> 
> In this paper, we explore this clustering effect by exhibiting a class of high probability differential and linear trails where the active bits stay in a fixed window of w bits. Instead of enumerating a set of good trails contributing to a differential or a linear approximation, we compute the probability distribution over this space, including all trails in the class.
> 
> This results in stronger distinguishers than previously proposed, and we describe key recovery attacks against Simon and Simeck improving the previous results by up to 7 rounds. In particular, we obtain an attack against 42-round Simeck 64, leaving only two rounds of security margin, and an attack against 45-round Simon 96/144, reducing the security margin from 16 rounds to 9 rounds.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_10](https://doi.org/10.1007/978-3-030-92062-3_10)
## New Attacks on LowMC Instances with a Single Plaintext/Ciphertext Pair.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#new-attacks-on-lowmc-instances-with-a-single-plaintext-ciphertext-pair)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#new-attacks-on-lowmc-instances-with-a-single-plaintext-ciphertext-pair)
### Authors
* Subhadeep Banik, LASEC, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Khashayar Barooti, LASEC, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Serge Vaudenay, LASEC, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Hailun Yan, LASEC, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
### Abstract
> Cryptanalysis of the LowMC block cipher when the attacker has access to a single known plaintext/ciphertext pair is a mathematically challenging problem. This is because the attacker is unable to employ most of the standard techniques in symmetric cryptography like linear and differential cryptanalysis. This scenario is particularly relevant while arguing the security of the PICNIC digital signature scheme in which the plaintext/ciphertext pair generated by the LowMC block cipher serves as the public (verification) key and the corresponding LowMC encryption key also serves as the secret (signing) key of the signature scheme. In the paper by Banik et al. (IACR ToSC 2020:4), the authors used a linearization technique of the LowMC S-box to mount attacks on some instances of the block cipher. In this paper, we first make a more precise complexity analysis of the linearization attack. Then, we show how to perform a 2-stage MITM attack on LowMC. The first stage reduces the key candidates corresponding to a fraction of key bits of the master key. The second MITM stage between this reduced candidate set and the remaining fraction of key bits successfully recovers the master key. We show that the combined computational complexity of both these stages is significantly lower than those reported in the ToSC paper by Banik et al.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_11](https://doi.org/10.1007/978-3-030-92062-3_11)
## Convexity of Division Property Transitions: Theory, Algorithms and Compact Models.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#convexity-of-division-property-transitions-theory-algorithms-and-compact-models)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#convexity-of-division-property-transitions-theory-algorithms-and-compact-models)
### Authors
* Aleksei Udovenko, CryptoExperts, Paris, France
### Abstract
> Integral cryptanalysis is a powerful tool for attacking symmetric primitives, and division property is a state-of-the-art framework for finding integral distinguishers.
> 
> This work describes new theoretical and practical insights into traditional bit-based division property. We focus on analyzing and exploiting monotonicity/convexity of division property and its relation to the graph indicator. In particular, our investigation leads to a new compact representation of propagation, which allows CNF/MILP modeling for larger S-Boxes, such as 16-bit Super-Sboxes of lightweight block ciphers or even 32-bit random S-boxes. This solves the challenge posed by Derbez and Fouque (ToSC 2020), who questioned the possibility of SAT/SMT/MILP modeling of 16-bit Super-Sboxes. As a proof-of-concept, we model the Super-Sboxes of the 8-round LED by CNF formulas, which was not feasible by any previous approach.
> 
> Our analysis is further supported by an elegant algorithmic framework. We describe simple algorithms for computing division property of a set of n-bit vectors in time \(O(n2^n)\), reducing such sets to minimal/maximal elements in time \(O(n2^n)\), computing division property propagation table of an \(n\times m\)-bit S-box and its compact representation in time \(O((n+m)2^{n+m})\). In addition, we develop an advanced algorithm tailored to “heavy” bijections, allowing to model, for example, a randomly generated 32-bit S-box.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_12](https://doi.org/10.1007/978-3-030-92062-3_12)
## Strong and Tight Security Guarantees Against Integral Distinguishers.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#strong-and-tight-security-guarantees-against-integral-distinguishers)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#strong-and-tight-security-guarantees-against-integral-distinguishers)
### Authors
* Phil Hebborn, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Baptiste Lambin, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> Integral attacks belong to the classical attack vectors against any given block ciphers. However, providing arguments that a given cipher is resistant against those attacks is notoriously difficult. In this paper, based solely on the assumption of independent round keys, we develop significantly stronger arguments than what was possible before: our main result is that we show how to argue that the sum of ciphertexts over any possible subset of plaintext is key-dependent, i.e., the non existence of integral distinguishers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_13](https://doi.org/10.1007/978-3-030-92062-3_13)
## Massive Superpoly Recovery with Nested Monomial Predictions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#massive-superpoly-recovery-with-nested-monomial-predictions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#massive-superpoly-recovery-with-nested-monomial-predictions)
### Authors
* Kai Hu, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Qingju Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Yosuke Todo, NTT Social Informatics Laboratories, Tokyo, Japan
* Qingju Wang, SnT, University of Luxembourg, Luxembourg City, Luxembourg
* Kai Hu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Qingju Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
### Abstract
> Determining the exact algebraic structure or some partial information of the superpoly for a given cube is a necessary step in the cube attack – a generic cryptanalytic technique for symmetric-key primitives with some secret and public tweakable inputs. Currently, the division property based approach is the most powerful tool for exact superpoly recovery. However, as the algebraic normal form (ANF) of the targeted output bit gets increasingly complicated as the number of rounds grows, existing methods for superpoly recovery quickly hit their bottlenecks. For example, previous method stuck at round 842, 190, and 892 for Trivium, Grain-128AEAD, and Kreyvium, respectively. In this paper, we propose a new framework for recovering the exact ANFs of massive superpolies based on the monomial prediction technique (ASIACRYPT 2020, an alternative language for the division property). In this framework, the targeted output bit is first expressed as a polynomial of the bits of some intermediate states. For each term appearing in the polynomial, the monomial prediction technique is applied to determine its superpoly if the corresponding MILP model can be solved within a preset time limit. Terms unresolved within the time limit are further expanded as polynomials of the bits of some deeper intermediate states with symbolic computation, whose terms are again processed with monomial predictions. The above procedure is iterated until all terms are resolved. Finally, all the sub-superpolies are collected and assembled into the superpoly of the targeted bit. We apply the new framework to Trivium, Grain-128AEAD, and Kreyvium. As a result, the exact ANFs of the superpolies for 843-, 844- and 845-round Trivium, 191-round Grain-128AEAD and 894-round Kreyvium are recovered. Moreover, with help of the Möbius transform, we present a novel key-recovery technique based on superpolies involving all key bits by exploiting the sparse structures, which leads to the best key-recovery attacks on the targets considered.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_14](https://doi.org/10.1007/978-3-030-92062-3_14)
## Quantum Linearization Attacks.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#quantum-linearization-attacks)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#quantum-linearization-attacks)
### Authors
* Xavier Bonnetain, Institute for Quantum Computing, Department of Combinatorics and Optimization, University of Waterloo, Waterloo, ON, Canada
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* Gaëtan Leurent, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
### Abstract
> Recent works have shown that quantum period-finding can be used to break many popular constructions (some block ciphers such as Even-Mansour, multiple MACs and AEs...) in the superposition query model. So far, all the constructions broken exhibited a strong algebraic structure, which enables to craft a periodic function of a single input block. Recovering the secret period allows to recover a key, distinguish, break the confidentiality or authenticity of these modes.
> 
> In this paper, we introduce the quantum linearization attack, a new way of using Simon’s algorithm to target MACs in the superposition query model. Specifically, we use inputs of multiple blocks as an interface to a function hiding a linear structure. Recovering this structure allows to perform forgeries.
> 
> We also present some variants of this attack that use other quantum algorithms, which are much less common in quantum symmetric cryptanalysis: Deutsch’s, Bernstein-Vazirani’s, and Shor’s. To the best of our knowledge, this is the first time these algorithms have been used in quantum forgery or key-recovery attacks.
> 
> Our attack breaks many parallelizable MACs such as LightMac, PMAC, and numerous variants with (classical) beyond-birthday-bound security (LightMAC+, PMAC+) or using tweakable block ciphers (ZMAC). More generally, it shows that constructing parallelizable quantum-secure PRFs might be a challenging task.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_15](https://doi.org/10.1007/978-3-030-92062-3_15)
## Generic Framework for Key-Guessing Improvements.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#generic-framework-for-key-guessing-improvements)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#generic-framework-for-key-guessing-improvements)
### Authors
* Marek Broll, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Federico Canale, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Antonio Flórez-Gutiérrez, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
### Abstract
> We propose a general technique to improve the key-guessing step of several attacks on block ciphers. This is achieved by defining and studying some new properties of the associated S-boxes and by representing them as a special type of decision trees that are crucial for finding fine-grained guessing strategies for various attack vectors. We have proposed and implemented the algorithm that efficiently finds such trees, and use it for providing several applications of this approach, which include the best known attacks on Noekeon, GIFT, and RECTANGLE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_16](https://doi.org/10.1007/978-3-030-92062-3_16)
## On the Non-tightness of Measurement-Based Reductions for Key Encapsulation Mechanism in the Quantum Random Oracle Model.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#on-the-non-tightness-of-measurement-based-reductions-for-key-encapsulation-mechanism-in-the-quantum-random-oracle-model)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#on-the-non-tightness-of-measurement-based-reductions-for-key-encapsulation-mechanism-in-the-quantum-random-oracle-model)
### Authors
* Haodong Jiang, TCA Laboratory, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences, Beijing, 100190, China
* Zhenfeng Zhang, TCA Laboratory, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences, Beijing, 100190, China
* Haodong Jiang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Haodong Jiang, State Key Laboratory of Mathematical Engineering and Advanced Computing, Zhengzhou, 450001, Henan, China
* Zhi Ma, State Key Laboratory of Mathematical Engineering and Advanced Computing, Zhengzhou, 450001, Henan, China
* Haodong Jiang, Henan Key Laboratory of Network Cryptography Technology, Zhengzhou, 450001, Henan, China
* Zhi Ma, Henan Key Laboratory of Network Cryptography Technology, Zhengzhou, 450001, Henan, China
### Abstract
> Key encapsulation mechanism (KEM) variants of the Fujisaki-Okamoto (FO) transformation (TCC 2017) that turn a weakly-secure public-key encryption (PKE) into an IND-CCA-secure KEM, were widely used among the KEM submissions to the NIST Post-Quantum Cryptography Standardization Project. Under the standard CPA security assumptions, i.e., OW-CPA and IND-CPA, the security of these variants in the quantum random oracle model (QROM) has been proved by black-box reductions, e.g., Jiang et al. (CRYPTO 2018), and by non-black-box reductions (EUROCRYPT 2020). The non-black-box reductions (EUROCRYPT 2020) have a liner security loss, but can only apply to specific reversible adversaries with strict reversible implementation. On the contrary, the existing black-box reductions in the literature can apply to an arbitrary adversary with an arbitrary implementation, but suffer a quadratic security loss.
> 
> In this paper, for KEM variants of the FO transformation, we first show the tightness limits of the black-box reductions, and prove that a measurement-based reduction in the QROM from breaking the standard OW-CPA (or IND-CPA) security of the underlying PKE to breaking the IND-CCA security of the resulting KEM, will inevitably incur a quadratic loss of the security, where “measurement-based” means the reduction measures a hash query from the adversary and uses the measurement outcome to break the underlying security of PKE. In particular, most black-box reductions for these FO-like KEM variants are of this type, and our results suggest an explanation for the lack of progress in improving this reduction tightness in terms of the degree of security loss. Then, we further show that the quadratic loss is also unavoidable when one turns a search problem into a decision problem using the one-way to hiding technique in a black-box manner, which has been recognized as an essential technique to prove the security of cryptosystems involving quantum random oracles.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_17](https://doi.org/10.1007/978-3-030-92062-3_17)
## Redeeming Reset Indifferentiability and Applications to Post-quantum Security.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#redeeming-reset-indifferentiability-and-applications-to-post-quantum-security)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#redeeming-reset-indifferentiability-and-applications-to-post-quantum-security)
### Authors
* Mark Zhandry, NTT Research, Palo Alto, USA
* Mark Zhandry, Princeton University, Princeton, USA
### Abstract
> Indifferentiability is used to analyze the security of constructions of idealized objects, such as random oracles or ideal ciphers. Reset indifferentiability is a strengthening of plain indifferentiability which is applicable in far more scenarios, but has largely been abandoned due to significant impossibility results and a lack of positive results. Our main results are:
> 
> Under weak reset indifferentiability, ideal ciphers imply (fixed size) random oracles, and domain shrinkage is possible. We thus show reset indifferentiability is more useful than previously thought.
> 
> We lift our analysis to the quantum setting, showing that ideal ciphers imply random oracles under quantum indifferentiability.
> 
> Despite Shor’s algorithm, we observe that generic groups are still meaningful quantumly, showing that they are quantumly (reset) indifferentiable from ideal ciphers; combined with the above, cryptographic groups yield post-quantum symmetric key cryptography. In particular, we obtain a plausible post-quantum random oracle that is a subset-product followed by two modular reductions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_18](https://doi.org/10.1007/978-3-030-92062-3_18)
## Franchised Quantum Money.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#franchised-quantum-money)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#franchised-quantum-money)
### Authors
* Bhaskar Roberts, UC Berkeley, Berkeley, USA
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Sunnyvale, USA
### Abstract
> The construction of public key quantum money based on standard cryptographic assumptions is a longstanding open question. Here we introduce franchised quantum money, an alternative form of quantum money that is easier to construct. Franchised quantum money retains the features of a useful quantum money scheme, namely unforgeability and local verification: anyone can verify banknotes without communicating with the bank. In franchised quantum money, every user gets a unique secret verification key, and the scheme is secure against counterfeiting and sabotage, a new security notion that appears in the franchised model. Finally, we construct franchised quantum money and prove security assuming one-way functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_19](https://doi.org/10.1007/978-3-030-92062-3_19)
## Quantum Computationally Predicate-Binding Commitments with Application in Quantum Zero-Knowledge Arguments for NP.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#quantum-computationally-predicate-binding-commitments-with-application-in-quantum-zero-knowledge-arguments-for-np)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#quantum-computationally-predicate-binding-commitments-with-application-in-quantum-zero-knowledge-arguments-for-np)
### Authors
* Jun Yan, Jinan University, Guangzhou, China
### Abstract
> A quantum bit commitment scheme is to realize bit (rather than qubit) commitment by exploiting quantum communication and quantum computation. In this work, we study the binding property of the quantum string commitment scheme obtained by composing a generic quantum perfectly(resp. statistically)-hiding computationally-binding bit commitment scheme (which can be realized based on quantum-secure one-way permutations(resp. functions)) in parallel. We show that the resulting scheme satisfies a stronger quantum computational binding property, which we will call predicate-binding, than the trivial honest-binding. Intuitively and very roughly, the predicate-binding property guarantees that given any inconsistent predicate pair over a set of strings (i.e. no strings in this set can satisfy both predicates), if a (claimed) quantum commitment can be opened so that the revealed string satisfies one predicate with certainty, then the same commitment cannot be opened so that the revealed string satisfies the other predicate (except for a negligible probability).
> 
> As an application, we plug a generic quantum perfectly(resp. statistically)-hiding computationally-binding bit commitment scheme in Blum’s zero-knowledge protocol for the NP-complete language Hamiltonian Cycle. This will give rise to the first quantum perfect(resp. statistical) zero-knowledge argument system (with soundness error 1/2) for all NP languages based solely on quantum-secure one-way permutations(resp. functions). The quantum computational soundness of this system will follow immediately from the quantum computational predicate-binding property of commitments.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_20](https://doi.org/10.1007/978-3-030-92062-3_20)
## Quantum Encryption with Certified Deletion, Revisited: Public Key, Attribute-Based, and Classical Communication.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#quantum-encryption-with-certified-deletion-revisited-public-key-attribute-based-and-classical-communication)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#quantum-encryption-with-certified-deletion-revisited-public-key-attribute-based-and-classical-communication)
### Authors
* Taiga Hiroka, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Tomoyuki Morimae, PRESTO, JST, Saitama, Japan
* Ryo Nishimaki, NTT Corporation, Tokyo, Japan
* Takashi Yamakawa, NTT Corporation, Tokyo, Japan
### Abstract
> Broadbent and Islam (TCC ’20) proposed a quantum cryptographic primitive called quantum encryption with certified deletion. In this primitive, a receiver in possession of a quantum ciphertext can generate a classical certificate that the encrypted message has been deleted. Although their construction is information-theoretically secure, it is limited to the setting of one-time symmetric key encryption (SKE), where a sender and receiver have to share a common key in advance and the key can be used only once. Moreover, the sender has to generate a quantum state and send it to the receiver over a quantum channel in their construction. Deletion certificates are privately verifiable, which means a verification key for a certificate must be kept secret, in the definition by Broadbent and Islam. However, we can also consider public verifiability. In this work, we present various constructions of encryption with certified deletion.
> 
> Quantum communication case: We achieve (reusable-key) public key encryption (PKE) and attribute-based encryption (ABE) with certified deletion. Our PKE scheme with certified deletion is constructed assuming the existence of IND-CPA secure PKE, and our ABE scheme with certified deletion is constructed assuming the existence of indistinguishability obfuscation and one-way functions. These two schemes are privately verifiable.
> 
> Classical communication case: We also achieve interactive encryption with certified deletion that uses only classical communication. We give two schemes, a privately verifiable one and a publicly verifiable one. The former is constructed assuming the LWE assumption in the quantum random oracle model. The latter is constructed assuming the existence of one-shot signatures and extractable witness encryption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_21](https://doi.org/10.1007/978-3-030-92062-3_21)
## Tight Adaptive Reprogramming in the QROM.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#tight-adaptive-reprogramming-in-the-qrom)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#tight-adaptive-reprogramming-in-the-qrom)
### Authors
* Alex B. Grilo, Sorbonne Université, CNRS, LIP6, Paris, France
* Kathrin Hövelmanns, Ruhr-Universität Bochum, Bochum, Germany
* Kathrin Hövelmanns, Eindhoven University of Technology, Eindhoven, The Netherlands
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Christian Majenz, Technical University of Denmark, Lyngby, Denmark
* Christian Majenz, Centrum Wiskunde & Informatica and QuSoft, Amsterdam, The Netherlands
### Abstract
> The random oracle model (ROM) enjoys widespread popularity, mostly because it tends to allow for tight and conceptually simple proofs where provable security in the standard model is elusive or costly. While being the adequate replacement of the ROM in the post-quantum security setting, the quantum-accessible random oracle model (QROM) has thus far failed to provide these advantages in many settings. In this work, we focus on adaptive reprogrammability, a feature of the ROM enabling tight and simple proofs in many settings. We show that the straightforward quantum-accessible generalization of adaptive reprogramming is feasible by proving a bound on the adversarial advantage in distinguishing whether a random oracle has been reprogrammed or not. We show that our bound is tight by providing a matching attack. We go on to demonstrate that our technique recovers the mentioned advantages of the ROM in three QROM applications: 1) We give a tighter proof of security of the message compression routine as used by XMSS. 2) We show that the standard ROM proof of chosen-message security for Fiat-Shamir signatures can be lifted to the QROM, straightforwardly, achieving a tighter reduction than previously known. 3) We give the first QROM proof of security against fault injection and nonce attacks for the hedged Fiat-Shamir transform.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_22](https://doi.org/10.1007/978-3-030-92062-3_22)
## QCB: Efficient Quantum-Secure Authenticated Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#qcb-efficient-quantum-secure-authenticated-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#qcb-efficient-quantum-secure-authenticated-encryption)
### Authors
* Ritam Bhaumik, Inria, Paris, France
* André Chailloux, Inria, Paris, France
* Gaëtan Leurent, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Xavier Bonnetain, Institute for Quantum Computing, Department of Combinatorics and Optimization, University of Waterloo, Waterloo, Canada
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
* Yannick Seurin, ANSSI, Paris, France
### Abstract
> It was long thought that symmetric cryptography was only mildly affected by quantum attacks, and that doubling the key length was sufficient to restore security. However, recent works have shown that Simon’s quantum period finding algorithm breaks a large number of MAC and authenticated encryption algorithms when the adversary can query the MAC/encryption oracle with a quantum superposition of messages. In particular, the OCB authenticated encryption mode is broken in this setting, and no quantum-secure mode is known with the same efficiency (rate-one and parallelizable).
> 
> In this paper we generalize the previous attacks, show that a large class of OCB-like schemes is unsafe against superposition queries, and discuss the quantum security notions for authenticated encryption modes. We propose a new rate-one parallelizable mode named QCB inspired by TAE and OCB and prove its security against quantum superposition queries.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_23](https://doi.org/10.1007/978-3-030-92062-3_23)
