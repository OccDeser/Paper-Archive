# Eurocrypt 20-1
## Mathematics and Cryptography: A Marriage of Convenience? - Invited Talk.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#mathematics-and-cryptography-a-marriage-of-convenience-invited-talk) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#mathematics-and-cryptography-a-marriage-of-convenience-invited-talk)**
### 作者
* Alice Silverberg, Departments of Mathematics and Computer Science, University of California, Irvine, Irvine, CA, USA
### 摘要
> Mathematics and cryptography have a long history together, with the ups and downs inherent in any long relationship. Whether it is a marriage of convenience or a love match, their progeny have lives of their own and have had an impact on the world. This invited lecture will briefly recall some high points from the past, give speculation and encouragement for the future of this marriage, and give counseling on how to improve communication, resolve conflicts, and play well together, based on personal experience and lessons learned.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_1](https://doi.org/10.1007/978-3-030-45721-1_1)
## Optimal Broadcast Encryption from Pairings and LWE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#optimal-broadcast-encryption-from-pairings-and-lwe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#optimal-broadcast-encryption-from-pairings-and-lwe)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> Boneh, Waters and Zhandry (CRYPTO 2014) used multilinear maps to provide a solution to the long-standing problem of public-key broadcast encryption (BE) where all parameters in the system are small. In this work, we improve their result by providing a solution that uses only bilinear maps and Learning With Errors (LWE). Our scheme is fully collusion-resistant against any number of colluders, and can be generalized to an identity-based broadcast system with short parameters. Thus, we reclaim the problem of optimal broadcast encryption from the land of “Obfustopia”.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_2](https://doi.org/10.1007/978-3-030-45721-1_2)
## Private Information Retrieval with Sublinear Online Time.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#private-information-retrieval-with-sublinear-online-time) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#private-information-retrieval-with-sublinear-online-time)**
### 作者
* Henry Corrigan-Gibbs, Stanford University, Stanford, CA, USA
* Dmitry Kogan, Stanford University, Stanford, CA, USA
* Henry Corrigan-Gibbs, EFPL, Lausanne, Switzerland
* Henry Corrigan-Gibbs, MIT CSAIL, Cambridge, MA, USA
### 摘要
> We present the first protocols for private information retrieval that allow fast (sublinear-time) database lookups without increasing the server-side storage requirements. To achieve these efficiency goals, our protocols work in an offline/online model. In an offline phase, which takes place before the client has decided which database bit it wants to read, the client fetches a short string from the servers. In a subsequent online phase, the client can privately retrieve its desired bit of the database by making a second query to the servers. By pushing the bulk of the server-side computation into the offline phase (which is independent of the client’s query), our protocols allow the online phase to complete very quickly—in time sublinear in the size of the database. Our protocols can provide statistical security in the two-server setting and computational security in the single-server setting. Finally, we prove that, in this model, our protocols are optimal in terms of the trade-off they achieve between communication and running time.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_3](https://doi.org/10.1007/978-3-030-45721-1_3)
## Candidate iO from Homomorphic Encryption Schemes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#candidate-io-from-homomorphic-encryption-schemes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#candidate-io-from-homomorphic-encryption-schemes)**
### 作者
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Nico Döttling, CISPA Helmoltz Center for Information Security, Saarbrücken, Germany
* Sanjam Garg, UC Berkeley, Berkeley, USA
* Giulio Malavolta, UC Berkeley, Berkeley, USA
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> We propose a new approach to construct general-purpose indistinguishability obfuscation (iO). Our construction is obtained via a new intermediate primitive that we call split fully-homomorphic encryption (split FHE), which we show to be sufficient for constructing iO. Specifically, split FHE is FHE where decryption takes the following two-step syntactic form: (i) A secret decryption step uses the secret key and produces a hint which is (asymptotically) shorter than the length of the encrypted message, and (ii) a public decryption step that only requires the ciphertext and the previously generated hint (and not the entire secret key), and recovers the encrypted message. In terms of security, the hints for a set of ciphertexts should not allow one to violate semantic security for any other ciphertexts.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_4](https://doi.org/10.1007/978-3-030-45721-1_4)
## Indistinguishability Obfuscation Without Maps: Attacks and Fixes for Noisy Linear FE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#indistinguishability-obfuscation-without-maps-attacks-and-fixes-for-noisy-linear-fe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#indistinguishability-obfuscation-without-maps-attacks-and-fixes-for-noisy-linear-fe)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Alice Pellet-Mary, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> Candidates of Indistinguishability Obfuscation (\(\mathsf {iO}\)) can be categorized as “direct” or “bootstrapping based”. Direct constructions rely on high degree multilinear maps [28, 29] and provide heuristic guarantees, while bootstrapping based constructions [2, 7, 33, 36, 38, 39] rely, in the best case, on bilinear maps as well as new variants of the Learning With Errors (\(\mathsf {LWE}\)) assumption and pseudorandom generators. Recent times have seen exciting progress in the construction of indistinguishability obfuscation (\(\mathsf {iO}\)) from bilinear maps (along with other assumptions) [2, 7, 33, 38].

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_5](https://doi.org/10.1007/978-3-030-45721-1_5)
## Combiners for Functional Encryption, Unconditionally.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#combiners-for-functional-encryption-unconditionally) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#combiners-for-functional-encryption-unconditionally)**
### 作者
* Aayush Jain, UCLA, Los Angeles, CA, USA
* Nathan Manohar, UCLA, Los Angeles, CA, USA
* Amit Sahai, UCLA, Los Angeles, CA, USA
### 摘要
> Functional encryption (FE) combiners allow one to combine many candidates for a functional encryption scheme, possibly based on different computational assumptions, into another functional encryption candidate with the guarantee that the resulting candidate is secure as long as at least one of the original candidates is secure. The fundamental question in this area is whether FE combiners exist. There have been a series of works Ananth et al. (CRYPTO ’16), Ananth-Jain-Sahai (EUROCRYPT ’17), Ananth et al. (TCC ’19) on constructing FE combiners from various assumptions.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_6](https://doi.org/10.1007/978-3-030-45721-1_6)
## Impossibility Results for Lattice-Based Functional Encryption Schemes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#impossibility-results-for-lattice-based-functional-encryption-schemes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#impossibility-results-for-lattice-based-functional-encryption-schemes)**
### 作者
* Akın Ünal, ETH Zurich, Zürich, Switzerland
### 摘要
> Functional Encryption denotes a form of encryption where a master secret key-holder can control which functions a user can evaluate on encrypted data. Learning With Errors (LWE) (Regev, STOC’05) is known to be a useful cryptographic hardness assumption which implies strong primitives such as, for example, fully homomorphic encryption (Brakerski-Vaikuntanathan, FOCS’11) and lockable obfuscation (Goyal et al., Wichs et al., FOCS’17). Despite its stre ngth, however, there is just a limited number of functional encryption schemes which can be based on LWE. In fact, there are functional encryption schemes which can be achieved by using pairings but for which no secure instantiations from lattice-based assumptions are known: function-hiding inner product encryption (Lin, Baltico et al., CRYPTO’17) and compact quadratic functional encryption (Abdalla et al., CRYPTO’18). This raises the question whether there are some mathematical barriers which hinder us from realizing function-hiding and compact functional encryption schemes from lattice-based assumptions as LWE.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_7](https://doi.org/10.1007/978-3-030-45721-1_7)
## Mind the Composition: Birthday Bound Attacks on EWCDMD and SoKAC21.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#mind-the-composition-birthday-bound-attacks-on-ewcdmd-and-sokac21) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#mind-the-composition-birthday-bound-attacks-on-ewcdmd-and-sokac21)**
### 作者
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
### 摘要
> In an early version of CRYPTO’17, Mennink and Neves proposed EWCDMD, a dual of EWCDM, and showed n-bit security, where n is the block size of the underlying block cipher. In CRYPTO’19, Chen et al. proposed permutation based design SoKAC21 and showed 2n/3-bit security, where n is the input size of the underlying permutation. In this paper we show birthday bound attacks on EWCDMD and SoKAC21, invalidating their security claims. Both attacks exploit an inherent composition nature present in the constructions. Motivated by the above two attacks exploiting the composition nature, we consider some generic relevant composition based constructions of ideal primitives (possibly in the ideal permutation and random oracle model) and present birthday bound distinguishers for them. In particular, we demonstrate a birthday bound distinguisher against (1) a secret random permutation followed by a public random function and (2) composition of two secret random functions. Our distinguishers for SoKAC21 and EWCDMD are direct consequences of (1) and (2) respectively.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_8](https://doi.org/10.1007/978-3-030-45721-1_8)
## Improving Key-Recovery in Linear Attacks: Application to 28-Round PRESENT.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#improving-key-recovery-in-linear-attacks-application-to-28-round-present) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#improving-key-recovery-in-linear-attacks-application-to-28-round-present)**
### 作者
* Antonio Flórez-Gutiérrez, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
### 摘要
> Linear cryptanalysis is one of the most important tools in use for the security evaluation of symmetric primitives. Many improvements and refinements have been published since its introduction, and many applications on different ciphers have been found. Among these upgrades, Collard et al. proposed in 2007 an acceleration of the key-recovery part of Algorithm 2 for last-round attacks based on the FFT.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_9](https://doi.org/10.1007/978-3-030-45721-1_9)
## New Slide Attacks on Almost Self-similar Ciphers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#new-slide-attacks-on-almost-self-similar-ciphers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#new-slide-attacks-on-almost-self-similar-ciphers)**
### 作者
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat-Gan, Israel
* Noam Lasry, Department of Mathematics, Bar-Ilan University, Ramat-Gan, Israel
* Adi Shamir, Faculty of Mathematics and Computer Science, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> The slide attack is a powerful cryptanalytic tool which can break iterated block ciphers with a complexity that does not depend on their number of rounds. However, it requires complete self similarity in the sense that all the rounds must be identical. While this can be the case in Feistel structures, this rarely happens in SP networks since the last round must end with an additional post-whitening subkey. In addition, in many SP networks the final round has additional asymmetries – for example, in AES the last round omits the MixColumns operation. Such asymmetry in the last round can make it difficult to utilize most of the advanced tools which were developed for slide attacks, such as deriving from one slid pair additional slid pairs by repeatedly re-encrypting their ciphertexts. Consequently, almost all the successful applications of slide attacks against real cryptosystems (e.g., FF3, GOST, SHACAL-1) had targeted Feistel structures rather than SP networks.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_10](https://doi.org/10.1007/978-3-030-45721-1_10)
## The Retracing Boomerang Attack.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#the-retracing-boomerang-attack) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#the-retracing-boomerang-attack)**
### 作者
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Eyal Ronen, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Eyal Ronen, COSIC, KU Leuven, Heverlee, Belgium
* Adi Shamir, Faculty of Mathematics and Computer Science, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> Boomerang attacks are extensions of differential attacks, that make it possible to combine two unrelated differential properties of the first and second part of a cryptosystem with probabilities p and q into a new differential-like property of the whole cryptosystem with probability \(p^2q^2\) (since each one of the properties has to be satisfied twice). In this paper we describe a new version of boomerang attacks which uses the counterintuitive idea of throwing out most of the data in order to force equalities between certain values on the ciphertext side. In certain cases, this creates a correlation between the four probabilistic events, which increases the probability of the combined property to \(p^2q\) and increases the signal to noise ratio of the resultant distinguisher. We call this variant a retracing boomerang attack since we make sure that the boomerang we throw follows the same path on its forward and backward directions. To demonstrate the power of the new technique, we apply it to the case of 5-round AES. This version of AES was repeatedly attacked by a large variety of techniques, but for twenty years its complexity had remained stuck at \(2^{32}\). At Crypto’18 it was finally reduced to \(2^{24}\) (for full key recovery), and with our new technique we can further reduce the complexity of full key recovery to the surprisingly low value of \(2^{16.5}\) (i.e., only 90, 000 encryption/decryption operations are required for a full key recovery on half the rounds of AES).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_11](https://doi.org/10.1007/978-3-030-45721-1_11)
## Extracting Randomness from Extractor-Dependent Sources.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#extracting-randomness-from-extractor-dependent-sources) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#extracting-randomness-from-extractor-dependent-sources)**
### 作者
* Yevgeniy Dodis, NYU, New York, USA
* Vinod Vaikuntanathan, MIT, Cambridge, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research Inc., East Palo Altos, USA
### 摘要
> We revisit the well-studied problem of extracting nearly uniform randomness from an arbitrary source of sufficient min-entropy. Strong seeded extractors solve this problem by relying on a public random seed, which is unknown to the source. Here, we consider a setting where the seed is reused over time and the source may depend on prior calls to the extractor with the same seed. Can we still extract nearly uniform randomness?

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_12](https://doi.org/10.1007/978-3-030-45721-1_12)
## How to Extract Useful Randomness from Unreliable Sources.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#how-to-extract-useful-randomness-from-unreliable-sources) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#how-to-extract-useful-randomness-from-unreliable-sources)**
### 作者
* Luisa Siniscalchi, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
* João Ribeiro, Imperial College London, London, UK
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Ivan Visconti, University of Salerno, Fisciano, Italy
### 摘要
> For more than 30 years, cryptographers have been looking for public sources of uniform randomness in order to use them as a set-up to run appealing cryptographic protocols without relying on trusted third parties. Unfortunately, nowadays it is fair to assess that assuming the existence of physical phenomena producing public uniform randomness is far from reality.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_13](https://doi.org/10.1007/978-3-030-45721-1_13)
## Low Error Efficient Computational Extractors in the CRS Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#low-error-efficient-computational-extractors-in-the-crs-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#low-error-efficient-computational-extractors-in-the-crs-model)**
### 作者
* Ankit Garg, Microsoft Research India, Bangalore, India
* Yael Tauman Kalai, Microsoft Research New England, Cambridge, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, IL, USA
### 摘要
> In recent years, there has been exciting progress on building two-source extractors for sources with low min-entropy. Unfortunately, all known explicit constructions of two-source extractors in the low entropy regime suffer from non-negligible error, and building such extractors with negligible error remains an open problem. We investigate this problem in the computational setting, and obtain the following results.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_14](https://doi.org/10.1007/978-3-030-45721-1_14)
## Tight Time-Space Lower Bounds for Finding Multiple Collision Pairs and Their Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#tight-time-space-lower-bounds-for-finding-multiple-collision-pairs-and-their-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#tight-time-space-lower-bounds-for-finding-multiple-collision-pairs-and-their-applications)**
### 作者
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beer Sheva, Israel
### 摘要
> We consider a collision search problem (CSP), where given a parameter C, the goal is to find C collision pairs in a random function \(f:[N] \rightarrow [N]\) (where \([N] = \{0,1,\ldots ,N-1\})\) using S bits of memory. Algorithms for CSP have numerous cryptanalytic applications such as space-efficient attacks on double and triple encryption. The best known algorithm for CSP is parallel collision search (PCS) published by van Oorschot and Wiener, which achieves the time-space tradeoff \(T^2 \cdot S = \tilde{O}(C^2 \cdot N)\).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_15](https://doi.org/10.1007/978-3-030-45721-1_15)
## Tight Security Bounds for Double-Block Hash-then-Sum MACs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#tight-security-bounds-for-double-block-hash-then-sum-macs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#tight-security-bounds-for-double-block-hash-then-sum-macs)**
### 作者
* Seongkwang Kim, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
### 摘要
> In this work, we study the security of deterministic MAC constructions with a double-block internal state, captured by the double-block hash-then-sum (\(\mathsf {DbHtS}\)) paradigm. Most \(\mathsf {DbHtS}\) constructions, including \(\mathsf {PolyMAC}\), \(\mathsf {SUM\text {-}ECBC}\), \(\mathsf {PMAC\text {-}Plus}\), \(\mathsf {3kf9}\) and \(\mathsf {LightMAC\text {-}Plus}\), have been proved to be pseudorandom up to \(2^{\frac{2n}{3}}\) queries when they are instantiated with an n-bit block cipher, while the best known generic attacks require \(2^{\frac{3n}{4}}\) queries.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_16](https://doi.org/10.1007/978-3-030-45721-1_16)
## Modeling for Three-Subset Division Property Without Unknown Subset - Improved Cube Attacks Against Trivium and Grain-128AEAD.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#modeling-for-three-subset-division-property-without-unknown-subset-improved-cube-attacks-against-trivium-and-grain-128aead) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#modeling-for-three-subset-division-property-without-unknown-subset-improved-cube-attacks-against-trivium-and-grain-128aead)**
### 作者
* Yonglin Hao, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Gregor Leander, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Willi Meier, FHNW, Windisch, Switzerland
* Yosuke Todo, NTT Secure Platform Laboratories, Tokyo, 180-8585, Japan
* Qingju Wang, SnT, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### 摘要
> A division property is a generic tool to search for integral distinguishers, and automatic tools such as MILP or SAT/SMT allow us to evaluate the propagation efficiently. In the application to stream ciphers, it enables us to estimate the security of cube attacks theoretically, and it leads to the best key-recovery attacks against well-known stream ciphers. However, it was reported that some of the key-recovery attacks based on the division property degenerate to distinguishing attacks due to the inaccuracy of the division property. Three-subset division property (without unknown subset) is a promising method to solve this inaccuracy problem, and a new algorithm using automatic tools for the three-subset division property was recently proposed at Asiacrypt2019. In this paper, we first show that this state-of-the-art algorithm is not always efficient and we cannot improve the existing key-recovery attacks. Then, we focus on the feature of the three-subset division property without unknown subset and propose another new efficient algorithm using automatic tools. Our algorithm is more efficient than existing algorithms, and it can improve existing key-recovery attacks. In the application to Trivium, we show a 841-round key-recovery attack. We also show that a 855-round key-recovery attack, which was proposed at CRYPTO2018, has a critical flaw and does not work. As a result, our 841-round attack becomes the best key-recovery attack. In the application to Grain-128AEAD, we show that the known 184-round key-recovery attack degenerates to distinguishing attacks. Then, the distinguishing attacks are improved up to 189 rounds, and we also show the best key-recovery attack against 190 rounds.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_17](https://doi.org/10.1007/978-3-030-45721-1_17)
## Blackbox Secret Sharing Revisited: A Coding-Theoretic Approach with Application to Expansionless Near-Threshold Schemes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#blackbox-secret-sharing-revisited-a-coding-theoretic-approach-with-application-to-expansionless-near-threshold-schemes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#blackbox-secret-sharing-revisited-a-coding-theoretic-approach-with-application-to-expansionless-near-threshold-schemes)**
### 作者
* Ronald Cramer, CWI Amsterdam, Amsterdam, The Netherlands
* Ronald Cramer, Leiden University, Leiden, The Netherlands
* Chaoping Xing, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> A blackbox secret sharing (BBSS) scheme works in exactly the same way for all finite Abelian groups G; it can be instantiated for any such group G and only black-box access to its group operations and to random group elements is required. A secret is a single group element and each of the n players’ shares is a vector of such elements. Share-computation and secret-reconstruction is by integer linear combinations. These do not depend on G, and neither do the privacy and reconstruction parameters t, r. This classical, fundamental primitive was introduced by Desmedt and Frankel (CRYPTO 1989) in their context of “threshold cryptography.” The expansion factor is the total number of group elements in a full sharing divided by n. For threshold BBSS with t-privacy (\(1\le t \le n-1\)), \(t+1\)-reconstruction and arbitrary n, constructions with minimal expansion \(O(\log n)\) exist (CRYPTO 2002, 2005).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_18](https://doi.org/10.1007/978-3-030-45721-1_18)
## Evolving Ramp Secret Sharing with a Small Gap.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#evolving-ramp-secret-sharing-with-a-small-gap) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#evolving-ramp-secret-sharing-with-a-small-gap)**
### 作者
* Amos Beimel, Department of Computer Science, Ben Gurion University, Beer Sheva, Israel
* Hussien Othman, Department of Computer Science, Ben Gurion University, Beer Sheva, Israel
### 摘要
> Evolving secret-sharing schemes, introduced by Komargodski, Naor, and Yogev (TCC 2016b), are secret-sharing schemes in which there is no a-priory upper bound on the number of parties that will participate. The parties arrive one by one and when a party arrives the dealer gives it a share; the dealer cannot update this share when other parties arrive. Motivated by the fact that when the number of parties is known, ramp secret-sharing schemes are more efficient than threshold secret-sharing schemes, we study evolving ramp secret-sharing schemes. Specifically, we study evolving (b(j), g(j))-ramp secret-sharing schemes, where \(g,b: \mathbb {N}\rightarrow \mathbb {N}\) are non-decreasing functions. In such schemes, any set of parties that for some j contains g(j) parties from the first parties that arrive can reconstruct the secret, and any set such that for every j contains less than b(j) parties from the first j parties that arrive cannot learn any information about the secret.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_19](https://doi.org/10.1007/978-3-030-45721-1_19)
## Lower Bounds for Leakage-Resilient Secret Sharing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#lower-bounds-for-leakage-resilient-secret-sharing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#lower-bounds-for-leakage-resilient-secret-sharing)**
### 作者
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
### 摘要
> Threshold secret sharing allows a dealer to split a secret into n shares such that any authorized subset of cardinality at least t of those shares efficiently reveals the secret, while at the same time any unauthorized subset of cardinality less than t contains no information about the secret. Leakage-resilience additionally requires that the secret remains hidden even if one is given a bounded amount of additional leakage from every share.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_20](https://doi.org/10.1007/978-3-030-45721-1_20)
## Friet: An Authenticated Encryption Scheme with Built-in Fault Detection.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#friet-an-authenticated-encryption-scheme-with-built-in-fault-detection) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#friet-an-authenticated-encryption-scheme-with-built-in-fault-detection)**
### 作者
* Thierry Simon, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Lejla Batina, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Joan Daemen, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Vincent Grosso, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Pedro Maat Costa Massolino, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Kostas Papagiannopoulos, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Niels Samwel, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Vincent Grosso, CNRS/Univ. Lyon, Laboratoire Hubert Curien, UMR 5516, Saint-Etienne, France
* Francesco Regazzoni, ALaRI, University of Lugano, Lugano, Switzerland
* Thierry Simon, STMicroelectronics Diegem, Diegem, Belgium
* Kostas Papagiannopoulos, NXP Semiconductors Hamburg, Hamburg, Germany
### 摘要
> In this work we present a duplex-based authenticated encryption scheme \(\textsc {Friet}\) based on a new permutation called \(\textsc {Friet-P}\). We designed \(\textsc {Friet-P}\) with a novel approach for cryptographic permutations and block ciphers that takes fault-attack resistance into account and that we introduce in this paper.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_21](https://doi.org/10.1007/978-3-030-45721-1_21)
## Fault Template Attacks on Block Ciphers Exploiting Fault Propagation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#fault-template-attacks-on-block-ciphers-exploiting-fault-propagation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#fault-template-attacks-on-block-ciphers-exploiting-fault-propagation)**
### 作者
* Sayandeep Saha, Department of Computer Science and Engineering, Indian Institute of Technology, Kharagpur, Kharagpur, India
* Arnab Bag, Department of Computer Science and Engineering, Indian Institute of Technology, Kharagpur, Kharagpur, India
* Debapriya Basu Roy, Department of Computer Science and Engineering, Indian Institute of Technology, Kharagpur, Kharagpur, India
* Sikhar Patranabis, Department of Computer Science and Engineering, Indian Institute of Technology, Kharagpur, Kharagpur, India
* Debdeep Mukhopadhyay, Department of Computer Science and Engineering, Indian Institute of Technology, Kharagpur, Kharagpur, India
* Sikhar Patranabis, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Debapriya Basu Roy, Technische Universität München, Munich, Germany
### 摘要
> Fault attacks (FA) are one of the potent practical threats to modern cryptographic implementations. Over the years the FA techniques have evolved, gradually moving towards the exploitation of device-centric properties of the faults. In this paper, we exploit the fact that activation and propagation of a fault through a given combinational circuit (i.e., observability of a fault) is data-dependent. Next, we show that this property of combinational circuits leads to powerful Fault Template Attacks (FTA), even for implementations having dedicated protections against both power and fault-based vulnerabilities. The attacks found in this work are applicable even if the fault injection is made at the middle rounds of a block cipher, which are out of reach for most of the other existing fault analysis strategies. Quite evidently, they also work for a known-plaintext scenario. Moreover, the middle round attacks are entirely blind in the sense that no access to the ciphertexts (correct/faulty) or plaintexts are required. The adversary is only assumed to have the power of repeating an unknown plaintext several times. Practical validation over a hardware implementation of SCA-FA protected PRESENT, and simulated evaluation on a public software implementation of protected AES prove the efficacy of the proposed attacks.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_22](https://doi.org/10.1007/978-3-030-45721-1_22)
## Security of Hedged Fiat-Shamir Signatures Under Fault Attacks.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#security-of-hedged-fiat-shamir-signatures-under-fault-attacks) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#security-of-hedged-fiat-shamir-signatures-under-fault-attacks)**
### 作者
* Diego F. Aranha, Department of Engineering, DIGIT, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Akira Takahashi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Greg Zaverucha, Microsoft Research, Redmond, USA
### 摘要
> Deterministic generation of per-signature randomness has been a widely accepted solution to mitigate the catastrophic risk of randomness failure in Fiat–Shamir type signature schemes. However, recent studies have practically demonstrated that such de-randomized schemes, including EdDSA, are vulnerable to differential fault attacks, which enable adversaries to recover the entire secret signing key, by artificially provoking randomness reuse or corrupting computation in other ways. In order to balance concerns of both randomness failures and the threat of fault injection, some signature designs are advocating a “hedged” derivation of the per-signature randomness, by hashing the secret key, message, and a nonce. Despite the growing popularity of the hedged paradigm in practical signature schemes, to the best of our knowledge, there has been no attempt to formally analyze the fault resilience of hedged signatures.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_23](https://doi.org/10.1007/978-3-030-45721-1_23)
## Transparent SNARKs from DARK Compilers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#transparent-snarks-from-dark-compilers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#transparent-snarks-from-dark-compilers)**
### 作者
* Benedikt Bünz, Stanford, Stanford, USA
* Ben Fisch, Stanford, Stanford, USA
* Alan Szepieniec, Nervos Foundation, Panama City, Panama
### 摘要
> We construct a new polynomial commitment scheme for univariate and multivariate polynomials over finite fields, with logarithmic size evaluation proofs and verification time, measured in the number of coefficients of the polynomial. The underlying technique is a Diophantine Argument of Knowledge (DARK), leveraging integer representations of polynomials and groups of unknown order. Security is shown from the strong RSA and the adaptive root assumptions. Moreover, the scheme does not require a trusted setup if instantiated with class groups. We apply this new cryptographic compiler to a restricted class of algebraic linear IOPs, which we call Polynomial IOPs, to obtain doubly-efficient public-coin interactive arguments of knowledge for any NP relation with succinct communication. With linear preprocessing, the online verifier’s work is logarithmic in the circuit complexity of the relation.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_24](https://doi.org/10.1007/978-3-030-45721-1_24)
## SPARKs: Succinct Parallelizable Arguments of Knowledge.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#sparks-succinct-parallelizable-arguments-of-knowledge) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#sparks-succinct-parallelizable-arguments-of-knowledge)**
### 作者
* Naomi Ephraim, Cornell Tech, New York, NY, 10044, USA
* Cody Freitag, Cornell Tech, New York, NY, 10044, USA
* Rafael Pass, Cornell Tech, New York, NY, 10044, USA
* Ilan Komargodski, NTT Research, Palo Alto, CA, 94303, USA
### 摘要
> We introduce the notion of a Succinct Parallelizable Argument of Knowledge (SPARK). This is an argument system with the following three properties for computing and proving a time T (non-deterministic) computation:

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_25](https://doi.org/10.1007/978-3-030-45721-1_25)
## Marlin: Preprocessing zkSNARKs with Universal and Updatable SRS.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#marlin-preprocessing-zksnarks-with-universal-and-updatable-srs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#marlin-preprocessing-zksnarks-with-universal-and-updatable-srs)**
### 作者
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Yuncong Hu, UC Berkeley, Berkeley, USA
* Pratyush Mishra, UC Berkeley, Berkeley, USA
* Noah Vesely, UC Berkeley, Berkeley, USA
* Nicholas Ward, UC Berkeley, Berkeley, USA
* Mary Maller, Ethereum Foundation, London, UK
### 摘要
> We present a methodology to construct preprocessing zkSNARKs where the structured reference string (SRS) is universal and updatable. This exploits a novel use of holography [Babai et al., STOC 1991], where fast verification is achieved provided the statement being checked is given in encoded form.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_26](https://doi.org/10.1007/978-3-030-45721-1_26)
## Fractal: Post-quantum and Transparent Recursive Proofs from Holography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2020-1.md#fractal-post-quantum-and-transparent-recursive-proofs-from-holography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-1.md#fractal-post-quantum-and-transparent-recursive-proofs-from-holography)**
### 作者
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Dev Ojha, UC Berkeley, Berkeley, USA
* Nicholas Spooner, UC Berkeley, Berkeley, USA
### 摘要
> We present a new methodology to efficiently realize recursive composition of succinct non-interactive arguments of knowledge (SNARKs). Prior to this work, the only known methodology relied on pairing-based SNARKs instantiated on cycles of pairing-friendly elliptic curves, an expensive algebraic object. Our methodology does not rely on any special algebraic objects and, moreover, achieves new desirable properties: it is post-quantum and it is transparent (the setup is public coin).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_27](https://doi.org/10.1007/978-3-030-45721-1_27)
