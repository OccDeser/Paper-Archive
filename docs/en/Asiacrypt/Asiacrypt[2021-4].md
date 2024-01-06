# Asiacrypt[2021-4]
## NTRU Fatigue: How Stretched is Overstretched?
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#ntru-fatigue-how-stretched-is-overstretched)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#ntru-fatigue-how-stretched-is-overstretched)
### Authors
* Léo Ducas, Cryptology Group, CWI, Amsterdam, The Netherlands
* Wessel van Woerden, Cryptology Group, CWI, Amsterdam, The Netherlands
### Abstract
> Until recently lattice reduction attacks on NTRU lattices were thought to behave similar as on (ring-)LWE lattices with the same parameters. However several works (Albrecht-Bai-Ducas 2016, Kirchner-Fouque 2017) showed a significant gap for large moduli q, the so-called overstretched regime of NTRU.
> 
> With the NTRU scheme being a finalist to the NIST PQC competition it is important to understand —both asymptotically and concretely— where the fatigue point lies exactly, i.e. at which q the overstretched regime begins. Unfortunately the analysis by Kirchner and Fouque is based on an impossibility argument, which only results in an asymptotic upper bound on the fatigue point. It also does not really explain how lattice reduction actually recovers secret-key information.
> 
> We propose a new analysis that asymptotically improves on that of Kirchner and Fouque, narrowing down the fatigue point for ternary NTRU from \(q \le n^{2.783+o(1)}\) to \(q=n^{2.484+o(1)}\), and finally explaining the mechanism behind this phenomenon. We push this analysis further to a concrete one, settling the fatigue point at \(q \approx 0.004 \cdot n^{2.484}\), and allowing precise hardness predictions in the overstretched regime. These predictions are backed by extensive experiments.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_1](https://doi.org/10.1007/978-3-030-92068-5_1)
## Faster Dual Lattice Attacks for Solving LWE with Applications to CRYSTALS.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#faster-dual-lattice-attacks-for-solving-lwe-with-applications-to-crystals)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#faster-dual-lattice-attacks-for-solving-lwe-with-applications-to-crystals)
### Authors
* Qian Guo, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
### Abstract
> Cryptosystems based on the learning with errors (LWE) problem are assigned a security level that relates to the cost of generic algorithms for solving the LWE problem. This includes at least the so-called primal and dual lattice attacks. In this paper, we present an improvement of the dual lattice attack using an idea that can be traced back to work by Bleichenbacher. We present an improved distinguisher that in combination with a guessing step shows a reduction in the overall complexity for the dual attack on all schemes. Our second contribution is a new two-step lattice reduction strategy that allows the new dual lattice attack to exploit two recent techniques in lattice reduction algorithms, i.e., the “dimensions for free” trick and the trick of producing many short vectors in one sieving. Since the incompatibility of these two tricks was believed to be the main reason that dual attacks are less interesting, our new reduction strategy allows more efficient dual approaches than primal attacks, for important cryptographic parameter sets.
> 
> We apply the proposed attacks on CRYSTALS-Kyber and CRYSTALS-Dilithium, two of the finalists in the NIST post-quantum cryptography project and present new lower complexity numbers, both classically and quantumly in the core-SVP model. Most importantly, for the proposed security parameters, our new dual attack with refined lattice reduction strategy greatly improves the state-of-the-art primal attack in the classical gate-count metric, i.e., the classical Random Access Machine (RAM) model, indicating that some parameters are really on the edge for their claimed security level. Specifically, the improvement factor can be as large as 15 bits for Kyber1024 with an extrapolation model (Albrecht et al. at Eurocrypt 2019). Also, we show that Kyber768 could be solved with classical gate complexity below its claimed security level. Last, we apply the new attack to the proposed parameters in a draft version of Homomorphic Encryption Standard (see https://homomorphicencryption.org) and obtain significant gains. For instance, we could solve a parameter set aiming for 192-bit security in \(2^{187.0}\) operations in the classical RAM model. Note that these parameters are deployed in well-known Fully Homomorphic Encryption libraries.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_2](https://doi.org/10.1007/978-3-030-92068-5_2)
## Lattice Sieving via Quantum Random Walks.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#lattice-sieving-via-quantum-random-walks)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#lattice-sieving-via-quantum-random-walks)
### Authors
* André Chailloux, Inria de Paris, EPI COSMIQ, Paris, France
* Johanna Loyer, Inria de Paris, EPI COSMIQ, Paris, France
### Abstract
> Lattice-based cryptography is one of the leading proposals for post-quantum cryptography. The Shortest Vector Problem (SVP) is arguably the most important problem for the cryptanalysis of lattice-based cryptography, and many lattice-based schemes have security claims based on its hardness. The best quantum algorithm for the SVP is due to Laarhoven [Laa16] and runs in (heuristic) time \(2^{0.2653d + o(d)}\). In this article, we present an improvement over Laarhoven’s result and present an algorithm that has a (heuristic) running time of \(2^{0.2570 d + o(d)}\) where d is the lattice dimension. We also present time-memory trade-offs where we quantify the amount of quantum memory and quantum random access memory of our algorithm. The core idea is to replace Grover’s algorithm used in [Laa16] in a key part of the sieving algorithm by a quantum random walk in which we add a layer of local sensitive filtering.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_3](https://doi.org/10.1007/978-3-030-92068-5_3)
## A Systematic Approach and Analysis of Key Mismatch Attacks on Lattice-Based NIST Candidate KEMs.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#a-systematic-approach-and-analysis-of-key-mismatch-attacks-on-lattice-based-nist-candidate-kems)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#a-systematic-approach-and-analysis-of-key-mismatch-attacks-on-lattice-based-nist-candidate-kems)
### Authors
* Yue Qin, China University of Geosciences, Wuhan, 430074, China
* Chi Cheng, China University of Geosciences, Wuhan, 430074, China
* Xiaohan Zhang, China University of Geosciences, Wuhan, 430074, China
* Yue Qin, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Chi Cheng, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Chi Cheng, Guangxi Key Laboratory of Trusted Software, Guilin University of Electronic Technology, Guilin, 541004, China
* Yanbin Pan, Key Laboratory of Mathematics Mechanization, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Lab of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yue Qin, Ding Lab, Yanqi Lake Beijing Institute of Mathematical Sciences and Applications, Beijing, China
* Jintai Ding, Ding Lab, Yanqi Lake Beijing Institute of Mathematical Sciences and Applications, Beijing, China
* Jintai Ding, Yau Mathematical Sciences Center, Tsinghua University, Beijing, China
### Abstract
> Research on key mismatch attacks against lattice-based KEMs is an important part of the cryptographic assessment of the ongoing NIST standardization of post-quantum cryptography. There have been a number of these attacks to date. However, a unified method to evaluate these KEMs’ resilience under key mismatch attacks is still missing. Since the key index of efficiency is the number of queries needed to successfully mount such an attack, in this paper, we propose and develop a systematic approach to find lower bounds on the minimum average number of queries needed for such attacks. Our basic idea is to transform the problem of finding the lower bound of queries into finding an optimal binary recovery tree (BRT), where the computations of the lower bounds become essentially the computations of a certain Shannon entropy. The optimal BRT approach also enables us to understand why, for some lattice-based NIST candidate KEMs, there is a big gap between the theoretical bounds and bounds observed in practical attacks, in terms of the number of queries needed. This further leads us to propose a generic improvement method for these existing attacks, which are confirmed by our experiments. Moreover, our proposed method could be directly used to improve the side-channel attacks against CCA-secure NIST candidate KEMs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_4](https://doi.org/10.1007/978-3-030-92068-5_4)
## Gladius: LWR Based Efficient Hybrid Public Key Encryption with Distributed Decryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#gladius-lwr-based-efficient-hybrid-public-key-encryption-with-distributed-decryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#gladius-lwr-based-efficient-hybrid-public-key-encryption-with-distributed-decryption)
### Authors
* Kelong Cong, imec-COSIC, KU Leuven, Leuven, Belgium
* Daniele Cozzo, imec-COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, imec-COSIC, KU Leuven, Leuven, Belgium
* Varun Maram, ETH Zurich, Zurich, Switzerland
* Nigel P. Smart, University of Bristol, Bristol, UK
### Abstract
> Standard hybrid encryption schemes based on the KEM-DEM framework are hard to implement efficiently in a distributed manner whilst maintaining the CCA security property of the scheme. This is because the DEM needs to be decrypted under the key encapsulated by the KEM, before the whole ciphertext is declared valid. In this paper we present a new variant of the KEM-DEM framework, closely related to Tag-KEMs, which sidesteps this issue. We then present a post-quantum KEM for this framework based on Learning-with-Rounding, which is designed specifically to have fast distributed decryption. Our combined construction of a hybrid encryption scheme with Learning-with-Rounding based KEM, called Gladius, is closely related to the NIST Round 3 candidate called Saber. Finally, we give a prototype distributed implementation that achieves a decapsulation time of 4.99 s for three parties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_5](https://doi.org/10.1007/978-3-030-92068-5_5)
## Lattice-Based Group Encryption with Full Dynamicity and Message Filtering Policy.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#lattice-based-group-encryption-with-full-dynamicity-and-message-filtering-policy)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#lattice-based-group-encryption-with-full-dynamicity-and-message-filtering-policy)
### Authors
* Jing Pan, State Key Laboratory of Integrated Service Networks (ISN), Xidian University, Xi’an, 710071, China
* Xiaofeng Chen, State Key Laboratory of Integrated Service Networks (ISN), Xidian University, Xi’an, 710071, China
* Jing Pan, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Xiaofeng Chen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Fangguo Zhang, School of Computer Science and Engineering, Sun Yat-sen University, Guangzhou, 510006, China
* Fangguo Zhang, Guangdong Province Key Laboratory of Information Security Technology, Guangzhou, 510006, China
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, 2522, Australia
### Abstract
> Group encryption (GE) is a fundamental privacy-preserving primitive analog of group signatures, which allows users to decrypt specific ciphertexts while hiding themselves within a crowd. Since its first birth, numerous constructions have been proposed, among which the schemes separately constructed by Libert et al. (Asiacrypt 2016) over lattices and by Nguyen et al. (PKC 2021) over coding theory are post-quantum secure. Though the last scheme, at the first time, achieved the full dynamicity (allowing group users to join or leave the group in their ease) and message filtering policy, which greatly improved the state-of-affairs of GE systems, its practical applications are still limited due to the rather complicated design, inefficiency and the weaker security (secure in the random oracle model). In return, the Libert et al.’s scheme possesses a solid security (secure in the standard model), but it lacks the previous functions and still suffers from inefficiency because of extremely using lattice trapdoors. In this work, we re-formalize the model and security definitions of fully dynamic group encryption (FDGE) that are essentially equivalent to but more succinct than Nguyen et al.’s; Then, we provide a generic and efficient zero-knowledge proof method for proving that a binary vector is non-zero over lattices, on which a proof for the Prohibitive message filtering policy in the lattice setting is first achieved (yet in a simple manner); Finally, by combining appropriate cryptographic materials and our presented zero-knowledge proofs, we achieve the first lattice-based FDGE scheme in a simpler manner, which needs no any lattice trapdoor and is proved secure in the standard model (assuming interaction during the proof phase), outweighing the existing post-quantum secure GE systems in terms of functions, efficiency and security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_6](https://doi.org/10.1007/978-3-030-92068-5_6)
## A New Variant of Unbalanced Oil and Vinegar Using Quotient Ring: QR-UOV.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#a-new-variant-of-unbalanced-oil-and-vinegar-using-quotient-ring-qr-uov)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#a-new-variant-of-unbalanced-oil-and-vinegar-using-quotient-ring-qr-uov)
### Authors
* Hiroki Furue, The University of Tokyo, Tokyo, Japan
* Tsuyoshi Takagi, The University of Tokyo, Tokyo, Japan
* Yasuhiko Ikematsu, Kyushu University, Fukuoka, Japan
* Yutaro Kiyomura, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> The unbalanced oil and vinegar signature scheme (UOV) is a multivariate signature scheme that has essentially not been broken for over 20 years. However, it requires the use of a large public key; thus, various methods have been proposed to reduce its size. In this paper, we propose a new variant of UOV with a public key represented by block matrices whose components correspond to an element of a quotient ring. We discuss how it affects the security of our proposed scheme whether or not the quotient ring is a field. Furthermore, we discuss their security against currently known and newly possible attacks and propose parameters for our scheme. We demonstrate that our proposed scheme can achieve a small public key size without significantly increasing the signature size compared with other UOV variants. For example, the public key size of our proposed scheme is 85.8 KB for NIST’s Post-Quantum Cryptography Project (security level 3), whereas that of compressed Rainbow is 252.3 KB, where Rainbow is a variant of UOV and is one of the third-round finalists of the NIST PQC project.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_7](https://doi.org/10.1007/978-3-030-92068-5_7)
## Shorter Lattice-Based Group Signatures via "Almost Free" Encryption and Other Optimizations.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#shorter-lattice-based-group-signatures-via-almost-free-encryption-and-other-optimizations)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#shorter-lattice-based-group-signatures-via-almost-free-encryption-and-other-optimizations)
### Authors
* Vadim Lyubashevsky, IBM Research Europe, Zurich, Switzerland
* Ngoc Khanh Nguyen, IBM Research Europe, Zurich, Switzerland
* Maxime Plancon, IBM Research Europe, Zurich, Switzerland
* Gregor Seiler, IBM Research Europe, Zurich, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Maxime Plancon, ETH Zurich, Zurich, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
### Abstract
> We present an improved lattice-based group signature scheme whose parameter sizes and running times are independent of the group size. The signature length in our scheme is around 200KB, which is approximately a 3X reduction over the previously most compact such scheme, based on any quantum-safe assumption, of del Pino et al. (CCS 2018). The improvement comes via several optimizations of some basic cryptographic components that make up group signature schemes, and we think that they will find other applications in privacy-based lattice cryptography.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_8](https://doi.org/10.1007/978-3-030-92068-5_8)
## Séta: Supersingular Encryption from Torsion Attacks.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#s-ta-supersingular-encryption-from-torsion-attacks)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#s-ta-supersingular-encryption-from-torsion-attacks)
### Authors
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
* Cyprien Delpech de Saint Guilhem, imec-COSIC, KU Leuven, Leuven, Belgium
* Tako Boris Fouotsa, Università Degli Studi Roma Tre, Rome, Italy
* Péter Kutas, Eötvös Loránd University, Budapest, Hungary
* Péter Kutas, University of Birmingham, Birmingham, UK
* Christophe Petit, University of Birmingham, Birmingham, UK
* Antonin Leroux, DGA, Paris, France
* Antonin Leroux, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Javier Silva, Universitat Pompeu Fabra, Barcelona, Spain
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, Talence, France
* Luca De Feo, INRIA, Rocquencourt, France
* Antonin Leroux, INRIA, Rocquencourt, France
* Benjamin Wesolowski, INRIA, IMB, Talence, France
### Abstract
> We present Séta (To be pronounced [ʃe:tɒ] meaning “walk” in Hungarian.), a new family of public-key encryption schemes with post-quantum security based on isogenies of supersingular elliptic curves. It is constructed from a new family of trapdoor one-way functions, where the inversion algorithm uses Petit’s so called torsion attacks on SIDH to compute an isogeny between supersingular elliptic curves given an endomorphism of the starting curve and images of torsion points. We prove the OW-CPA security of Séta and present an IND-CCA variant using the post-quantum OAEP transformation. Several variants for key generation are explored together with their impact on the selection of parameters, such as the base prime of the scheme. We furthermore formalise an “uber” isogeny assumption framework which aims to generalize computational isogeny problems encountered in schemes including SIDH, CSDIH, OSIDH and ours. Finally, we carefully select parameters to achieve a balance between security and run-times and present experimental results from our implementation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_9](https://doi.org/10.1007/978-3-030-92068-5_9)
## SHealS and HealS: Isogeny-Based PKEs from a Key Validation Method for SIDH.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#sheals-and-heals-isogeny-based-pkes-from-a-key-validation-method-for-sidh)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#sheals-and-heals-isogeny-based-pkes-from-a-key-validation-method-for-sidh)
### Authors
* Tako Boris Fouotsa, Università Degli Studi Roma Tre, Rome, Italy
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Christophe Petit, University of Birmingham’s School of Computer Science, Birmingham, UK
### Abstract
> In 2016, Galbraith et al. presented an adaptive attack on the SIDH key exchange protocol. In SIKE, one applies a variant of the Fujisaki-Okamoto transform to force Bob to reveal his encryption key to Alice, which Alice then uses to re-encrypt Bob’s ciphertext and verify its validity. Therefore, Bob can not reuse his encryption keys. There have been two other proposed countermeasures enabling static-static private keys: k-SIDH and its variant by Jao and Urbanik. These countermeasures are relatively expensive since they consist in running multiple parallel instances of SIDH.
> 
> In this paper, firstly, we propose a new countermeasure to the GPST adaptive attack on SIDH. Our countermeasure does not require key disclosure as in SIKE, nor multiple parallel instances as in k-SIDH. We translate our countermeasure into a key validation method for SIDH-type schmes. Secondly, we use our key validation to design HealSIDH, an efficient SIDH-type static-static key interactive exchange protocol. Thirdly, we derive a PKE scheme SHealS using HealSIDH. SHealS uses larger primes compared to SIKE, has larger keys and ciphertexts, but only 4 isogenies are computed in a full execution of the scheme, as opposed to 5 isogenies in SIKE. We prove that SHealS is IND-CPA secure relying on a new assumption we introduce and we conjecture its IND-CCA security. We suggest HealS, a variant of SHealS using a smaller prime, providing smaller keys and ciphertexts.
> 
> As a result, HealSIDH is a practically efficient SIDH based (interactive) key exchange incorporating a “direct” countermeasure to the GPST adaptive attack.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_10](https://doi.org/10.1007/978-3-030-92068-5_10)
## Adaptive Security via Deletion in Attribute-Based Encryption: Solutions from Search Assumptions in Bilinear Groups.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#adaptive-security-via-deletion-in-attribute-based-encryption-solutions-from-search-assumptions-in-bilinear-groups)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#adaptive-security-via-deletion-in-attribute-based-encryption-solutions-from-search-assumptions-in-bilinear-groups)
### Authors
* Rishab Goyal, MIT, Cambridge, MA, USA
* Jiahui Liu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### Abstract
> One of the primary research challenges in Attribute-Based Encryption (ABE) is constructing and proving cryptosystems that are adaptively secure. To date the main paradigm for achieving adaptive security in ABE is dual system encryption. However, almost all such solutions in bilinear groups rely on (variants of) either the subgroup decision problem over composite order groups or the decision linear assumption. Both of these assumptions are decisional rather than search assumptions and the target of the assumption is a source or bilinear group element. This is in contrast to earlier selectively secure ABE systems which can be proven secure from either the decisional or search Bilinear Diffie-Hellman assumption. In this work we make progress on closing this gap by giving a new ABE construction for the subset functionality and prove security under the Search Bilinear Diffie-Hellman assumption.
> 
> We first provide a framework for proving adaptive security in Attribute-Based Encryption systems. We introduce a concept of ABE with deletable attributes where any party can take a ciphertext encrypted under the attribute string \(x \in \{0, 1\}^n\) and modify it into a ciphertext encrypted under any string \(x' \in \{0, 1, \bot \}^n\) where \(x'\) is derived by replacing any bits of x with \(\bot \) symbols (i.e. “deleting” attributes of x). The semantics of the system are that any private key for a circuit C can be used to decrypt a ciphertext associated with \(x'\) if none of the input bits read by circuit C are \(\bot \) symbols and \(C(x') = 1\).
> 
> We show a pathway for combining ABE with deletable attributes with constrained pseudorandom functions to obtain adaptively secure ABE building upon the recent work of Tsabary [30]. Our new ABE system will be adaptively secure and be a ciphertext-policy ABE that supports the same functionality as the underlying constrained PRF as long as the PRF is “deletion conforming”. Here we also provide a simple constrained PRF construction that gives subset functionality.
> 
> Our approach enables us to access a broader array of Attribute-Based Encryption schemes support deletion of attributes. For example, we show that both the Goyal et al. (GPSW) [19] and Boyen [6] ABE schemes can trivially handle a deletion operation. And, by using a hardcore bit variant of GPSW scheme we obtain an adaptively secure ABE scheme under the Search Bilinear Diffie-Hellman assumption in addition to pseudo random functions in NC1. This gives the first adaptively secure ABE from a search assumption as all prior work relied on decision assumptions over source group elements.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_11](https://doi.org/10.1007/978-3-030-92068-5_11)
## Public Key Encryption with Flexible Pattern Matching.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#public-key-encryption-with-flexible-pattern-matching)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#public-key-encryption-with-flexible-pattern-matching)
### Authors
* Élie Bouscatié, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* Olivier Sanders, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* Élie Bouscatié, Université de Bordeaux, INRIA, CNRS, IMB UMR 5251, 33405, Talence, France
* Guilhem Castagnos, Université de Bordeaux, INRIA, CNRS, IMB UMR 5251, 33405, Talence, France
### Abstract
> Many interesting applications of pattern matching (e.g. deep-packet inspection or medical data analysis) target very sensitive data. In particular, spotting illegal behaviour in internet traffic conflicts with legitimate privacy requirements, which usually forces users (e.g. children, employees) to blindly trust an entity that fully decrypts their traffic in the name of security.
> 
> The compromise between traffic analysis and privacy can be achieved through searchable encryption. However, as the traffic data is a stream and as the patterns to search are bound to evolve over time (e.g. new virus signatures), these applications require a kind of searchable encryption that provides more flexibility than the classical schemes. We indeed need to be able to search for patterns of variable sizes in an arbitrary long stream that has potentially been encrypted prior to pattern identification. To stress these specificities, we call such a scheme a stream encryption supporting pattern matching.
> 
> Recent papers use bilinear groups to provide public key constructions supporting these features [3, 13]. These solutions are lighter than more generic ones (e.g. fully homomorphic encryption) while retaining the adequate expressivity to support pattern matching without harming privacy more than needed. However, all existing solutions in this family have weaknesses with respect to efficiency and security that need to be addressed. Regarding efficiency, their public key has a size linear in the size of the alphabet, which can be quite large, in particular for applications that naturally process data as bytestrings. Regarding security, they all rely on a very strong computational assumption that is both interactive and specially tailored for this kind of scheme.
> 
> In this paper, we tackle these problems by providing two new constructions using bilinear groups to support pattern matching on encrypted streams. Our first construction shares the same strong assumption but dramatically reduces the size of the public key by removing the dependency on the size of the alphabet, while nearly halving the size of the ciphertext. On a typical application with large patterns, our public key is two order of magnitude smaller than the one of previous schemes, which demonstrates the practicality of our approach. Our second construction manages to retain most of the good features of the first one while exclusively relying on a simple (static) variant of \(\mathsf {DDH}\), which solves the security problem of previous works.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_12](https://doi.org/10.1007/978-3-030-92068-5_12)
## Bounded Collusion ABE for TMs from IBE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#bounded-collusion-abe-for-tms-from-ibe)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#bounded-collusion-abe-for-tms-from-ibe)
### Authors
* Rishab Goyal, MIT, Cambridge, MA, USA
* Ridwan Syed, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### Abstract
> We give an attribute-based encryption system for Turing Machines that is provably secure assuming only the existence of identity-based encryption (IBE) for large identity spaces. Currently, IBE is known to be realizable from most mainstream number theoretic assumptions that imply public key cryptography including factoring, the search Diffie-Hellman assumption, and the Learning with Errors assumption.
> 
> Our core construction provides security against an attacker that makes a single key query for a machine T before declaring a challenge string \(w^*\) that is associated with the challenge ciphertext. We build our construction by leveraging a Garbled RAM construction of Gentry, Halevi, Raykova and Wichs [33]; however, to prove security we need to introduce a new notion of security called iterated simulation security.
> 
> We then show how to transform our core construction into one that is secure for an a-priori bounded number \(q=q(\lambda )\) of key queries that can occur either before or after the challenge ciphertext. We do this by first showing how one can use a special type of non-committing encryption to transform a system that is secure only if a single key is chosen before the challenge ciphertext is declared into one where the single key can be requested either before or after the challenge ciphertext. We give a simple construction of this non-committing encryption from public key encryption in the Random Oracle Model. Next, one can apply standard combinatorial techniques to lift from single-key adaptive security to q-key adaptive security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_13](https://doi.org/10.1007/978-3-030-92068-5_13)
## Digital Signatures with Memory-Tight Security in the Multi-challenge Setting.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#digital-signatures-with-memory-tight-security-in-the-multi-challenge-setting)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#digital-signatures-with-memory-tight-security-in-the-multi-challenge-setting)
### Authors
* Denis Diemert, Bergische Universität Wuppertal, Wuppertal, Germany
* Kai Gellert, Bergische Universität Wuppertal, Wuppertal, Germany
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Lin Lyu, Bergische Universität Wuppertal, Wuppertal, Germany
### Abstract
> The standard security notion for digital signatures is “single-challenge” (SC) EUF-CMA security, where the adversary outputs a single message-signature pair and “wins” if it is a forgery. Auerbach et al. (CRYPTO 2017) introduced memory-tightness of reductions and argued that the right security goal in this setting is actually a stronger “multi-challenge” (MC) definition, where an adversary may output many message-signature pairs and “wins” if at least one is a forgery. Currently, no construction from simple standard assumptions is known to achieve full tightness with respect to time, success probability, and memory simultaneously. Previous works showed that memory-tight signatures cannot be achieved via certain natural classes of reductions (Auerbach et al., CRYPTO 2017; Wang et al., EUROCRYPT 2018). These impossibility results may give the impression that the construction of memory-tight signatures is difficult or even impossible.
> 
> We show that this impression is false, by giving the first constructions of signature schemes with full tightness in all dimensions in the MC setting. To circumvent the known impossibility results, we first introduce the notion of canonical reductions in the SC setting. We prove a general theorem establishing that every signature scheme with a canonical reduction is already memory-tightly secure in the MC setting, provided that it is strongly unforgeable, the adversary receives only one signature per message, and assuming the existence of a tightly-secure pseudorandom function. We then achieve memory-tight many-signatures-per-message security in the MC setting by a simple additional generic transformation. This yields the first memory-tightly, strongly EUF-CMA-secure signature schemes in the MC setting. Finally, we show that standard security proofs often already can be viewed as canonical reductions. Concretely, we show this for signatures from lossy identification schemes (Abdalla et al., EUROCRYPT 2012), two variants of RSA Full-Domain Hash (Bellare and Rogaway, EUROCRYPT 1996), and two variants of BLS signatures (Boneh et al., ASIACRYPT 2001).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_14](https://doi.org/10.1007/978-3-030-92068-5_14)
## (Compact) Adaptively Secure FE for Attribute-Weighted Sums from k-Lin.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#compact-adaptively-secure-fe-for-attribute-weighted-sums-from-k-lin)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#compact-adaptively-secure-fe-for-attribute-weighted-sums-from-k-lin)
### Authors
* Pratish Datta, NTT Research, Sunnyvale, CA, 94085, USA
* Tapas Pal, NTT Research, Sunnyvale, CA, 94085, USA
* Tapas Pal, Indian Institute of Technology Kharagpur, Kharagpur, 721302, West Bengal, India
### Abstract
> This paper presents the first adaptively simulation secure functional encryption (FE) schemes for attribute-weighted sums. In such an FE scheme, encryption takes as input N pairs of attribute \(\{(x_i, z_i)\}_{i\in [N]}\) for some \(N\in \mathbb {N}\) where the attributes \(\{x_i\}_{i\in [N]}\) are public while the attributes \(\{z_i\}_{i\in [N]}\) are private. The indices \(i\in [N]\) are referred to as the slots. A secret key corresponds to some weight function f, and decryption recovers the weighted sum \(\sum _{i=1}^N f(x_i)z_i\). This is an important functionality with a wide range of potential real life applications. In the proposed FE schemes attributes are viewed as vectors and weight functions are arithmetic branching programs (ABP). We present two schemes with varying parameters and levels of adaptive security.
> 
> (a) We first present a one-slot scheme that achieves adaptive security in the simulation-based security model against a bounded number of ciphertext queries and an arbitrary polynomial number of secret key queries both before and after the ciphertext queries. This is the best possible level of security one can achieve in the adaptive simulation-based framework. From the relations between the simulation-based and indistinguishability-based security frameworks for FE, it follows that the proposed FE scheme also achieves indistinguishability-based adaptive security against an a-priori unbounded number of ciphertext queries and an arbitrary polynomial number of secret key queries both before and after the ciphertext queries. Moreover, the scheme enjoys compact ciphertexts that do not grow with the number of appearances of the attributes within the weight functions.
> 
> (b) Next, bootstrapping from the one-slot scheme, we present an unbounded-slot scheme that achieves simulation-based adaptive security against a bounded number of ciphertext and pre-ciphertext secret key queries while supporting an a-priori unbounded number of post-ciphertext secret key queries. The scheme achieves public parameters and secret key sizes independent of the number of slots N and a secret key can decrypt a ciphertext for any a-priori unbounded N. Further, just like the one-slot scheme, this scheme also has the ciphertext size independent of the number of appearances of the attributes within the weight functions. However, all the parameters of the scheme, namely, the master public key, ciphertexts, and secret keys scale linearly with the bound on the number of pre-ciphertext secret key queries.
> 
> Our schemes are built upon asymmetric bilinear groups of prime order and the security is derived under the standard (bilateral) k-Linear (k-Lin) assumption. Our work resolves an open problem posed by Abdalla, Gong, and Wee in CRYPTO 2020, where they presented an unbounded-slot FE scheme for attribute-weighted sum achieving only semi-adaptive simulation security. At a technical level, our work extends the recent adaptive security framework of Lin and Luo [EUROCRYPT 2020], devised to achieve compact ciphertexts in the context of indistinguishability-based payload-hiding security, into the setting of simulation-based adaptive attribute-hiding security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_15](https://doi.org/10.1007/978-3-030-92068-5_15)
## Boosting the Security of Blind Signature Schemes.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#boosting-the-security-of-blind-signature-schemes)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#boosting-the-security-of-blind-signature-schemes)
### Authors
* Jonathan Katz, University of Maryland, College Park, USA
* Michael Rosenberg, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Existing blind signature schemes that are secure for polynomially many concurrent executions of the signing protocol are either inefficient or rely on non-standard assumptions (even in the random-oracle model). We show the first efficient blind signature schemes achieving this level of security based on the RSA, factoring, or discrete logarithm assumptions (in the random-oracle model). Our core technique involves an extension and generalization of a transform due to Pointcheval (Eurocrypt’98) that allows us to convert certain blind signature schemes that are secure for (concurrently) issuing logarithmically many signatures into ones secure for (concurrently) issuing polynomially many signatures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_16](https://doi.org/10.1007/978-3-030-92068-5_16)
## PrORAM - Fast P(logn) Authenticated Shares ZK ORAM.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#proram-fast-p-logn-authenticated-shares-zk-oram)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#proram-fast-p-logn-authenticated-shares-zk-oram)
### Authors
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> We construct a concretely efficient Zero Knowledge (ZK) Oblivious RAM (ORAM) for ZK Proof (ZKP) systems based on authenticated sharings of arithmetic values. It consumes \(2\log n\) oblivious transfers (OTs) of length-\(2\sigma \) secrets per access of an arithmetic value, for statistical security parameter \(\sigma \) and array size n. This is an asymptotic and concrete improvement over previous best (concretely efficient) ZK ORAM BubbleRAM of Heath and Kolesnikov ([HK20a], CCS 2020), whose access cost is \(\frac{1}{2}\log ^2 n\) OTs of length-\(2\sigma \) secrets.
> 
> ZK ORAM is essential for proving statements that are best expressed as RAM programs, rather than Boolean or arithmetic circuits.
> 
> Our construction is private-coin ZK. We integrate it with [HK20a]’s ZKP protocol and prove the resulting ZKP system secure.
> 
> We implemented PrORAM in C++. Compared to state-of-the-art BubbleRAM, PrORAM is \(\approx \) \(10\times \) faster for arrays of size \(2^{20}\) of 40-bit values.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_17](https://doi.org/10.1007/978-3-030-92068-5_17)
## Compressed $\varSigma $-Protocols for Bilinear Group Arithmetic Circuits and Application to Logarithmic Transparent Threshold Signatures.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#compressed-varsigma-protocols-for-bilinear-group-arithmetic-circuits-and-application-to-logarithmic-transparent-threshold-signatures)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#compressed-varsigma-protocols-for-bilinear-group-arithmetic-circuits-and-application-to-logarithmic-transparent-threshold-signatures)
### Authors
* Thomas Attema, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ronald Cramer, CWI, Cryptology Group, Amsterdam, The Netherlands
* Thomas Attema, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Ronald Cramer, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Matthieu Rambaud, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Thomas Attema, TNO, Cyber Security and Robustness, The Hague, The Netherlands
### Abstract
> Lai et al. (CCS 2019) have shown how Bulletproof’s arithmetic circuit zero-knowledge protocol (Bootle et al., EUROCRYPT 2016 and Bünz et al., S&P 2018) can be generalized to work for bilinear group arithmetic circuits directly, i.e., without requiring these circuits to be translated into arithmetic circuits.
> 
> In a nutshell, a bilinear group arithmetic circuit is a standard arithmetic circuit augmented with special gates capturing group exponentiations or pairings. Such circuits are highly relevant, e.g., in the context of zero-knowledge statements over pairing-based languages. As expressing these special gates in terms of a standard arithmetic circuit results in a significant overhead in circuit size, an approach to zero-knowledge via standard arithmetic circuits may incur substantial additional costs. The approach due to Lai et al. shows how to avoid this by integrating additional zero-knowledge techniques into the Bulletproof framework so as to handle the special gates very efficiently.
> 
> We take a different approach by generalizing Compressed \(\varSigma \)-Protocol Theory (CRYPTO 2020) from arithmetic circuit relations to bilinear group arithmetic circuit relations. Besides its conceptual simplicity, our approach has the practical advantage of reducing the communication costs of Lai et al.’s protocol by roughly a multiplicative factor 3.
> 
> Finally, we show an application of our results which may be of independent interest. We construct the first k-out-of-n threshold signature scheme (TSS) that allows for transparent setup and that yields threshold signatures of size logarithmic in n. The threshold signature hides the identities of the k signers and the threshold k can be dynamically chosen at aggregation time.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_18](https://doi.org/10.1007/978-3-030-92068-5_18)
## Promise $\varSigma $-Protocol: How to Construct Efficient Threshold ECDSA from Encryptions Based on Class Groups.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#promise-varsigma-protocol-how-to-construct-efficient-threshold-ecdsa-from-encryptions-based-on-class-groups)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#promise-varsigma-protocol-how-to-construct-efficient-threshold-ecdsa-from-encryptions-based-on-class-groups)
### Authors
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Shunli Ma, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xinxuan Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Hailong Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Shunli Ma, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Xinxuan Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Hailong Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Xuyang Song, Shanghai Key Laboratory of Privacy-Preserving Computation, Shanghai, China
* Xiang Xie, Shanghai Key Laboratory of Privacy-Preserving Computation, Shanghai, China
### Abstract
> Threshold Signatures allow n parties to share the ability of issuing digital signatures so that any coalition of size at least \(t+1\) can sign, whereas groups of t or fewer players cannot. The currently known class-group-based threshold ECDSA constructions are either inefficient (requiring parallel-repetition of the underlying zero knowledge proof with small challenge space) or requiring rather non-standard low order assumption. In this paper, we present efficient threshold ECDSA protocols from encryption schemes based on class groups with neither assuming the low order assumption nor parallel repeating the underlying zero knowledge proof, yielding a significant efficiency improvement in the key generation over previous constructions.
> 
> Along the way we introduce a new notion of promise \(\varSigma \)-protocol that satisfies only a weaker soundness called promise extractability. An accepting promise \(\varSigma \)-proof for statements related to class-group-based encryptions does not establish the truth of the statement but provides security guarantees (promise extractability) that are sufficient for our applications. We also show how to simulate homomorphic operations on a (possibly invalid) class-group-based encryption whose correctness has been proven via our promise \(\varSigma \)-protocol. We believe that these techniques are of independent interest and applicable to other scenarios where efficient zero knowledge proofs for statements related to class-group is required.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_19](https://doi.org/10.1007/978-3-030-92068-5_19)
## The One-More Discrete Logarithm Assumption in the Generic Group Model.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#the-one-more-discrete-logarithm-assumption-in-the-generic-group-model)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#the-one-more-discrete-logarithm-assumption-in-the-generic-group-model)
### Authors
* Balthazar Bauer, Université de Paris, Paris, France
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Antoine Plouviez, Inria, ENS, CNRS, PSL, Paris, France
### Abstract
> The one more-discrete logarithm assumption (OMDL) underlies the security analysis of identification protocols, blind signature and multi-signature schemes, such as blind Schnorr signatures and the recent MuSig2 multi-signatures. As these schemes produce standard Schnorr signatures, they are compatible with existing systems, e.g. in the context of blockchains. OMDL is moreover assumed for many results on the impossibility of certain security reductions.
> 
> Despite its wide use, surprisingly, OMDL is lacking any rigorous analysis; there is not even a proof that it holds in the generic group model (GGM). (We show that a claimed proof is flawed.) In this work we give a formal proof of OMDL in the GGM. We also prove a related assumption, the one-more computational Diffie-Hellman assumption, in the GGM. Our proofs deviate from prior GGM proofs and replace the use of the Schwartz-Zippel Lemma by a new argument.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_20](https://doi.org/10.1007/978-3-030-92068-5_20)
## Verifiably-Extractable OWFs and Their Applications to Subversion Zero-Knowledge.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#verifiably-extractable-owfs-and-their-applications-to-subversion-zero-knowledge)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#verifiably-extractable-owfs-and-their-applications-to-subversion-zero-knowledge)
### Authors
* Prastudy Fauzi, Simula UiB, Bergen, Norway
* Helger Lipmaa, Simula UiB, Bergen, Norway
* Arne Tobias Ødegaard, Simula UiB, Bergen, Norway
* Helger Lipmaa, University of Tartu, Tartu, Estonia
* Janno Siim, University of Tartu, Tartu, Estonia
* Michał Zając, Clearmatics, London, UK
### Abstract
> An extractable one-way function (EOWF), introduced by Canetti and Dakdouk (ICALP 2008) and generalized by Bitansky et al. (SIAM Journal on Computing vol. 45), is an OWF that allows for efficient extraction of a preimage for the function. We study (generalized) EOWFs that have a public image verification algorithm. We call such OWFs verifiably-extractable and show that several previously known constructions satisfy this notion. We study how such OWFs relate to subversion zero-knowledge (Sub-ZK) NIZKs by using them to generically construct a Sub-ZK NIZK from a NIZK satisfying certain additional properties, and conversely show how to obtain them from any Sub-ZK NIZK. Prior to our work, the Sub-ZK property of NIZKs was achieved using concrete knowledge assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_21](https://doi.org/10.1007/978-3-030-92068-5_21)
## Chain Reductions for Multi-signatures and the HBMS Scheme.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#chain-reductions-for-multi-signatures-and-the-hbms-scheme)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#chain-reductions-for-multi-signatures-and-the-hbms-scheme)
### Authors
* Mihir Bellare, Department of Computer Science and Engineering, University of California, San Diego, USA
* Wei Dai, Department of Computer Science and Engineering, University of California, San Diego, USA
### Abstract
> Existing proofs for existing Discrete Log (DL) based multi-signature schemes give only weak guarantees if the schemes are implemented, as they are in practice, in 256-bit groups. This is because the underlying reductions, which are mostly in the standard model and from DL, are loose. We show that relaxing either the model or the assumption suffices to obtain tight reductions. Namely we give (1) tight proofs from DL in the Algebraic Group Model, and (2) tight, standard-model proofs from well-founded assumptions other than DL. We first do this for the classical 3-round schemes, namely \(\mathsf {BN} \) and \(\mathsf {MuSig} \). Then we give a new 2-round multi-signature scheme, \(\mathsf {HBMS} \), as efficient as prior ones, for which we do the same. These multiple paths to security for a single scheme are made possible by a framework of chain reductions, in which a reduction is broken into a chain of sub-reductions involving intermediate problems. Overall our results improve the security guarantees for DL-based multi-signature schemes in the groups in which they are implemented in practice.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_22](https://doi.org/10.1007/978-3-030-92068-5_22)
## Symmetric Key Exchange with Full Forward Security and Robust Synchronization.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#symmetric-key-exchange-with-full-forward-security-and-robust-synchronization)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#symmetric-key-exchange-with-full-forward-security-and-robust-synchronization)
### Authors
* Colin Boyd, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Bor de Kock, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Lise Millerjord, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Gareth T. Davies, Bergische Universität Wuppertal, Wuppertal, Germany
* Kai Gellert, Bergische Universität Wuppertal, Wuppertal, Germany
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
### Abstract
> We construct lightweight authenticated key exchange protocols based on pre-shared keys, which achieve full forward security and rely only on simple and efficient symmetric-key primitives. All of our protocols have rigorous security proofs in a strong security model, all have low communication complexity, and are particularly suitable for resource-constrained devices.
> 
> We describe three protocols that apply linear key evolution to provide different performance and security properties. Correctness in parallel and concurrent protocol sessions is difficult to achieve for linearly key-evolving protocols, emphasizing the need for assurance of availability alongside the usual confidentiality and authentication security goals. We introduce synchronization robustness as a new formal security goal, which essentially guarantees that parties can re-synchronize efficiently. All of our new protocols achieve this property.
> 
> Since protocols based on linear key evolution cannot guarantee that all concurrently initiated sessions successfully derive a key, we also propose two constructions with non-linear key evolution based on puncturable PRFs. These are instantiable from standard hash functions and require \(O(C \cdot \log (|\mathsf {CTR} |))\) memory, where \(C \) is the number of concurrent sessions and \(|\mathsf {CTR} | \) is an upper bound on the total number of sessions per party. These are the first protocols to simultaneously achieve full forward security, synchronization robustness, and concurrent correctness.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_23](https://doi.org/10.1007/978-3-030-92068-5_23)
## Security Analysis of CPace.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#security-analysis-of-cpace)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#security-analysis-of-cpace)
### Authors
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Michel Abdalla, DFINITY, Zürich, Switzerland
* Björn Haase, Endress+Hauser Liquid Analysis, Gerlingen, Germany
* Julia Hesse, IBM Research Europe, Zürich, Switzerland
### Abstract
> In response to standardization requests regarding password-authenticated key exchange (PAKE) protocols, the IRTF working group CFRG has setup a PAKE selection process in 2019, which led to the selection of the CPace protocol in the balanced setting, in which parties share a common password. In subsequent standardization efforts, the CPace protocol further developed, yielding a protocol family whose actual security guarantees in practical settings are not well understood. In this paper, we provide a comprehensive security analysis of CPace in the universal composability framework. Our analysis is realistic in the sense that it captures adaptive corruptions and refrains from modeling CPace’s \(\textsf {Map2Pt}\) function that maps field elements to curve points as an idealized function. In order to extend our proofs to different CPace variants optimized for specific elliptic-curve ecosystems, we employ a new approach which represents the assumptions required by the proof as libraries accessed by a simulator. By allowing for the modular replacement of assumptions used in the proof, this new approach avoids a repeated analysis of unchanged protocol parts and lets us efficiently analyze the security guarantees of all the different CPace variants. As a result of our analysis, all of the investigated practical CPace variants enjoy adaptive UC security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_24](https://doi.org/10.1007/978-3-030-92068-5_24)
## Modular Design of Role-Symmetric Authenticated Key Exchange Protocols.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#modular-design-of-role-symmetric-authenticated-key-exchange-protocols)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#modular-design-of-role-symmetric-authenticated-key-exchange-protocols)
### Authors
* Yuting Xiao, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Rui Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Hui Ma, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Rui Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> Authenticated Key Exchange (AKE) is an important primitive in applied cryptography. Previously several strong models of AKE were introduced, e.g., CK, CK\(^+\), eCK and their extended versions considering perfect forward secrecy (PFS), (denoted by a “-PFS” suffix). These models provide different security guarantees and they are incomparable. Hence, one still lacks systematic understanding of the prerequisites for secure AKEs and a modular design of AKE protocols. In this paper, we investigate this issue in the context of One-Round Authenticated Key Exchange (ORKE), which is role-symmetric for players and only needs a single round to establish a session key.
> 
> Our treatments are as follows: First, we reformat the CK, CK-PFS, CK\(^+\), CK\(^+\)-PFS, eCK and eCK-PFS models in the context of ORKE, some of which are formulated for the first time in the literature. Next, we introduce a new tool, Key-wise Recoverable Function (KRF). With merely black-box calls to KRFs, we build modular constructions for ORKEs. As an immediate application, many previous protocols can be explained naturally by the construction. We further build a protocol with CK, CK\(^+\), eCK, CK-PFS, CK\(^+\)-PFS and eCK-PFS security simultaneously, by properly instantiating the underlying KRF. As a by-product, we have simplified proofs for a few known protocols, with non-standard assumptions avoidable.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_25](https://doi.org/10.1007/978-3-030-92068-5_25)
