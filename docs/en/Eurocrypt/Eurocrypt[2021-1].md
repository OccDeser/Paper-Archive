# Eurocrypt[2021-1]
## Non-interactive Zero Knowledge from Sub-exponential DDH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#non-interactive-zero-knowledge-from-sub-exponential-ddh)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#non-interactive-zero-knowledge-from-sub-exponential-ddh)
### Authors
* Abhishek Jain, Johns Hopkins University, Baltimore, MD, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, MD, USA
### Abstract
> We provide the first constructions of non-interactive zero-knowledge and Zap arguments for NP based on the sub-exponential hardness of Decisional Diffie-Hellman against polynomial time adversaries (without use of groups with pairings).
> 
> Central to our results, and of independent interest, is a new notion of interactive trapdoor hashing protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_1](https://doi.org/10.1007/978-3-030-77870-5_1)
## On the (in)security of ROS.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#on-the-in-security-of-ros)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#on-the-in-security-of-ros)
### Authors
* Fabrice Benhamouda, Algorand Foundation, Singapore, Singapore
* Tancrède Lepoint, Google, Mountain View, USA
* Mariana Raykova, Google, Mountain View, USA
* Julian Loss, University of Maryland, College Park, USA
* Michele Orrù, UC Berkeley, Berkeley, USA
### Abstract
> We present an algorithm solving the ROS (Random inhomogeneities in a Overdetermined Solvable system of linear equations) problem mod p in polynomial time for \(\ell > \log p\) dimensions. Our algorithm can be combined with Wagner’s attack, and leads to a sub-exponential solution for any dimension \(\ell \) with best complexity known so far.
> 
> When concurrent executions are allowed, our algorithm leads to practical attacks against unforgeability of blind signature schemes such as Schnorr and Okamoto–Schnorr blind signatures, threshold signatures such as GJKR and the original version of FROST, multisignatures such as CoSI and the two-round version of MuSig, partially blind signatures such as Abe–Okamoto, and conditional blind signatures such as ZGP17. Schemes for e-cash and anonymous credentials (such as Anonymous Credentials Light) inspired from the above are also affected.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_2](https://doi.org/10.1007/978-3-030-77870-5_2)
## New Representations of the AES Key Schedule.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#new-representations-of-the-aes-key-schedule)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#new-representations-of-the-aes-key-schedule)
### Authors
* Gaëtan Leurent, Inria, Paris, France
* Clara Pernot, Inria, Paris, France
### Abstract
> In this paper we present a new representation of the AES key schedule, with some implications to the security of AES-based schemes. In particular, we show that the AES-128 key schedule can be split into four independent parallel computations operating on 32 bits chunks, up to linear transformation. Surprisingly, this property has not been described in the literature after more than 20 years of analysis of AES. We show two consequences of our new representation, improving previous cryptanalysis results of AES-based schemes.
> 
> First, we observe that iterating an odd number of key schedule rounds results in a function with short cycles. This explains an observation of Khairallah on mixFeed, a second-round candidate in the NIST lightweight competition. Our analysis actually shows that his forgery attack on mixFeed succeeds with probability 0.44 (with data complexity 220 GB), breaking the scheme in practice. The same observation also leads to a novel attack on ALE, another AES-based AEAD scheme.
> 
> Our new representation also gives efficient ways to combine information from the first subkeys and information from the last subkeys, in order to reconstruct the corresponding master keys. In particular we improve previous impossible differential attacks against AES-128.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_3](https://doi.org/10.1007/978-3-030-77870-5_3)
## Analysing the HPKE Standard.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#analysing-the-hpke-standard)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#analysing-the-hpke-standard)
### Authors
* Joël Alwen, Wickr, New York, USA
* Bruno Blanchet, Inria Paris, Paris, France
* Benjamin Lipp, Inria Paris, Paris, France
* Eduard Hauck, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
### Abstract
> The Hybrid Public Key Encryption (HPKE) scheme is an emerging standard currently under consideration by the Crypto Forum Research Group (CFRG) of the IETF as a candidate for formal approval. Of the four modes of HPKE, we analyse the authenticated mode \(\mathsf {HPKE}_\mathsf {Auth}\) in its single-shot encryption form as it contains what is, arguably, the most novel part of HPKE.
> 
> \(\mathsf {HPKE}_\mathsf {Auth}\)’s intended application domain is captured by a new primitive which we call Authenticated Public Key Encryption (APKE). We provide syntax and security definitions for APKE schemes, as well as for the related Authenticated Key Encapsulation Mechanisms (AKEMs). We prove security of the AKEM scheme \(\mathsf {DH}\hbox {-}\mathsf {AKEM}\) underlying \(\mathsf {HPKE}_\mathsf {Auth}\) based on the Gap Diffie-Hellman assumption and provide general AKEM/DEM composition theorems with which to argue about \(\mathsf {HPKE}_\mathsf {Auth}\)’s security. To this end, we also formally analyse \(\mathsf {HPKE}_\mathsf {Auth}\)’s key schedule and key derivation functions. To increase confidence in our results we use the automatic theorem proving tool CryptoVerif. All our bounds are quantitative and we discuss their practical implications for \(\mathsf {HPKE}_\mathsf {Auth}\).
> 
> As an independent contribution we propose the new framework of nominal groups that allows us to capture abstract syntactical and security properties of practical elliptic curves, including the Curve25519 and Curve448 based groups (which do not constitute cyclic groups).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_4](https://doi.org/10.1007/978-3-030-77870-5_4)
## Tightly-Secure Authenticated Key Exchange, Revisited.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#tightly-secure-authenticated-key-exchange-revisited)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#tightly-secure-authenticated-key-exchange-revisited)
### Authors
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
* Sven Schäge, Ruhr-Universität Bochum, Bochum, Germany
### Abstract
> We introduce new tightly-secure authenticated key exchange (AKE) protocols that are extremely efficient, yet have only a constant security loss and can be instantiated in the random oracle model both from the standard DDH assumption and a subgroup assumption over RSA groups. These protocols can be deployed with optimal parameters, independent of the number of users or sessions, without the need to compensate a security loss with increased parameters and thus decreased computational efficiency.
> 
> We use the standard “Single-Bit-Guess” AKE security (with forward secrecy and state corruption) requiring all challenge keys to be simultaneously pseudo-random. In contrast, most previous papers on tightly secure AKE protocols (Bader et al., TCC 2015; Gjøsteen and Jager, CRYPTO 2018; Liu et al., ASIACRYPT 2020) concentrated on a non-standard “Multi-Bit-Guess” AKE security which is known not to compose tightly with symmetric primitives to build a secure communication channel.
> 
> Our key technical contribution is a new generic approach to construct tightly-secure AKE protocols based on non-committing key encapsulation mechanisms. The resulting DDH-based protocols are considerably more efficient than all previous constructions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_5](https://doi.org/10.1007/978-3-030-77870-5_5)
## Aggregatable Distributed Key Generation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#aggregatable-distributed-key-generation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#aggregatable-distributed-key-generation)
### Authors
* Kobi Gurkan, cLabs, Ethereum Foundation, Berlin, Germany
* Philipp Jovanovic, University College London, London, UK
* Sarah Meiklejohn, University College London, London, UK
* Mary Maller, Ethereum Foundation, Berlin, Germany
* Gilad Stern, Hebrew University, Jerusalem, Israel
* Alin Tomescu, VMware Research, Jersey City, USA
### Abstract
> In this paper, we introduce a distributed key generation (DKG) protocol with aggregatable and publicly-verifiable transcripts. Compared with prior publicly-verifiable approaches, our DKG reduces the size of the final transcript and the time to verify it from \(\mathcal {O}(n^2)\) to \(\mathcal {O}(n \log {n})\), where n denotes the number of parties. As compared with prior non-publicly-verifiable approaches, our DKG leverages gossip rather than all-to-all communication to reduce verification and communication complexity. We also revisit existing DKG security definitions, which are quite strong, and propose new and natural relaxations. As a result, we can prove the security of our aggregatable DKG as well as that of several existing DKGs, including the popular Pedersen variant. We show that, under these new definitions, these existing DKGs can be used to yield secure threshold variants of popular cryptosystems such as El-Gamal encryption and BLS signatures. We also prove that our DKG can be securely combined with a new efficient verifiable unpredictable function (VUF), whose security we prove in the random oracle model. Finally, we experimentally evaluate our DKG and show that the per-party overheads scale linearly and are practical. For 64 parties, it takes 71 ms to share and 359 ms to verify the overall transcript, while for 8192 parties, it takes 8 s and 42.2 s respectively.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_6](https://doi.org/10.1007/978-3-030-77870-5_6)
## Decentralized Multi-authority ABE for DNFs from LWE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#decentralized-multi-authority-abe-for-dnfs-from-lwe)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#decentralized-multi-authority-abe-for-dnfs-from-lwe)
### Authors
* Pratish Datta, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, NTT Research, Sunnyvale, CA, 94085, USA
* Brent Waters, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Brent Waters, University of Texas at Austin, Austin, TX, 78712, USA
### Abstract
> We construct the first decentralized multi-authority attribute-based encryption (\(\mathsf {MA}\text {-}\mathsf {ABE}\)) scheme for a non-trivial class of access policies whose security is based (in the random oracle model) solely on the Learning With Errors (LWE) assumption. The supported access policies are ones described by \(\mathsf {DNF}\) formulas. All previous constructions of \(\mathsf {MA}\text {-}\mathsf {ABE}\) schemes supporting any non-trivial class of access policies were proven secure (in the random oracle model) assuming various assumptions on bilinear maps.
> 
> In our system, any party can become an authority and there is no requirement for any global coordination other than the creation of an initial set of common reference parameters. A party can simply act as a standard ABE authority by creating a public key and issuing private keys to different users that reflect their attributes. A user can encrypt data in terms of any \(\mathsf {DNF}\) formulas over attributes issued from any chosen set of authorities. Finally, our system does not require any central authority. In terms of efficiency, when instantiating the scheme with a global bound s on the size of access policies, the sizes of public keys, secret keys, and ciphertexts, all grow with s.
> 
> Technically, we develop new tools for building ciphertext-policy ABE (\(\mathsf {CP}\text {-}\mathsf {ABE}\)) schemes using LWE. Along the way, we construct the first provably secure \(\mathsf {CP}\text {-}\mathsf {ABE}\) scheme supporting access policies in \(\mathsf {NC}^1\) under the LWE assumption that avoids the generic universal-circuit-based key-policy to ciphertext-policy transformation. In particular, our construction relies on linear secret sharing schemes with new properties and in some sense is more similar to \(\mathsf {CP}\text {-}\mathsf {ABE}\) schemes that rely on bilinear maps. While our \(\mathsf {CP}\text {-}\mathsf {ABE}\) construction is not more efficient than existing ones, it is conceptually intriguing and further we show how to extend it to get the \(\mathsf {MA}\text {-}\mathsf {ABE}\) scheme described above.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_7](https://doi.org/10.1007/978-3-030-77870-5_7)
## Compact, Efficient and UC-Secure Isogeny-Based Oblivious Transfer.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#compact-efficient-and-uc-secure-isogeny-based-oblivious-transfer)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#compact-efficient-and-uc-secure-isogeny-based-oblivious-transfer)
### Authors
* Yi-Fu Lai, University of Auckland, Auckland, New Zealand
* Steven D. Galbraith, University of Auckland, Auckland, New Zealand
* Cyprien Delpech de Saint Guilhem, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> Oblivious transfer (OT) is an essential cryptographic tool that can serve as a building block for almost all secure multiparty functionalities. The strongest security notion against malicious adversaries is universal composability (UC-secure). An important goal is to have post-quantum OT protocols. One area of interest for post-quantum cryptography is isogeny-based crypto. Isogeny-based cryptography has some similarities to Diffie-Hellman, but lacks some algebraic properties that are needed for discrete-log-based OT protocols. Hence it is not always possible to directly adapt existing protocols to the isogeny setting.
> 
> We propose the first practical isogeny-based UC-secure oblivious transfer protocol in the presence of malicious adversaries. Our scheme uses the CSIDH framework and does not have an analogue in the Diffie-Hellman setting. The scheme consists of a constant number of isogeny computations. The underlying computational assumption is a problem that we call the computational reciprocal CSIDH problem, and that we prove polynomial-time equivalent to the computational CSIDH problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_8](https://doi.org/10.1007/978-3-030-77870-5_8)
## One-Way Functions and Malleability Oracles: Hidden Shift Attacks on Isogeny-Based Protocols.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#one-way-functions-and-malleability-oracles-hidden-shift-attacks-on-isogeny-based-protocols)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#one-way-functions-and-malleability-oracles-hidden-shift-attacks-on-isogeny-based-protocols)
### Authors
* Péter Kutas, University of Birmingham, Birmingham, UK
* Christophe Petit, University of Birmingham, Birmingham, UK
* Charlotte Weitkämper, University of Birmingham, Birmingham, UK
* Simon-Philipp Merz, Royal Holloway, University of London, London, UK
* Christophe Petit, Université libre de Bruxelles, Brussels, Belgium
### Abstract
> Supersingular isogeny Diffie-Hellman key exchange (SIDH) is a post-quantum protocol based on the presumed hardness of computing an isogeny between two supersingular elliptic curves given some additional torsion point information. Unlike other isogeny-based protocols, SIDH has been widely believed to be immune to subexponential quantum attacks because of the non-commutative structure of the endomorphism rings of supersingular curves.
> 
> We contradict this commonly believed misconception in this paper. More precisely, we highlight the existence of an abelian group action on the SIDH key space, and we show that for sufficiently unbalanced and overstretched SIDH parameters, this action can be efficiently computed (heuristically) using the torsion point information revealed in the protocol. This reduces the underlying hardness assumption to a hidden shift problem instance which can be solved in quantum subexponential time.
> 
> We formulate our attack in a new framework allowing the inversion of one-way functions in quantum subexponential time provided a malleability oracle with respect to some commutative group action. This framework unifies our new attack with earlier subexponential quantum attacks on isogeny-based protocols, and it may be of further interest for cryptanalysis.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_9](https://doi.org/10.1007/978-3-030-77870-5_9)
## Sieving for Twin Smooth Integers with Solutions to the Prouhet-Tarry-Escott Problem.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#sieving-for-twin-smooth-integers-with-solutions-to-the-prouhet-tarry-escott-problem)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#sieving-for-twin-smooth-integers-with-solutions-to-the-prouhet-tarry-escott-problem)
### Authors
* Craig Costello, Microsoft Research, Redmond, WA, USA
* Michael Naehrig, Microsoft Research, Redmond, WA, USA
* Michael Meyer, University of Applied Sciences Wiesbaden, Wiesbaden, Germany
* Michael Meyer, University of Würzburg, Würzburg, Germany
### Abstract
> We give a sieving algorithm for finding pairs of consecutive smooth numbers that utilizes solutions to the Prouhet-Tarry-Escott (PTE) problem. Any such solution induces two degree-n polynomials, a(x) and b(x), that differ by a constant integer C and completely split into linear factors in \(\mathbb {Z}[x]\). It follows that for any \(\ell \in \mathbb {Z}\) such that \(a(\ell ) \equiv b(\ell ) \equiv 0 \bmod {C}\), the two integers \(a(\ell )/C\) and \(b(\ell )/C\) differ by 1 and necessarily contain n factors of roughly the same size. For a fixed smoothness bound B, restricting the search to pairs of integers that are parameterized in this way increases the probability that they are B-smooth. Our algorithm combines a simple sieve with parametrizations given by a collection of solutions to the PTE problem.
> 
> The motivation for finding large twin smooth integers lies in their application to compact isogeny-based post-quantum protocols. The recent key exchange scheme B-SIDH and the recent digital signature scheme SQISign both require large primes that lie between two smooth integers; finding such a prime can be seen as a special case of finding twin smooth integers under the additional stipulation that their sum is a prime p.
> 
> When searching for cryptographic parameters with \(2^{240} \le p <2^{256}\), an implementation of our sieve found primes p where \(p+1\) and \(p-1\) are \(2^{15}\)-smooth; the smoothest prior parameters had a similar sized prime for which \(p-1\) and \(p+1\) were \(2^{19}\)-smooth. In targeting higher security levels, our sieve found a 376-bit prime lying between two \(2^{21}\)-smooth integers, a 384-bit prime lying between two \(2^{22}\)-smooth integers, and a 512-bit prime lying between two \(2^{28}\)-smooth integers. Our analysis shows that using previously known methods to find high-security instances subject to these smoothness bounds is computationally infeasible.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_10](https://doi.org/10.1007/978-3-030-77870-5_10)
## Delay Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#delay-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#delay-encryption)
### Authors
* Jeffrey Burdges, Web 3 Foundation, Zug, Switzerland
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
### Abstract
> We introduce a new primitive named Delay Encryption, and give an efficient instantiation based on isogenies of supersingular curves and pairings. Delay Encryption is related to Time-lock Puzzles and Verifiable Delay Functions, and can be roughly described as “time-lock identity based encryption”. It has several applications in distributed protocols, such as sealed bid Vickrey auctions and electronic voting.
> 
> We give an instantiation of Delay Encryption by modifying Boneh and Frankiln’s IBE scheme, where we replace the master secret key by a long chain of isogenies, as in the isogeny VDF of De Feo, Masson, Petit and Sanso. Similarly to the isogeny-based VDF, our Delay Encryption requires a trusted setup before parameters can be safely used; our trusted setup is identical to that of the VDF, thus the same parameters can be generated once and shared for many executions of both protocols, with possibly different delay parameters.
> 
> We also discuss several topics around delay protocols based on isogenies that were left untreated by De Feo et al., namely: distributed trusted setup, watermarking, and implementation issues.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_11](https://doi.org/10.1007/978-3-030-77870-5_11)
## The Nested Subset Differential Attack - A Practical Direct Attack Against LUOV Which Forges a Signature Within 210 Minutes.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#the-nested-subset-differential-attack-a-practical-direct-attack-against-luov-which-forges-a-signature-within-210-minutes)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#the-nested-subset-differential-attack-a-practical-direct-attack-against-luov-which-forges-a-signature-within-210-minutes)
### Authors
* Jintai Ding, Tsinghua University, Beijing, China
* Joshua Deaton, University of Cincinnati, Cincinnati, OH, USA
* Vishakha, University of Cincinnati, Cincinnati, OH, USA
* Bo-Yin Yang, Academia Sinica, Taipei, Taiwan
### Abstract
> In 2017, Ward Beullens et al. submitted Lifted Unbalanced Oil and Vinegar [3], which is a modification to the Unbalanced Oil and Vinegar Scheme by Patarin. Previously, Ding et al. proposed the Subfield Differential Attack [22] which prompted a change of parameters by the authors of LUOV for the second round of the NIST post quantum standardization competition [4].
> 
> In this paper we propose a modification to the Subfield Differential Attack called the Nested Subset Differential Attack which fully breaks half of the parameter sets put forward. We also show by experimentation that this attack is practically possible to do in under 210 min for the level I security parameters and not just a theoretical attack. The Nested Subset Differential attack is a large improvement of the Subfield differential attack which can be used in real world circumstances. Moreover, we will only use what is called the “lifted” structure of LUOV, and our attack can be thought as a development of solving “lifted” quadratic systems.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_12](https://doi.org/10.1007/978-3-030-77870-5_12)
## Improved Cryptanalysis of UOV and Rainbow.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#improved-cryptanalysis-of-uov-and-rainbow)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#improved-cryptanalysis-of-uov-and-rainbow)
### Authors
* Ward Beullens, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> The contributions of this paper are twofold. First, we simplify the description of the Unbalanced Oil and Vinegar scheme (UOV) and its Rainbow variant, which makes it easier to understand the scheme and the existing attacks. We hope that this will make UOV and Rainbow more approachable for cryptanalysts. Second, we give two new attacks against the UOV and Rainbow signature schemes; the intersection attack that applies to both UOV and Rainbow and the rectangular MinRank attack that applies only to Rainbow. Our attacks are more powerful than existing attacks. In particular, we estimate that compared to previously known attacks, our new attacks reduce the cost of a key recovery by a factor of \(2^{17}\), \(2^{53}\), and \(2^{73}\) for the parameter sets submitted to the second round of the NIST PQC standardization project targeting the security levels I, III, and V respectively. For the third round parameters, the cost is reduced by a factor of \(2^{20}\), \(2^{40}\), and \(2^{55}\) respectively. This means all these parameter sets fall short of the security requirements set out by NIST.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_13](https://doi.org/10.1007/978-3-030-77870-5_13)
## Cryptanalytic Applications of the Polynomial Method for Solving Multivariate Equation Systems over GF(2).
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#cryptanalytic-applications-of-the-polynomial-method-for-solving-multivariate-equation-systems-over-gf-2)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#cryptanalytic-applications-of-the-polynomial-method-for-solving-multivariate-equation-systems-over-gf-2)
### Authors
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Be’er Sheva, Israel
### Abstract
> At SODA 2017 Lokshtanov et al. presented the first worst-case algorithms with exponential speedup over exhaustive search for solving polynomial equation systems of degree d in n variables over finite fields. These algorithms were based on the polynomial method in circuit complexity which is a technique for proving circuit lower bounds that has recently been applied in algorithm design. Subsequent works further improved the asymptotic complexity of polynomial method-based algorithms for solving equations over the field \(\mathbb {F}_2\). However, the asymptotic complexity formulas of these algorithms hide significant low-order terms, and hence they outperform exhaustive search only for very large values of n.
> 
> In this paper, we devise a concretely efficient polynomial method-based algorithm for solving multivariate equation systems over \(\mathbb {F}_2\). We analyze our algorithm’s performance for solving random equation systems, and bound its complexity by about \(n^2 \cdot 2^{0.815n}\) bit operations for \(d = 2\) and \(n^2 \cdot 2^{\left( 1 - 1/2.7d\right) n}\) for any \(d \ge 2\).
> 
> We apply our algorithm in cryptanalysis of recently proposed instances of the Picnic signature scheme (an alternate third-round candidate in NIST’s post-quantum standardization project) that are based on the security of the LowMC block cipher. Consequently, we show that 2 out of 3 new instances do not achieve their claimed security level. As a secondary application, we also improve the best-known preimage attacks on several round-reduced variants of the Keccak hash function.
> 
> Our algorithm combines various techniques used in previous polynomial method-based algorithms with new optimizations, some of which exploit randomness assumptions about the system of equations. In its cryptanalytic application to Picnic, we demonstrate how to further optimize the algorithm for solving structured equation systems that are constructed from specific cryptosystems.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_14](https://doi.org/10.1007/978-3-030-77870-5_14)
## Round-Optimal Blind Signatures in the Plain Model from Classical and Quantum Standard Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#round-optimal-blind-signatures-in-the-plain-model-from-classical-and-quantum-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#round-optimal-blind-signatures-in-the-plain-model-from-classical-and-quantum-standard-assumptions)
### Authors
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### Abstract
> Blind signatures, introduced by Chaum (Crypto’82), allows a user to obtain a signature on a message without revealing the message itself to the signer. Thus far, all existing constructions of round-optimal blind signatures are known to require one of the following: a trusted setup, an interactive assumption, or complexity leveraging. This state-of-the-affair is somewhat justified by the few known impossibility results on constructions of round-optimal blind signatures in the plain model (i.e., without trusted setup) from standard assumptions. However, since all of these impossibility results only hold under some conditions, fully (dis)proving the existence of such round-optimal blind signatures has remained open.
> 
> In this work, we provide an affirmative answer to this problem and construct the first round-optimal blind signature scheme in the plain model from standard polynomial-time assumptions. Our construction is based on various standard cryptographic primitives and also on new primitives that we introduce in this work, all of which are instantiable from classical and post-quantum standard polynomial-time assumptions. The main building block of our scheme is a new primitive called a blind-signature-conforming zero-knowledge (ZK) argument system. The distinguishing feature is that the ZK property holds by using a quantum polynomial-time simulator against non-uniform classical polynomial-time adversaries. Syntactically one can view this as a delayed-input three-move ZK argument with a reusable first message, and we believe it would be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_15](https://doi.org/10.1007/978-3-030-77870-5_15)
## Post-Quantum Multi-Party Computation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#post-quantum-multi-party-computation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#post-quantum-multi-party-computation)
### Authors
* Amit Agarwal, University of Illinois Urbana-Champaign, Urbana, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Urbana, USA
* James Bartusek, UC Berkeley, Berkeley, USA
* Vipul Goyal, NTT Research and CMU, Pittsburgh, USA
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> We initiate the study of multi-party computation for classical functionalities in the plain model, with security against malicious quantum adversaries. We observe that existing techniques readily give a polynomial-round protocol, but our main result is a construction of constant-round post-quantum multi-party computation. We assume mildly super-polynomial quantum hardness of learning with errors (LWE), and quantum polynomial hardness of an LWE-based circular security assumption. Along the way, we develop the following cryptographic primitives that may be of independent interest:
> 
> A spooky encryption scheme for relations computable by quantum circuits, from the quantum hardness of (a circular variant of) the LWE problem. This immediately yields the first quantum multi-key fully-homomorphic encryption scheme with classical keys.
> 
> A constant-round post-quantum non-malleable commitment scheme, from the mildly super-polynomial quantum hardness of LWE.
> 
> To prove the security of our protocol, we develop a new straight-line non-black-box simulation technique against parallel sessions that does not clone the adversary’s state. This technique may also be relevant to the classical setting.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_16](https://doi.org/10.1007/978-3-030-77870-5_16)
## A 2n/2-Time Algorithm for $\sqrt{n}$-SVP and $\sqrt{n}$-Hermite SVP, and an Improved Time-Approximation Tradeoff for (H)SVP.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#a-2n-2-time-algorithm-for-sqrt-n-svp-and-sqrt-n-hermite-svp-and-an-improved-time-approximation-tradeoff-for-h-svp)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#a-2n-2-time-algorithm-for-sqrt-n-svp-and-sqrt-n-hermite-svp-and-an-improved-time-approximation-tradeoff-for-h-svp)
### Authors
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Zeyong Li, National University of Singapore, Singapore, Singapore
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
### Abstract
> We show a \(2^{n/2+o(n)}\)-time algorithm that, given as input a basis of a lattice \(\mathcal {L}\subset \mathbb {R}^n\), finds a (non-zero) vector in whose length is at most \(\widetilde{O}(\sqrt{n})\cdot \min \{\lambda _1(\mathcal {L}), \det (\mathcal {L})^{1/n}\}\), where \(\lambda _1(\mathcal {L})\) is the length of a shortest non-zero lattice vector and \(\det (\mathcal {L})\) is the lattice determinant. Minkowski showed that \(\lambda _1(\mathcal {L}) \le \sqrt{n} \det (\mathcal {L})^{1/n}\) and that there exist lattices with \(\lambda _1(\mathcal {L}) \ge \varOmega (\sqrt{n}) \cdot \det (\mathcal {L})^{1/n}\), so that our algorithm finds vectors that are as short as possible relative to the determinant (up to a polylogarithmic factor).
> 
> The main technical contribution behind this result is new analysis of (a simpler variant of) a \(2^{n/2 + o(n)}\)-time algorithm from [ADRS15], which was only previously known to solve less useful problems. To achieve this, we rely crucially on the “reverse Minkowski theorem” (conjectured by Dadush [DR16] and proven by [RS17]), which can be thought of as a partial converse to the fact that \(\lambda _1(\mathcal {L}) \le \sqrt{n} \det (\mathcal {L})^{1/n}\).
> 
> Previously, the fastest known algorithm for finding such a vector was the \(2^{.802n + o(n)}\)-time algorithm due to [LWXZ11], which actually found a non-zero lattice vector with length \(O(1) \cdot \lambda _1(\mathcal {L})\). Though we do not show how to find lattice vectors with this length in time \(2^{n/2+o(n)}\), we do show that our algorithm suffices for the most important application of such algorithms: basis reduction. In particular, we show a modified version of Gama and Nguyen’s slide-reduction algorithm [GN08], which can be combined with the algorithm above to improve the time-length tradeoff for shortest-vector algorithms in nearly all regimes—including the regimes relevant to cryptography.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_17](https://doi.org/10.1007/978-3-030-77870-5_17)
## New Lattice Two-Stage Sampling Technique and Its Applications to Functional Encryption - Stronger Security and Smaller Ciphertexts.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#new-lattice-two-stage-sampling-technique-and-its-applications-to-functional-encryption-stronger-security-and-smaller-ciphertexts)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#new-lattice-two-stage-sampling-technique-and-its-applications-to-functional-encryption-stronger-security-and-smaller-ciphertexts)
### Authors
* Qiqi Lai, School of Computer Science, Shaanxi Normal University, Xi’an, China
* Qiqi Lai, State Key Laboratory of Integrated Service Networks, Xidian University, Xi’an, China
* Feng-Hao Liu, Florida Atlantic University, Boca Raton, FL, USA
* Zhedong Wang, Florida Atlantic University, Boca Raton, FL, USA
### Abstract
> This work proposes a new lattice two-stage sampling technique, generalizing the prior two-stage sampling method of Gentry, Peikert, and Vaikuntanathan (STOC ’08). By using our new technique as a key building block, we can significantly improve security and efficiency of the current state of the arts of simulation-based functional encryption. Particularly, our functional encryption achieves \((Q,\mathsf {poly})\) simulation-based semi-adaptive security that allows arbitrary pre- and post-challenge key queries, and has succinct ciphertexts with only an additive O(Q) overhead.
> 
> Additionally, our two-stage sampling technique can derive new feasibilities of indistinguishability-based adaptively-secure \(\mathsf {IB} \)-\(\mathsf {FE} \) for inner products and semi-adaptively-secure \(\mathsf {AB} \)-\(\mathsf {FE} \) for inner products, breaking several technical limitations of the recent work by Abdalla, Catalano, Gay, and Ursu (Asiacrypt ’20).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_18](https://doi.org/10.1007/978-3-030-77870-5_18)
## On Bounded Distance Decoding with Predicate: Breaking the "Lattice Barrier" for the Hidden Number Problem.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#on-bounded-distance-decoding-with-predicate-breaking-the-lattice-barrier-for-the-hidden-number-problem)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#on-bounded-distance-decoding-with-predicate-breaking-the-lattice-barrier-for-the-hidden-number-problem)
### Authors
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, London, UK
* Nadia Heninger, University of California, San Diego, USA
### Abstract
> Lattice-based algorithms in cryptanalysis often search for a target vector satisfying integer linear constraints as a shortest or closest vector in some lattice. In this work, we observe that these formulations may discard non-linear information from the underlying application that can be used to distinguish the target vector even when it is far from being uniquely close or short.
> 
> We formalize lattice problems augmented with a predicate distinguishing a target vector and give algorithms for solving instances of these problems. We apply our techniques to lattice-based approaches for solving the Hidden Number Problem, a popular technique for recovering secret DSA or ECDSA keys in side-channel attacks, and demonstrate that our algorithms succeed in recovering the signing key for instances that were previously believed to be unsolvable using lattice approaches. We carried out extensive experiments using our estimation and solving framework, which we also make available with this work.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_19](https://doi.org/10.1007/978-3-030-77870-5_19)
## On the Ideal Shortest Vector Problem over Random Rational Primes.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#on-the-ideal-shortest-vector-problem-over-random-rational-primes)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#on-the-ideal-shortest-vector-problem-over-random-rational-primes)
### Authors
* Yanbin Pan, Key Laboratory of Mathematics Mechanization, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, 100190, China
* Jun Xu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Nick Wadleigh, School of Computer Science, University of Oklahoma, Norman, OK, 73019, USA
* Qi Cheng, School of Computer Science, University of Oklahoma, Norman, OK, 73019, USA
### Abstract
> Any non-zero ideal in a number field can be factored into a product of prime ideals. In this paper we report a surprising connection between the complexity of the shortest vector problem (SVP) of prime ideals in number fields and their decomposition groups. When applying the result to number fields popular in lattice based cryptosystems, such as power-of-two cyclotomic fields, we show that a majority of rational primes lie under prime ideals admitting a polynomial time algorithm for SVP. Although the shortest vector problem of ideal lattices underpins the security of the Ring-LWE cryptosystem, this work does not break Ring-LWE, since the security reduction is from the worst case ideal SVP to the average case Ring-LWE, and it is one-way.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_20](https://doi.org/10.1007/978-3-030-77870-5_20)
## Efficient Bootstrapping for Approximate Homomorphic Encryption with Non-sparse Keys.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#efficient-bootstrapping-for-approximate-homomorphic-encryption-with-non-sparse-keys)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#efficient-bootstrapping-for-approximate-homomorphic-encryption-with-non-sparse-keys)
### Authors
* Jean-Philippe Bossuat, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Christian Mouchet, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Juan Troncoso-Pastoriza, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Jean-Pierre Hubaux, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
### Abstract
> We present a bootstrapping procedure for the full-RNS variant of the approximate homomorphic-encryption scheme of Cheon et al., CKKS (Asiacrypt 17, SAC 18). Compared to the previously proposed procedures (Eurocrypt 18 & 19, CT-RSA 20), our bootstrapping procedure is more precise, more efficient (in terms of CPU cost and number of consumed levels), and is more reliable and 128-bit-secure. Unlike the previous approaches, it does not require the use of sparse secret-keys. Therefore, to the best of our knowledge, this is the first procedure that enables a highly efficient and precise bootstrapping with a low probability of failure for parameters that are 128-bit-secure under the most recent attacks on sparse R-LWE secrets.
> 
> We achieve this efficiency and precision by introducing three novel contributions: (i) We propose a generic algorithm for homomorphic polynomial-evaluation that takes into account the approximate rescaling and is optimal in level consumption. (ii) We optimize the key-switch procedure and propose a new technique for linear transformations (double hoisting). (iii) We propose a systematic approach to parameterize the bootstrapping, including a precise way to assess its failure probability.
> 
> We implemented our improvements and bootstrapping procedure in the open-source Lattigo library. For example, bootstrapping a plaintext in \(\mathbb {C}^{32768}\) takes 18 s, has an output coefficient modulus of 505 bits, a mean precision of 19.1 bits, and a failure probability of \(2^{-15.58}\). Hence, we achieve 14.1\(\times \) improvement in bootstrapped throughput (plaintext-bit per second), with respect to the previous best results, and we have a failure probability 468\(\times \) smaller and ensure 128-bit security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_21](https://doi.org/10.1007/978-3-030-77870-5_21)
## High-Precision Bootstrapping of RNS-CKKS Homomorphic Encryption Using Optimal Minimax Polynomial Approximation and Inverse Sine Function.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#high-precision-bootstrapping-of-rns-ckks-homomorphic-encryption-using-optimal-minimax-polynomial-approximation-and-inverse-sine-function)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#high-precision-bootstrapping-of-rns-ckks-homomorphic-encryption-using-optimal-minimax-polynomial-approximation-and-inverse-sine-function)
### Authors
* Joon-Woo Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Republic of Korea
* Eunsang Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Republic of Korea
* Yongwoo Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Republic of Korea
* Jong-Seon No, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Republic of Korea
* Young-Sik Kim, Department of Information and Communication Engineering, Chosun University, Gwangju, Republic of Korea
### Abstract
> Approximate homomorphic encryption with the residue number system (RNS), called RNS-variant Cheon-Kim-Kim-Song (RNS-CKKS) scheme [12, 13], is a fully homomorphic encryption scheme that supports arithmetic operations for real or complex number data encrypted. Although the RNS-CKKS scheme is a fully homomorphic encryption scheme, most of the applications with the RNS-CKKS scheme use it as the only leveled homomorphic encryption scheme because of the lack of the practicality of the bootstrapping operation of the RNS-CKKS scheme. One of the crucial problems of the bootstrapping operation is its poor precision. While other basic homomorphic operations ensure sufficiently high precision for practical use, the bootstrapping operation only supports about 20-bit fixed-point precision at best, which is not high precision enough to be used for the reliable large-depth homomorphic computations until now.
> 
> In this paper, we improve the message precision in the bootstrapping operation of the RNS-CKKS scheme. Since the homomorphic modular reduction process is one of the most important steps in determining the precision of the bootstrapping, we focus on the homomorphic modular reduction process. Firstly, we propose a fast algorithm of obtaining the optimal minimax approximate polynomial of modular reduction function and the scaled sine/cosine function over the union of the approximation regions, called an improved multi-interval Remez algorithm. In fact, this algorithm derives the optimal minimax approximate polynomial of any continuous functions over any union of the finite number of intervals. Next, we propose the composite function method using the inverse sine function to reduce the difference between the scaling factor used in the bootstrapping and the default scaling factor. With these methods, we reduce the approximation error in the bootstrapping of the RNS-CKKS scheme by 1/1176–1/42 (5.4–10.2-bit precision improvement) for each parameter setting. While the bootstrapping without the composite function method has 27.2–30.3-bit precision at maximum, the bootstrapping with the composite function method has 32.6–40.5-bit precision.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_22](https://doi.org/10.1007/978-3-030-77870-5_22)
## On the Security of Homomorphic Encryption on Approximate Numbers.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#on-the-security-of-homomorphic-encryption-on-approximate-numbers)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#on-the-security-of-homomorphic-encryption-on-approximate-numbers)
### Authors
* Baiyu Li, University of California, San Diego, USA
* Daniele Micciancio, University of California, San Diego, USA
### Abstract
> We present passive attacks against CKKS, the homomorphic encryption scheme for arithmetic on approximate numbers presented at Asiacrypt 2017. The attack is both theoretically efficient (running in expected polynomial time) and very practical, leading to complete key recovery with high probability and very modest running times. We implemented and tested the attack against major open source homomorphic encryption libraries, including HEAAN, SEAL, HElib and PALISADE, and when computing several functions that often arise in applications of the CKKS scheme to machine learning on encrypted data, like mean and variance computations, and approximation of logistic and exponential functions using their Maclaurin series.
> 
> The attack shows that the traditional formulation of \(\textsf {IND}\hbox {-}\textsf {CPA}\) security (or indistinguishability against chosen plaintext attacks) achieved by CKKS does not adequately capture security against passive adversaries when applied to approximate encryption schemes, and that a different, stronger definition is required to evaluate the security of such schemes.
> 
> We provide a solid theoretical basis for the security evaluation of homomorphic encryption on approximate numbers (against passive attacks) by proposing new definitions, that naturally extend the traditional notion of \(\textsf {IND}\hbox {-}\textsf {CPA}\) security to the approximate computation setting. We propose both indistinguishability-based and simulation-based variants, as well as restricted versions of the definitions that limit the order and number of adversarial queries (as may be enforced by some applications). We prove implications and separations among different definitional variants, and discuss possible modifications to CKKS that may serve as a countermeasure to our attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_23](https://doi.org/10.1007/978-3-030-77870-5_23)
## The Rise of Paillier: Homomorphic Secret Sharing and Public-Key Silent OT.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#the-rise-of-paillier-homomorphic-secret-sharing-and-public-key-silent-ot)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#the-rise-of-paillier-homomorphic-secret-sharing-and-public-key-silent-ot)
### Authors
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
### Abstract
> We describe a simple method for solving the distributed discrete logarithm problem in Paillier groups, allowing two parties to locally convert multiplicative shares of a secret (in the exponent) into additive shares. Our algorithm is perfectly correct, unlike previous methods with an inverse polynomial error probability. We obtain the following applications and further results.
> 
> Homomorphic secret sharing. We construct homomorphic secret sharing for branching programs with negligible correctness error and supporting exponentially large plaintexts, with security based on the decisional composite residuosity (DCR) assumption.
> 
> Correlated pseudorandomness. Pseudorandom correlation functions (PCFs), recently introduced by Boyle et al. (FOCS 2020), allow two parties to obtain a practically unbounded quantity of correlated randomness, given a pair of short, correlated keys. We construct PCFs for the oblivious transfer (OT) and vector oblivious linear evaluation (VOLE) correlations, based on the quadratic residuosity (QR) or DCR assumptions, respectively. We also construct a pseudorandom correlation generator (for producing a bounded number of samples, all at once) for general degree-2 correlations including OLE, based on a combination of (DCR or QR) and the learning parity with noise assumptions.
> 
> Public-key silent OT/VOLE. We upgrade our PCF constructions to have a public-key setup, where after independently posting a public key, each party can locally derive its PCF key. This allows completely silent generation of an arbitrary amount of OTs or VOLEs, without any interaction beyond a PKI, based on QR, DCR, a CRS and a random oracle. The public-key setup is based on a novel non-interactive vector OLE protocol, which can be seen as a variant of the Bellare-Micali oblivious transfer protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_24](https://doi.org/10.1007/978-3-030-77870-5_24)
## Improved Linear Approximations to ARX Ciphers and Attacks Against ChaCha.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#improved-linear-approximations-to-arx-ciphers-and-attacks-against-chacha)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#improved-linear-approximations-to-arx-ciphers-and-attacks-against-chacha)
### Authors
* Murilo Coutinho, Research and Development Center for Communications Security (CEPESC), Rio de Janeiro, Brazil
* Tertuliano C. Souza Neto, Research and Development Center for Communications Security (CEPESC), Rio de Janeiro, Brazil
### Abstract
> In this paper, we present a new technique which can be used to find better linear approximations in ARX ciphers. Using this technique, we present the first explicitly derived linear approximations for 3 and 4 rounds of ChaCha and, as a consequence, it enables us to improve the recent attacks against ChaCha . Additionally, we present new differentials for 3 and 3.5 rounds of ChaCha that, when combined with the proposed technique, lead to further improvement in the complexity of the Differential-Linear attacks against ChaCha.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_25](https://doi.org/10.1007/978-3-030-77870-5_25)
## Rotational Cryptanalysis from a Differential-Linear Perspective - Practical Distinguishers for Round-Reduced FRIET, Xoodoo, and Alzette.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#rotational-cryptanalysis-from-a-differential-linear-perspective-practical-distinguishers-for-round-reduced-friet-xoodoo-and-alzette)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#rotational-cryptanalysis-from-a-differential-linear-perspective-practical-distinguishers-for-round-reduced-friet-xoodoo-and-alzette)
### Authors
* Yunwen Liu, College of Liberal Arts and Science, National University of Defense Technology, Changsha, China
* Chao Li, College of Liberal Arts and Science, National University of Defense Technology, Changsha, China
* Yunwen Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> The differential-linear attack, combining the power of the two most effective techniques for symmetric-key cryptanalysis, was proposed by Langford and Hellman at CRYPTO 1994. From the exact formula for evaluating the bias of a differential-linear distinguisher (JoC 2017), to the differential-linear connectivity table (DLCT) technique for dealing with the dependencies in the switch between the differential and linear parts (EUROCRYPT 2019), and to the improvements in the context of cryptanalysis of ARX primitives (CRYPTO 2020), we have seen significant development of the differential-linear attack during the last four years. In this work, we further extend this framework by replacing the differential part of the attack by rotational-xor differentials. Along the way, we establish the theoretical link between the rotational-xor differential and linear approximations, revealing that it is nontrivial to directly apply the closed formula for the bias of ordinary differential-linear attack to rotational differential-linear cryptanalysis. We then revisit the rotational cryptanalysis from the perspective of differential-linear cryptanalysis and generalize Morawiecki et al.’s technique for analyzing Keccak, which leads to a practical method for estimating the bias of a (rotational) differential-linear distinguisher in the special case where the output linear mask is a unit vector. Finally, we apply the rotational differential-linear technique to the permutations involved in FRIET, Xoodoo, Alzette, and SipHash. This gives significant improvements over existing cryptanalytic results, or offers explanations for previous experimental distinguishers without a theoretical foundation. To confirm the validity of our analysis, all distinguishers with practical complexities are verified experimentally.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_26](https://doi.org/10.1007/978-3-030-77870-5_26)
## Automatic Search of Meet-in-the-Middle Preimage Attacks on AES-like Hashing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#automatic-search-of-meet-in-the-middle-preimage-attacks-on-aes-like-hashing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#automatic-search-of-meet-in-the-middle-preimage-attacks-on-aes-like-hashing)
### Authors
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhenzhen Bao, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Jian Guo, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Zheng Li, Faculty of Information Technology, Beijing University of Technology, Beijing, China
* Zheng Li, Beijing Key Laboratory of Trusted Computing, Beijing University of Technology, Beijing, China
* Danping Shi, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, University of Chinese Academy of Sciences, Beijing, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Shandong, China
### Abstract
> The Meet-in-the-Middle (MITM) preimage attack is highly effective in breaking the preimage resistance of many hash functions, including but not limited to the full MD5, HAVAL, and Tiger, and reduced SHA-0/1/2. It was also shown to be a threat to hash functions built on block ciphers like AES by Sasaki in 2011. Recently, such attacks on AES hashing modes evolved from merely using the freedom of choosing the internal state to also exploiting the freedom of choosing the message state. However, detecting such attacks especially those evolved variants is difficult. In previous works, the search space of the configurations of such attacks is limited, such that manual analysis is practical, which results in sub-optimal solutions. In this paper, we remove artificial limitations in previous works, formulate the essential ideas of the construction of the attack in well-defined ways, and translate the problem of searching for the best attacks into optimization problems under constraints in Mixed-Integer-Linear-Programming (MILP) models. The MILP models capture a large solution space of valid attacks; and the objectives of the MILP models are attack configurations with the minimized computational complexity. With such MILP models and using the off-the-shelf solver, it is efficient to search for the best attacks exhaustively. As a result, we obtain the first attacks against the full (5-round) and an extended (5.5-round) version of Haraka-512 v2, and 8-round AES-128 hashing modes, as well as improved attacks covering more rounds of Haraka-256 v2 and other members of AES and Rijndael hashing modes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_27](https://doi.org/10.1007/978-3-030-77870-5_27)
## A Deeper Look at Machine Learning-Based Cryptanalysis.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#a-deeper-look-at-machine-learning-based-cryptanalysis)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#a-deeper-look-at-machine-learning-based-cryptanalysis)
### Authors
* Adrien Benamira, Nanyang Technological University, Singapore, Singapore
* David Gerault, Nanyang Technological University, Singapore, Singapore
* Thomas Peyrin, Nanyang Technological University, Singapore, Singapore
* Quan Quan Tan, Nanyang Technological University, Singapore, Singapore
* David Gerault, University of Surrey, Guildford, UK
### Abstract
> At CRYPTO’19, Gohr proposed a new cryptanalysis strategy based on the utilisation of machine learning algorithms. Using deep neural networks, he managed to build a neural based distinguisher that surprisingly surpassed state-of-the-art cryptanalysis efforts on one of the versions of the well studied NSA block cipher SPECK (this distinguisher could in turn be placed in a larger key recovery attack). While this work opens new possibilities for machine learning-aided cryptanalysis, it remains unclear how this distinguisher actually works and what information is the machine learning algorithm deducing. The attacker is left with a black-box that does not tell much about the nature of the possible weaknesses of the algorithm tested, while hope is thin as interpretability of deep neural networks is a well-known difficult task.
> 
> In this article, we propose a detailed analysis and thorough explanations of the inherent workings of this new neural distinguisher. First, we studied the classified sets and tried to find some patterns that could guide us to better understand Gohr’s results. We show with experiments that the neural distinguisher generally relies on the differential distribution on the ciphertext pairs, but also on the differential distribution in penultimate and antepenultimate rounds. In order to validate our findings, we construct a distinguisher for SPECK cipher based on pure cryptanalysis, without using any neural network, that achieves basically the same accuracy as Gohr’s neural distinguisher and with the same efficiency (therefore improving over previous non-neural based distinguishers).
> 
> Moreover, as another approach, we provide a machine learning-based distinguisher that strips down Gohr’s deep neural network to a bare minimum. We are able to remain very close to Gohr’s distinguishers’ accuracy using simple standard machine learning tools. In particular, we show that Gohr’s neural distinguisher is in fact inherently building a very good approximation of the Differential Distribution Table (DDT) of the cipher during the learning phase, and using that information to directly classify ciphertext pairs. This result allows a full interpretability of the distinguisher and represents on its own an interesting contribution towards interpretability of deep neural networks.
> 
> Finally, we propose some method to improve over Gohr’s work and possible new neural distinguishers settings. All our results are confirmed with experiments we have been conducted on SPECK block cipher (source code available online).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_28](https://doi.org/10.1007/978-3-030-77870-5_28)
